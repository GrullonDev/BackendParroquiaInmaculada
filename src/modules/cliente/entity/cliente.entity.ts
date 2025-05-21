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
    @ManyToOne(() => Padrino, padrino => padrino.clientes, { eager: true })
    padrino: Padrino;

    @Field(() => Sacerdote, { nullable: true })
    @ManyToOne(() => Sacerdote, sacerdote => sacerdote.clientes, { eager: true })
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
}