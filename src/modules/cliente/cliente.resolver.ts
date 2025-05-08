import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Cliente } from './entity/cliente.entity';
import { ClienteService } from './cliente.service';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from '../user/entity/user.entity';

@UseGuards(GqlAuthGuard, RolesGuard)
@Resolver(() => Cliente)
export class ClienteResolver {
    constructor(private readonly clienteService: ClienteService) { }

    @Mutation(() => Cliente)
    @Roles(UserRole.PARROCO)
    async createCliente(
        @Args('input') input: CreateClienteInput,
    ): Promise<Cliente> {
        return this.clienteService.create(input);
    }

    @Query(() => [Cliente])
    @Roles(UserRole.PARROCO)
    async findAllClientes(): Promise<Cliente[]> {
        return this.clienteService.findAll();
    }

    @Query(() => Cliente, { nullable: true })
    @Roles(UserRole.PARROCO)
    async findClienteByCui(
        @Args('cui') cui: string,
    ): Promise<Cliente | null> {
        return this.clienteService.findByCui(cui);
    }
}