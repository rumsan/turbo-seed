import { Global, Injectable, Module } from '@nestjs/common';
import { PrismaClient } from '@repo/database/client'; // Adjust the import path as necessary/
@Injectable()
export class PrismaService extends PrismaClient {}

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {
  static forRoot() {
    return {
      module: PrismaModule,
      providers: [PrismaService, PrismaClient],
      exports: [PrismaService],
    };
  }
}
