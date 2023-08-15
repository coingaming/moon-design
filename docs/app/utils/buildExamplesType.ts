import { promises as fs } from 'fs';
import path from 'path';

export async function writeToFile({
  contentToWrite,
  path,
}: {
  contentToWrite: string,
  path: string
}) {
  if (!contentToWrite) {
    throw new Error('Content for writeToFile function must be provided.');
  }
  if (!path) {
    throw new Error('Path for writeToFile function must be provided.');
  }

  try {
    await fs.writeFile(path, contentToWrite, 'utf8');
    console.log(`${path} file has been written successfully.`);
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error writing to file:', err.message);
      throw err;
    }
  }
}

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

export async function processFiles(
  dirPath: string,
  processCallback: (filePath: string) => Promise<Record<string, string | undefined>>
) {
  const files = await fs.readdir(dirPath);
  const result: Record<string, Record<string, unknown> | string[]> = {};

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
  }

  return result;
}

export const getTemplate = (content: string) => {
  return `export interface Examples ${content};
`
}

const getFilesTypes = async (dirPath: string) => {
  const files = await fs.readdir(dirPath);
  // TODO type
  const result: Record<string, string | undefined> = {};

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const fileName = path.basename(filePath);
    const fileNameWithoutExtension = path.parse(fileName).name
    result[fileNameWithoutExtension] = 'string';
  }
  return result;
}


export const buildExamplesType = async () => {
  const components = (
    await processFiles('./app/components/', getFilesTypes)
  );

  await writeToFile({
    contentToWrite: getTemplate(JSON.stringify(components, null, 2)),
    path: './app/components/types.ts'
  });

  return components;
}

buildExamplesType();
