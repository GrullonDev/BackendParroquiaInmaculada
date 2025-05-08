import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cliente } from '../../cliente/entity/cliente.entity';

@ObjectType()
@Entity()
export class Padrino {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column()
    nombre: string;

    @OneToMany(() => Cliente, cliente => cliente.padrinos)
    clientes: Cliente[];
}