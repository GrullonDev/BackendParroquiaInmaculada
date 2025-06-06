import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Documento } from 'src/modules/documento/entity/documento.entity';
import { Padrino } from 'src/modules/padrino/entity/padrino.entity';
import { Sacerdote } from 'src/modules/sacerdote/entity/sacerdote.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@ObjectType()
@Entity()
export class Cliente {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid') // ✅ Añadir columna primaria
  id: string;

  @Field()
  @Column({ unique: true })
  noFolioLibro: string;

  @Field()
  @Column()
  nombreNino: string;

  @Field()
  @Column()
  fechaNacimiento: string;

  @Field()
  @Column()
  padre: string;

  @Field()
  @Column()
  madre: string;

  @Field(() => Padrino, { nullable: true })
  @ManyToOne(() => Padrino, (padrino) => padrino.clientes, { eager: true })
  @JoinColumn({ name: 'padrino_id' })
  padrino: Padrino;

  @Field(() => Sacerdote, { nullable: true })
  @ManyToOne(() => Sacerdote, (sacerdote) => sacerdote.clientes, {
    eager: true,
  })
  @JoinColumn({ name: 'sacerdote_id' })
  sacerdote: Sacerdote;

  @Field({ nullable: true })
  @Column({ nullable: true })
  parroquia: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  firmaSacerdote: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  fechaBautismo: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  partida: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  celebrante: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  observaciones: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  campo34: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  campo35: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  campo36: string;

  @Field(() => [Documento], { nullable: true })
  @OneToMany(() => Documento, (documento) => documento.cliente)
  @JoinColumn({ name: 'documento_id' })
  documentos: Documento[];
}
