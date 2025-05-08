import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Cliente {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column({ unique: true })
    cui: string;

    @Field()
    @Column()
    nombreNino: string;

    @Field()
    @Column()
    padrinos: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    fechasPlaticas: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    sacerdote: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    parroquia: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    direccion: string;

    @Field({ nullable: true })
    @Column({ nullable: true })
    firmaSacerdote: string;

    @Field()
    @CreateDateColumn()
    createdAt: Date;
}