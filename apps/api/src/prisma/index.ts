import { Global, Injectable, Module } from '@nestjs/common';
import { PrismaClient } from '@rahat/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {}

@Global()
@Module({ providers: [PrismaService], exports: [PrismaService] })
export class PrismaModule {
  static forRoot() {
    return {
      module: PrismaModule,
      providers: [PrismaService, PrismaClient],
      exports: [PrismaService],
    };
  }
}
