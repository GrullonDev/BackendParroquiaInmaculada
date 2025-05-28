import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DocumentosPorAnioOutput {
  @Field(() => Int)
  anio: number;

  @Field(() => Int)
  bautizos: number;

  @Field(() => Int)
  comuniones: number;

  @Field(() => Int)
  confirmaciones: number;

  @Field(() => Int)
  matrimonios: number;
}
