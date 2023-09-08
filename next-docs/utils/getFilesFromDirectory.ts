import fs from 'fs';
import path from 'path';

const readFromFile = (pathToFile: string) =>
  new Promise((resolve, reject) => {
    fs.readFile(pathToFile, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

const getFilesFromDirectory = async (dirPath: string) => {
  if (dirPath.includes('..')) {
    throw new Error('Invalid path');
  }
  const safeDirPath = path.normalize(path.resolve(dirPath));
  const filenames = fs.readdirSync(safeDirPath);
  const trimmedFilenames = filenames.map(
    (filenames) => filenames.split('.tsx')[0]
  );
  const filePaths = filenames.map((fileName) => {
    return path.join('/', safeDirPath, fileName);
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

export default getFilesFromDirectory;
