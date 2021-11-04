import fs from 'fs';
import path from 'path';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  result: Object;
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

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const dirRelativeToPublicFolder = 'examples/avatar';
  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  /*
    filenames:
    'Colours.tsx',
    'Fallbacks.tsx',
    ...
  */
  const filenames = fs.readdirSync(dir);

  const trimmedFilenames = filenames.map(
    (filenames) => filenames.split('.tsx')[0]
  );
  const fileSources = filenames.map((fileName) => {
    const pathToSourceCode = path.join('/', dir, fileName);
    return readFromFile(pathToSourceCode);
  });

  const settledFileSources = await Promise.all(fileSources);

  const result = settledFileSources.reduce((acc: Object, source, index) => {
    return { [trimmedFilenames[index]]: source, ...acc };
  }, {});

  res.status(200).json({ result });
};
