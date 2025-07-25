// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class EnvironmentService {
//   constructor(private config: ConfigService) {
//     const dbUrl = this.config.get<string>('DATABASE_URL');
//     console.log('DB URL:', dbUrl);
//   }
// }

// src/env/env.ts
import { z } from 'zod';

const schema = z.object({
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    '❌ Invalid environment variables',
    parsed.error.flatten().fieldErrors,
  );
  throw new Error('Invalid environment variables');
}

export const env = parsed.data;
