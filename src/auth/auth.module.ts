import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserModule } from '../modules/user/user.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    forwardRef(() => UserModule),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 's3cr3t',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
