const fs = require('fs');
const path = require('path');

const workDir = path.join(__dirname, '../../../../');

const sourceDir = path.join(workDir, 'packages', 'icons', 'src', 'icons');
const outputDir = path.join(workDir, 'next-docs', 'pages');

const inputFile = path.join(workDir, 'next-docs', 'pages', 'icons.tsx');
const outputFile = path.join(outputDir, 'icons.tsx');

const replacements = [
  {
    pattern: new RegExp('import {[^}]+} from \'@heathmont/moon-icons\';', 's'),
    replace(data) {
      return data.replace(this.pattern, fileImport);
    },
  },
  {
    pattern: new RegExp(
      '<section className="mt-8">[\\n\\c\\r\\t\\s]+?<SubHeader>.+</section>',
      's'
    ),
    replace(data) {
      return data.replace(this.pattern, section);
    },
  },
];

const prefixes = [
  'Arrows',
  'Chart',
  'Chat',
  'Controls',
  'Devices',
  'Files',
  'Generic',
  'Mail',
  'Maps',
  'Media',
  'Notifications',
  'Other',
  'Security',
  'Shop',
  'Software',
  'Sport',
  'Text',
  'Time',
  'Travel',
  'Type',
];

let iconSet = [];
let fileSet = [];
let pattern = new RegExp(`^(${prefixes.join('|')})[^\\.]+`, 'g');

let dataSet = fs
  .readdirSync(sourceDir)
  .reduce((result, item) => {
    let match = Array.from(item.matchAll(pattern));
    let fileName = match[0] && match[0][0];
    let blockName = match[0] && match[0][1];
    let blockIndex = prefixes.indexOf(blockName);
    let icon = `\t\t\t<Icon {...wrapperProps} name="${fileName}">\n\t\t\t\t<${fileName} {...props} />\n\t\t\t</Icon>`;

    fileSet.push(fileName);

    if (result[blockIndex] === undefined) {
      result[blockIndex] = [icon];
    } else {
      result[blockIndex].push(icon);
    }

    return result;
  }, iconSet)
  .map((item, key) => {
    return `\t<SubHeader>${prefixes[key]}</SubHeader>\n\t\t<Block>\n${item.join(
      '\n'
    )}\n\t\t</Block>\n`;
  })
  .join('\n\t');

let section = `\t<section className="mt-8">\n\t${dataSet}\n\t</section>\n`;
let fileImport = `import {\n\t${fileSet.join(
  ',\n\t'
)}\n} from '@heathmont/moon-icons';\n`;

let data = fs.readFileSync(inputFile, 'utf-8');

replacements.forEach((repl) => {
  data = repl.replace(data);
});

let fileStream = fs.createWriteStream(outputFile, { flags: 'w' });
fileStream.setDefaultEncoding('utf-8');

try {
  fileStream.write(data);
} catch (error) {
  console.error(error);
} finally {
  fileStream.close();
}
