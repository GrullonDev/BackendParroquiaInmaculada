import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Cliente } from '../../cliente/entity/cliente.entity';
import { Documento } from 'src/modules/documento/entity/documento.entity';

@ObjectType()
@Entity()
export class Sacerdote {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid') // ✅ Añadir columna primaria
  id: string;

  @Field()
  @Column()
  nombreCompleto: string;

  @Field(() => Int)
  @Column({ default: 0 })
  cantidad: number;

  @Field(() => [Cliente], { nullable: true })
  @OneToMany(() => Cliente, (cliente) => cliente.sacerdote)
  @JoinColumn({name: 'cliente_id'})
  clientes: Cliente[];

  @Field(() => [Documento], { nullable: true })
  @OneToMany(() => Documento, (documento) => documento.sacerdote)
  @JoinColumn({name: 'document_id'})
  documentos: Documento[];
}
