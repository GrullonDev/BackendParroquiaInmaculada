import { InputType, Field } from '@nestjs/graphql';
import { TipoDocumento } from '../entity/documento.entity';

@InputType()
export class CreateDocumentoInput {
  @Field(() => TipoDocumento)
  tipo: TipoDocumento;

  @Field()
  fechaEmision: string;

  @Field({ nullable: true })
  observaciones?: string;

  @Field()
  clienteId: string;

  @Field()
  sacerdoteNombre: string;
}
