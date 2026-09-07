import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const repository = process.env.GITHUB_REPOSITORY;
if (!repository) {
  throw new Error('GITHUB_REPOSITORY is required');
}

const repositoryName = repository.split('/')[1];
const basePath = repositoryName.endsWith('.github.io') ? '' : `/${repositoryName}`;
const outputDirectory = path.resolve('dist/client');
const textExtensions = new Set(['.html', '.js', '.css', '.json', '.rsc', '.txt', '.xml']);

async function updateDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await updateDirectory(filePath);
      continue;
    }

    if (!textExtensions.has(path.extname(entry.name))) continue;

    const original = await readFile(filePath, 'utf8');
    const updated = original
      .replaceAll('/_next/', `${basePath}/_next/`)
      .replaceAll('/favicon.svg', `${basePath}/favicon.svg`);

    if (updated !== original) {
      await writeFile(filePath, updated);
    }
  }
}

await updateDirectory(outputDirectory);
console.log(`Prepared GitHub Pages paths for ${basePath || '/'}`);
