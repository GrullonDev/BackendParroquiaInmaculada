import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateClienteInput {
    @Field()
    noFolioLibro: string;

    @Field()
    nombreNino: string;

    @Field()
    fechaNacimiento: string;

    @Field()
    padre: string;

    @Field()
    madre: string;

    @Field()
    padrinos: string;

    @Field()
    sacerdote: string;

    @Field({ nullable: true })
    parroquia?: string;

    @Field({ nullable: true })
    firmaSacerdote?: string;
}