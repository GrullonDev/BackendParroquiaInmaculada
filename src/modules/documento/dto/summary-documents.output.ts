import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TotalPorTipoOutput {
    @Field(() => Int)
    bautizos: number;

    @Field(() => Int)
    comuniones: number;

    @Field(() => Int)
    confirmaciones: number;

    @Field(() => Int)
    matrimonios: number;
}