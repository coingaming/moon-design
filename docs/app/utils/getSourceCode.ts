import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';

async function readFromFile(pathToFile: string) {
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

const fileSchema = z.object({
  name: z.string(),
  type: z.enum(['folder', 'file'])
});

/*
  You can define a recursive schema in Zod,
  but because of a limitation of TypeScript,
  their type can't be statically inferred.

  Instead you'll need to define the type definition manually,
  and provide it to Zod as a "type hint".

  https://github.com/colinhacks/zod#recursive-types
*/
type Children = z.infer<typeof fileSchema> & {
  children: Children[];
};

const fileTreeSchema: z.ZodType<Children> = fileSchema.extend({
  children: z.lazy(() => fileTreeSchema.array()),
});

async function getFileTree(dirPath: string) {
  const files = await fs.readdir(dirPath);

  const tree: Children = {
    name: path.basename(dirPath),
    type: 'folder',
    children: [],
  };

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = await fs.stat(filePath);

    if (stats.isFile()) {
      tree.children.push({
        name: file,
        type: 'file',
        children: [],
      });
    } else if (stats.isDirectory()) {
      const subtree = await getFileTree(filePath);
      tree.children.push(subtree);
    }
  }

  return tree;
}

export async function getSourceCode(_path: string) {
  const dirPath = path.resolve(_path);
  const res = await readFromFile(dirPath)
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.toString();
}

export async function getTree(_path: string) {
  try {
    const dirPath = path.resolve(_path);
    const tree = await getFileTree(dirPath);
    return tree;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error reading from file ${_path}:`, err.message);
      throw err;
    }
  }
}

export async function getExamples() {
  const tree = await getTree('./app/components');
  // TODO
  return fileTreeSchema.parse(tree);
}