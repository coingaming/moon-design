import { promises as fs } from 'fs';
import path from 'path';
import { Examples } from '../components/types';

export async function hasSubfolders(_path: string) {
  try {
    const files = await fs.readdir(_path, { withFileTypes: true });

    for (const file of files) {
      if (file.isDirectory()) {
        // There is at least one subdirectory
        return true;
      }
    }
    // No subdirectories found
    return false;
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error checking folders:', err.message);
      throw err;
    }
  }
}

type FilesContent = Record<string, string | undefined>;

export async function processFiles(
  dirPath: string,
  processCallback: (filePath: string) => Promise<FilesContent>
) {
  const files = await fs.readdir(dirPath);
  const result: Record<string, Record<string, unknown> | string[] > | FilesContent = {};

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = await fs.stat(filePath);

    if (stats.isDirectory()) {
      const _hasSubfolders = await hasSubfolders(filePath);
      if (_hasSubfolders) {
        result[file] = await processFiles(filePath, processCallback);
      } else {
        result[file] = await processCallback(filePath);
      }
    }

    if (stats.isFile()) {
      const extname = path.extname(filePath).toLowerCase();
      const fileName = path.basename(filePath);
      const fileNameWithoutExtension = path.parse(fileName).name

      if (extname === '.md') {
        const content = await readFromFile(filePath);
        result[fileNameWithoutExtension] = content;
      }
    }
  }

  return result;
}

const getFilesContent = async (dirPath: string) => {
  const files = await fs.readdir(dirPath);
  const result: FilesContent = {};

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const fileName = path.basename(filePath);
    const fileNameWithoutExtension = path.parse(fileName).name
    const content = await readFromFile(filePath);
    result[fileNameWithoutExtension] = content;
  }
  return result;
}

export async function readFromFile(pathToFile: string) {
  try {
    const data = await fs.readFile(pathToFile, 'utf8');
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error reading from file ${pathToFile}:`, err.message);
      throw err;
    }
  }
}

export async function getExamples() {
  const components = (
    await processFiles('./app/components/', getFilesContent)
  ) as unknown as Examples;

  return components;
}
