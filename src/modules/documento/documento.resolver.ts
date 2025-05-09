import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Documento, TipoDocumento } from './entity/documento.entity';
import { DocumentoService } from './documento.service';
import { CreateDocumentoInput } from './dto/create-documento.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from '../user/entity/user.entity';
import { DocumentosPorAnioOutput } from './dto/documento-summary.output';
import { DocumentosPorMesOutput } from './dto/documento-summary-by-mes.output';

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
    findAllDocumentos(
        @Args('tipo', { nullable: true }) tipo?: TipoDocumento,
        @Args('desde', { nullable: true }) desde?: string,
        @Args('hasta', { nullable: true }) hasta?: string,
    ) {
        return this.documentoService.findAll({ tipo, desde, hasta });
    }

    @Query(() => [DocumentosPorAnioOutput])
    @Roles(UserRole.PARROCO)
    countDocumentosByTipo() {
        return this.documentoService.countDocumentosByTipo();
    }

    @Query(() => [DocumentosPorMesOutput])
    countDocumentosPorMes(): Promise<DocumentosPorMesOutput[]> {
        return this.documentoService.countDocumentosPorMes();
    }
}
