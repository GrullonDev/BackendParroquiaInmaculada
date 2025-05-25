import { UserRole } from '../entity/user.entity';
export declare class CreateUserInput {
    nombre: string;
    correo: string;
    password: string;
    rol: UserRole;
}
