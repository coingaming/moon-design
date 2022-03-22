/* 
    Find which and how many components from the current package are used in the organization 
    
    1. Read data from resultData.json: Sorted by repositories, data about which files this package (packageName) is imported in
    2. Read file with all exist in DS components list and filtered it by packageName
    3. Go through all the repositories and fetch files which code have import of components from current package DS
    4. Parse the files and create a report on how many times every component was used
    5. Save all the data in resultByComponents.txt
    
  */

const { Octokit } = require('@octokit/core');
const path = require('path');
const fs = require('fs');
const delay = require('./helper/delay');
const camelize = require('./helper/camelize');
const tokens = require('./_token');

// get components if inport in several rows
function getContent(code, packageName) {
  const resArr = [];
  const codeArr = code.split('\n').reverse();
  const componentsRowIndex = codeArr.findIndex((row) =>
    row.includes(packageName)
  );
  const importRowIndex = codeArr.findIndex(
    (row, i) => i >= componentsRowIndex && row.includes('import')
  );
  codeArr.map((row, i) => {
    if (i >= componentsRowIndex && i <= importRowIndex) {
      resArr.push(row);
    }
  });
  return resArr;
}

async function search_in_file() {
  const octokit = new Octokit({
    auth: tokens.tokens.GITHUB_CLIENT_TOKEN,
    headers: {
      Accsept: 'application/vnd.github.v3.text-match+json',
    },
  });

  const packageName = process.argv[2] || 'moon-core';
  const packageFile = camelize(packageName);

  const fullPath = path.resolve(process.cwd(), 'next-docs/public/metrics');
  // Read resulData file
  const resultData = fs.readFileSync(
    fullPath + `/data/${packageFile}ResultData.json`,
    { encoding: 'utf8', flag: 'a+' }
  );
  const parseData = JSON.parse(resultData);
  const repositories = Object.keys(parseData);

  // Read file with exist components list
  const allComponentsFile = fs.readFileSync(fullPath + '/components.json', {
    encoding: 'utf8',
    flag: 'a+',
  });
  const allComponents = JSON.parse(allComponentsFile)[packageName];

  const now = new Date();
  fs.writeFileSync(
    fullPath + `/result/${packageFile}.txt`,
    `************************************* \n
    ${now.toDateString()}  \n  \n`,
    {
      flag: 'a+',
    }
  );

  if (!repositories.length) {
    console.log('Nothing found :-(');
    fs.writeFileSync(
      fullPath + `/result/${packageFile}.txt`,
      `Nothing found :-( \n  \n`,
      {
        flag: 'a+',
      }
    );
  }
  const totalResult = [];
  for (const repo of repositories) {
    const data = resultData ? parseData[repo] : [];
    await delay(1000);
    console.log(repo);
    const componentsCounter = [];
    for (const fileData of data) {
      await delay(1000);
      const response = await octokit.request(`GET ${fileData.url}`);
      const encoded = Buffer.from(response.data.content, 'base64').toString(
        'utf-8'
      );

      const filteredContent = encoded
        .split('\n')
        .filter((row) => row.includes(packageName));

      const content = filteredContent.includes('import')
        ? filteredContent
        : getContent(encoded, packageName);

      const components = [];
      content.map((c) => {
        const component = c
          .split(' ')
          .map((c) => c.replace(',', ''))
          .filter((i) => i && allComponents.includes(i));
        components.push(...component);
      });

      components.map((c) => {
        componentsCounter.push(c);
      });

      console.log('components', componentsCounter);
    }

    const result = componentsCounter.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});

    totalResult.push(...componentsCounter);
    fs.writeFileSync(
      fullPath + `/result/${packageFile}.txt`,
      `${repo}:  ${JSON.stringify(result, null, 2)} \n`,
      {
        flag: 'a+',
      }
    );
    if (!result) {
      fs.writeFileSync(
        fullPath + `/result/${packageFile}.txt`,
        `Nothing found :-( \n  \n`,
        {
          flag: 'a+',
        }
      );
      console.log('Nothing found :-(');
    }
  }
  const totalCount = totalResult.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  fs.writeFileSync(
    fullPath + `/result/${packageFile}.txt`,
    `------------------------------------  \n
Total result: ${JSON.stringify(totalCount, null, 2)} \n  \n`,
    {
      flag: 'a+',
    }
  );
}

search_in_file();
module.exports = search_in_file;
