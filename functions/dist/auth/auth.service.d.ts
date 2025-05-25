import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(correo: string, pass: string): Promise<{
        id: string;
        nombre: string;
        correo: string;
        rol: import("../modules/user/entity/user.entity").UserRole;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
