import { InputType, Field } from '@nestjs/graphql';
import { UserRole } from '../entity/user.entity';

@InputType()
export class CreateUserInput {
  @Field()
  nombre: string;

  @Field()
  correo: string;

  @Field()
  password: string;

  @Field(() => UserRole)
  rol: UserRole;
}
