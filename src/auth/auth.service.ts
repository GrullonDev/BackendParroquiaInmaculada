import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }

    async validateUser(correo: string, pass: string) {
        const user = await this.userService.findByCorreo(correo);
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        throw new UnauthorizedException('Credenciales inválidas');
    }

    async login(user: any) {
        const payload = { correo: user.correo, sub: user.id, rol: user.rol };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}