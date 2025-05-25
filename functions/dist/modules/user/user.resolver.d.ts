import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserInput } from './dto/create-user.input';
export declare class UserResolver {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    hello(): string;
    createUser(input: CreateUserInput): Promise<User>;
    login(correo: string, password: string): Promise<string>;
    findAll(): Promise<User[]>;
}
