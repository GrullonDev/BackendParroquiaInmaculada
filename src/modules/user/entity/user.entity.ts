// src/modules/user/entities/user.entity.ts
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum UserRole {
    PARROCO = 'PARROCO',
    VICARIO = 'VICARIO',
    NOTARIO = 'NOTARIO',
    VICE_CANCILLER = 'VICE_CANCILLER',
}

registerEnumType(UserRole, {
    name: 'UserRole',
});

@ObjectType()
@Entity({ name: 'users' })
export class User {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field()
    @Column()
    nombre: string;

    @Field()
    @Column({ unique: true })
    correo: string;

    @Field(() => UserRole)
    @Column({ type: 'enum', enum: UserRole })
    rol: UserRole;

    @Column()
    password: string; // No se expone con @Field por seguridad
}