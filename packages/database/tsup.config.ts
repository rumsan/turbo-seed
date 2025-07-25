// import { execSync } from 'child_process';
// import fs from 'fs';
// import path from 'path';
// import { defineConfig } from 'tsup';

// // Run Prisma generate before tsup runs
// console.log('Generating Prisma client...');
// try {
//   execSync('npx prisma generate', { stdio: 'inherit' });
//   console.log('Prisma client generated successfully');

//   // Wait for 1 seconds after Prisma client generation
//   console.log('Waiting for 1 seconds...');
//   const waitSync = (ms: number) => {
//     const end = Date.now() + ms;
//     while (Date.now() < end) {}
//   };
//   waitSync(1000);
//   console.log('Wait complete');
// } catch (error) {
//   console.error('Failed to generate Prisma client:', error);
//   process.exit(1);
// }

// export default defineConfig({
//   entry: ['src/**/*.ts', 'src/**/*.tsx'],
//   format: ['esm', 'cjs'],
//   dts: true,
//   sourcemap: true,
//   //clean: true,
//   treeshake: true,
//   // Ensure we don't bundle any of the peer dependencies
//   external: ['@prisma/client'],
//   onSuccess: async () => {
//     // Source and destination paths
//     const srcDir = path.join(__dirname, 'client');
//     const destDir = path.join(__dirname, 'dist/client');

//     // Create destination directory if it doesn't exist
//     if (!fs.existsSync(destDir)) {
//       fs.mkdirSync(destDir, { recursive: true });
//     }

//     // Copy files recursively
//     fs.cpSync(srcDir, destDir, { recursive: true });
//     fs.rmSync(srcDir, { recursive: true, force: true });

//     console.log('>>>=======================================<<<');
//     console.log('Prisma client copied to dist/client folder');
//   },
// });
