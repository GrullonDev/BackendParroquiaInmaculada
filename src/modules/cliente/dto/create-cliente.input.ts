import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateClienteInput {
    @Field()
    cui: string;

    @Field()
    nombreNino: string;

    @Field()
    padrinos: string; // aquí se escriben por ejemplo: "Carlos y María"

    @Field()
    sacerdote: string;

    @Field({ nullable: true })
    fechasPlaticas?: string;

    @Field({ nullable: true })
    parroquia?: string;

    @Field({ nullable: true })
    direccion?: string;

    @Field({ nullable: true })
    firmaSacerdote?: string;
}