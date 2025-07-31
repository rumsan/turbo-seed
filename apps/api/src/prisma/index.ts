// import { Global, Injectable, Module } from '@nestjs/common';
// import prisma from 'src/database/db';

// @Injectable()
// export class PrismaService {
//   // constructor(public readonly client: PrismaClient) {}
//   public readonly client = prisma;
// }

// @Global()
// @Module({
//   providers: [PrismaService],
//   exports: [PrismaService],
// })
// export class PrismaModule {
//   static forRoot() {
//     return {
//       module: PrismaModule,
//       providers: [
//         {
//           provide: PrismaService,
//           useValue: new PrismaService(prisma),
//         },
//       ],
//       exports: [PrismaService],
//     };
//   }
// }

import { Global, Injectable, Module } from '@nestjs/common';
import prisma from 'src/database/db';

@Injectable()
export class PrismaService {
  // constructor(public readonly client: PrismaClient) {}
  public readonly client = prisma;
}

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {
  static forRoot() {
    return {
      module: PrismaModule,
      providers: [PrismaService],
      exports: [PrismaService],
    };
  }
}
