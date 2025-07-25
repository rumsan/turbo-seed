import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from 'src/prisma';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule.forRoot()],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
