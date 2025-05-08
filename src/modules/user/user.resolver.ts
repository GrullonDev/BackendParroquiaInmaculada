import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserInput } from './dto/create-user.input';
import { UnauthorizedException } from '@nestjs/common';


@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) { }

    @Query(() => String)
    hello(): string {
        return '¡Hola desde GraphQL!';
    }

    @Mutation(() => User, { name: 'createUser' })
    async createUser(
        @Args('input') input: CreateUserInput,
    ): Promise<User> {
        return this.userService.create(input);
    }

    @Mutation(() => String, { name: 'login' })
    async login(
        @Args('correo') correo: string,
        @Args('password') password: string,
    ): Promise<string> {
        const user = await this.authService.validateUser(correo, password);
        if (!user) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

        const token = await this.authService.login(user);
        return token.access_token;
    }
}
