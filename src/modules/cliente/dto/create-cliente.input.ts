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

    @Field({ nullable: true })
    fechaBautismo?: string;

    @Field({ nullable: true })
    partida?: string;

    @Field({ nullable: true })
    celebrante?: string;

    @Field({ nullable: true })
    observaciones?: string;

    @Field({ nullable: true })
    campo34?: string;

    @Field({ nullable: true })
    campo35?: string;

    @Field({ nullable: true })
    campo36?: string;
}