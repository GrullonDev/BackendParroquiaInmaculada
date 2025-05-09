import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Documento } from './entity/documento.entity';
import { DocumentoService } from './documento.service';
import { CreateDocumentoInput } from './dto/create-documento.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from '../user/entity/user.entity';

@UseGuards(GqlAuthGuard, RolesGuard)
@Resolver(() => Documento)
export class DocumentoResolver {
    constructor(private readonly documentoService: DocumentoService) { }

    @Mutation(() => Documento)
    @Roles(UserRole.PARROCO)
    createDocumento(@Args('input') input: CreateDocumentoInput) {
        return this.documentoService.create(input);
    }

    @Query(() => [Documento])
    @Roles(UserRole.PARROCO)
    findAllDocumentos() {
        return this.documentoService.findAll();
    }
}
