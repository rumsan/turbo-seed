// import { getDb } from '@repo/database';
// import { EnvironmentService } from '../env/server';

// const env = new EnvironmentService();
// const prisma = getDb({ connectionString: env.dbUrl });
// export default prisma;

// src/database/db.ts
import { getDb } from '@repo/database';
import { env } from '../env/server'; // <- validated env

console.log(env.DATABASE_URL, 'env URL');
const prisma = getDb({ connectionString: env.DATABASE_URL });
export default prisma;
