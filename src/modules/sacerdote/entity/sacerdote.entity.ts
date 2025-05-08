import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cliente } from '../../cliente/entity/cliente.entity';

@ObjectType()
@Entity()
export class Sacerdote {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column()
    nombreCompleto: string;

    @Field(() => Int)
    @Column({ default: 0 })
    cantidad: number;

    @OneToMany(() => Cliente, cliente => cliente.sacerdote)
    clientes: Cliente[];
}