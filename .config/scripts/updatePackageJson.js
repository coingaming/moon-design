const fs = require('fs');
const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const program = require('commander');

const MODES = {
  prepublish: 'prepublish',
  postpublish: 'postpublish',
};

const FIELDS = {
  [MODES.prepublish]: {
    main: 'index.js',
    module: 'es/index.js',
    typings: 'index.d.ts',
  },
  [MODES.postpublish]: {
    main: 'lib/index.js',
    module: 'lib/es/index.js',
    typings: 'lib/index.d.ts',
  },
};

program
  .option('--input <input>', 'path to lib folder')
  .option('--package <input>', 'path to package.json to change')
  .option('--mode <mode>', `${MODES.prepublish}|${MODES.postpublish}`)
  .parse(process.argv);

if (
  !fs.existsSync(program.input) ||
  !fs.lstatSync(program.input).isDirectory()
) {
  console.error('Invalid input folder, does not exist or is not a directory');
  process.exit(1);
}
if (
  !fs.existsSync(program.package) ||
  !fs.lstatSync(program.package).isFile()
) {
  console.error('Invalid input, does not exist or is not a file');
  process.exit(1);
}
if (![MODES.prepublish, MODES.postpublish].includes(program.mode)) {
  console.error(
    `Invalid mode, valid options are ${MODES.prepublish} and ${MODES.postpublish}`
  );
  process.exit(1);
}

const fullPath = path.resolve(process.cwd(), program.package);
// eslint-disable-next-line import/no-dynamic-require
const pkg = require(fullPath);

if (program.mode === MODES.prepublish) {
  console.log(`Changing package.json for ${fullPath}`);
  const updated = {
    ...pkg,
    ...FIELDS[MODES.prepublish],
    ...{
      files: fs.readdirSync(program.input),
    },
  };
  fs.writeFileSync(fullPath, JSON.stringify(updated, null, 2));
} else if (program.mode === MODES.postpublish) {
  console.log(`Undoing changes to package.json for ${fullPath}`);
  const updated = {
    ...pkg,
    ...FIELDS[MODES.postpublish],
    ...{
      files: ['lib'],
    },
  };
  fs.writeFileSync(fullPath, JSON.stringify(updated, null, 2));
}
