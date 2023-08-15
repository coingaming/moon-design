import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import { processFiles } from './buildExamplesType';
import { Examples } from '../components/components';

/*
  You can define a recursive schema in Zod,
  but because of a limitation of TypeScript,
  their type can't be statically inferred.

  Instead you'll need to define the type definition manually,
  and provide it to Zod as a "type hint".

  https://github.com/colinhacks/zod#recursive-types
*/
// type Children = z.infer<typeof fileSchema> & {
//   children: Children[];
// };

// const fileTreeSchema: z.ZodType<Children> = fileSchema.extend({
//   children: z.lazy(() => fileTreeSchema.array()),
// });

const getFilesContent = async (dirPath: string) => {
  const files = await fs.readdir(dirPath);
  const result: Record<string, string | undefined> = {};

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
  // TODO zod
  const components = (
    await processFiles('./app/components/', getFilesContent)
  ) as unknown as Examples;

  return components;
}
