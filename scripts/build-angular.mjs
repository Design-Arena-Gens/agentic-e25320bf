import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const entry = resolve(projectRoot, 'angular/profile-element.ts');
const outfile = resolve(projectRoot, 'public/angular-profile.js');

await mkdir(dirname(outfile), { recursive: true });

await build({
  entryPoints: [entry],
  outfile,
  bundle: true,
  format: 'iife',
  target: ['es2019'],
  platform: 'browser',
  sourcemap: process.env.NODE_ENV !== 'production',
  minify: process.env.NODE_ENV === 'production',
  banner: {
    js: '// Angular custom element bundle generated via esbuild\n'
  }
}).catch((error) => {
  console.error('Failed to build Angular element');
  console.error(error);
  process.exitCode = 1;
});
