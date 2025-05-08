import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Padrino } from 'src/modules/padrino/entity/padrino.entity';
import { Sacerdote } from 'src/modules/sacerdote/entity/sacerdote.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';

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

    @Field({ nullable: true })
    @Column({ nullable: true })
    fechasPlaticas: string;

    @Field(() => Padrino)
    @ManyToOne(() => Padrino, padrino => padrino.clientes, { eager: true })
    padrino: Padrino;

    @Field(() => Sacerdote)
    @ManyToOne(() => Sacerdote, sacerdote => sacerdote.clientes, { eager: true })
    @JoinColumn({ name: 'sacerdote_id' })
    sacerdote: Sacerdote;

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