import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
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

  @Field(() => Int)
  @Column({ default: 0 })
  cantidad: number;

  @OneToMany(() => Cliente, (cliente) => cliente.padrino)
  clientes: Cliente[];
}
