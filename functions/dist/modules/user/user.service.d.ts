import { CreateUserInput } from './dto/create-user.input';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(input: CreateUserInput): Promise<User>;
    findByCorreo(correo: string): Promise<User | undefined>;
    findAll(): Promise<User[]>;
}
