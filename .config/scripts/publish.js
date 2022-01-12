const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

// eslint-disable-next-line import/no-extraneous-dependencies
const program = require('commander');

const MODES = {
  prepublish: 'prepublish',
  postpublish: 'postpublish',
};

program
  .option('--input <input>', 'folder to copy from')
  .option('--output <output>', 'folder to copy too')
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
  !fs.existsSync(program.output) ||
  !fs.lstatSync(program.output).isDirectory()
) {
  console.error('Invalid output folder, does not exist or is not a directory');
  process.exit(1);
}
if (![MODES.prepublish, MODES.postpublish].includes(program.mode)) {
  console.error(
    `Invalid mode, valid options are ${MODES.prepublish} and ${MODES.postpublish}`
  );
  process.exit(1);
}

if (program.mode === MODES.prepublish) {
  console.log(
    `Copying all files from ${program.input} to ${
      program.output
    }, working directory ${process.cwd()}`
  );
  const cp = childProcess.execSync(
    `cp -nRv ${program.input}* ${program.output}`,
    {
      cwd: process.cwd(),
    }
  );
} else if (program.mode === MODES.postpublish) {
  console.log(
    `Removing all files present at ${program.input} from ${
      program.output
    }, working directory ${process.cwd()}`
  );
  const files = fs.readdirSync(program.input);
  files.forEach((file) => {
    const fileToRemove = path.resolve(program.output, file);
    const cp = childProcess.execSync(`rm -rf ${fileToRemove}`, {
      cwd: process.cwd(),
    });
  });
}
