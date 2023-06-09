/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User, UserSchema } from './users.model';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { SendGridModule } from './utils/sendgrid.module';

@Module({
  imports: [
    SendGridModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1day' },
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema, collection: 'users' },
    ]),
  ],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService, JwtService],
})
export class UsersModule {}
