const { ArgumentParser } = require('argparse');
const Figma = require('figma-js');

const { version } = require('../../package.json');
const { downloadSvgs } = require('./downloadSvgs');
const { getSvgs } = require('./getSvgs');

const SAVE_DIRECTORY = './raw/imported';

const parser = new ArgumentParser({
  description: 'Figma icons importer',
});

parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('-t', '--token', { help: 'YOUR_FIGMA_API_TOKEN' });
parser.add_argument('-f', '--fileId', { help: 'YOUR_FIGMA_FILE_ID' });
parser.add_argument('-p', '--page', { help: 'YOUR_FIGMA_PAGE' });
parser.add_argument('-pid', '--page-id', { help: 'YOUR_FIGMA_PAGE_ID' });
parser.add_argument('-d', '--dir', {
  help: 'SAVE_DIRECTORY',
  default: SAVE_DIRECTORY,
});
parser.add_argument('-c', '--clean', {
  help: 'Doing "rm -rf * " for SAVE_DIRECTORY',
  default: true,
});

const { token, fileId, page, page_id: pageId, dir, clean } = parser.parse_args();

const figmaApiExporter = (token) => {
  console.log('Connecting to Figma.');
  const client = Figma.Client({
    personalAccessToken: token,
  });
  console.log('Success.');

  return {
    getSvgs: getSvgs(client),
    downloadSvgs,
  };
};

const exporter = figmaApiExporter(token);

exporter
  .getSvgs({
    fileId,
    page,
    pageId
  })
  .then((svgsData) =>
    exporter.downloadSvgs({
      svgsData,
      saveDirectory: dir || SAVE_DIRECTORY,
      isClearDirectory: true, // doing rm -rf for SAVE_DIRECTORY
      isIconsNameDisplayed: true, // display all icons name to console
    })
  );

exports.exporter = {};
