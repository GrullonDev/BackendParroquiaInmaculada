import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Cliente } from '../../cliente/entity/cliente.entity';
import { Sacerdote } from '../../sacerdote/entity/sacerdote.entity';

export enum TipoDocumento {
  BAUTIZO = 'BAUTIZO',
  COMUNION = 'COMUNION',
  CONFIRMACION = 'CONFIRMACION',
  MATRIMONIO = 'MATRIMONIO',
}

// ✅ Esto es obligatorio para GraphQL
registerEnumType(TipoDocumento, {
  name: 'TipoDocumento', // 👈 este nombre debe coincidir con el usado en los decorators
  description: 'Tipos de documento eclesiástico',
});

@ObjectType()
@Entity()
export class Documento {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number; // ← agregado

  @Field(() => TipoDocumento)
  @Column({ type: 'enum', enum: TipoDocumento })
  tipo: TipoDocumento;

  @Field()
  @Column({ type: 'timestamp', nullable: true })
  fechaEmision: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  observaciones: string;

  @Field(() => Cliente)
  @ManyToOne(() => Cliente, { eager: true })
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;

  @Field(() => Sacerdote)
  @ManyToOne(() => Sacerdote, { eager: true })
  @JoinColumn({ name: 'sacerdote_id' })
  sacerdote: Sacerdote;

  @Field()
  @CreateDateColumn()
  creadoEn: Date;
}
