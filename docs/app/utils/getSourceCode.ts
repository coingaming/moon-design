import fs from 'fs';
import path from 'path';

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

export async function getSourceCode(_path: string) {
  const dirPath = path.resolve(
    _path
  );

  const res = await readFromFile(dirPath)

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.toString();
}