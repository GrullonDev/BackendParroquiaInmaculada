import { Resolver, Query } from '@nestjs/graphql';
import { Sacerdote } from './entity/sacerdote.entity';
import { SacerdoteService } from './sacerdote.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from '../user/entity/user.entity';

@UseGuards(GqlAuthGuard, RolesGuard)
@Resolver(() => Sacerdote)
export class SacerdoteResolver {
  constructor(private readonly sacerdoteService: SacerdoteService) {}

  @Query(() => [Sacerdote])
  @Roles(UserRole.PARROCO)
  async findAllSacerdotes(): Promise<Sacerdote[]> {
    return this.sacerdoteService.findAll();
  }
}
