import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async create(input: CreateUserInput): Promise<User> {
        const hashedPassword = await bcrypt.hash(input.password, 10);
        const user = this.userRepository.create({ ...input, password: hashedPassword });
        return this.userRepository.save(user);
    }

    async findByCorreo(correo: string): Promise<User | undefined> {
        const user = await this.userRepository.findOne({ where: { correo } });
        return user ?? undefined;
    }
}
