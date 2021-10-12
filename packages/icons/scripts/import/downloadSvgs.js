const fs = require('fs');
const path = require('path');
const axios = require('axios');
const rimraf = require('rimraf');

const removeFilesFromDirectory = async (directory) => {
  console.log('Cleaning up working directory: ', directory);
  return new Promise((resolve) => rimraf(directory, resolve));
};

const createDir = (directory) => {
  return new Promise((resolve) => {
    if (!fs.existsSync(directory)) {
      fs.mkdir(directory, null, resolve);
      console.log(`Directory "${directory}" was created`);
    } else {
      console.log(`Directory "${directory}" exist. Skipped.`);
      resolve();
    }
  });
};

const downloadSvgsData = (svgsData) =>
  Promise.all(
    svgsData.map(async (data) => {
      const downloadedSvg = await axios.get(data.url);
      return {
        data: downloadedSvg.data,
        name: data.name,
      };
    })
  );

const saveSvgsToFiles = async (
  downloadedSvgsData,
  saveDirectory,
  isIconsNameDisplayed
) => {
  await Promise.all(
    downloadedSvgsData.map(
      (svgData) =>
        new Promise((resolve) => {
          if (isIconsNameDisplayed) {
            console.log(`Saving: ${svgData.name}.svg`);
          }

          return fs.writeFile(
            path.join(saveDirectory, `${svgData.name}.svg`),
            svgData.data,
            resolve
          );
        })
    )
  );
};

const downloadSvgs = async ({
  svgsData,
  saveDirectory,
  isClearDirectory,
  isIconsNameDisplayed,
}) => {
  if (isClearDirectory) {
    await removeFilesFromDirectory(saveDirectory);
  }

  await createDir(saveDirectory);

  const downloadedSvgsData = await downloadSvgsData(svgsData);

  await saveSvgsToFiles(
    downloadedSvgsData,
    saveDirectory,
    isIconsNameDisplayed
  ).then(() => {
    console.log(downloadedSvgsData.length, 'icons were downloaded. Success.');
  });
};

exports.downloadSvgs = downloadSvgs;
