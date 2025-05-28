import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cliente } from '../../cliente/entity/cliente.entity';
import { Documento } from 'src/modules/documento/entity/documento.entity';

@ObjectType()
@Entity()
export class Sacerdote {
  @Field(() => ID)
  @PrimaryGeneratedColumn() // ✅ Añadir columna primaria
  id: number;

  @Field()
  @Column()
  nombreCompleto: string;

  @Field(() => Int)
  @Column({ default: 0 })
  cantidad: number;

  @Field(() => [Cliente], { nullable: true })
  @OneToMany(() => Cliente, (cliente) => cliente.sacerdote)
  clientes: Cliente[];

  @Field(() => [Documento], { nullable: true })
  @OneToMany(() => Documento, (documento) => documento.sacerdote)
  documentos: Documento[];
}
