import fs from 'fs';
import path from 'path';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  examples: Object;
};

function readFromFile(pathToFile: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

const getFilesFromDirectory = async (dirPath: string) => {
  /*
    filenames:
    'Colours.tsx',
    'Fallbacks.tsx',
    ...
  */
  const filenames = fs.readdirSync(dirPath);

  const trimmedFilenames = filenames.map(
    (filenames) => filenames.split('.tsx')[0]
  );

  const filePaths = filenames.map((fileName) => {
    return path.join('/', dirPath, fileName);
  });

  const onlyFilePaths = filePaths.filter((fileName) => {
    return fs.lstatSync(fileName).isFile();
  });

  const fileSources = onlyFilePaths.map((pathToSourceCode) => {
    return readFromFile(pathToSourceCode);
  });

  const settledFileSources = await Promise.all(fileSources);

  return settledFileSources.reduce((acc: Object, source, index) => {
    return { [trimmedFilenames[index]]: source, ...acc };
  }, {});
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { component } = req.query;
  const dirRelativeToPublicFolder = 'examples';

  const dirPath = path.resolve(
    './public',
    dirRelativeToPublicFolder,
    component as string
  );

  const examples = await getFilesFromDirectory(dirPath);
  res.status(200).json({ examples });
};
