/* 
  Sorted result data:
  1. Read data from checkedRepos.json: [{}]
  2. Sorted it by repositories 
  3. Write data to resultData.json: ["repositoryName": {}]
    
  */

const path = require('path');
const fs = require('fs');
const camelize = require('./helper/camelize');

function sortedByRepos(packageName) {
  const fullPath = path.resolve(process.cwd(), 'next-docs/public/metrics');
  const packageFile = camelize(packageName);
  const items = fs.readFileSync(
    fullPath + `/data/${packageFile}CheckedRepos.json`,
    { encoding: 'utf8', flag: 'a+' }
  );
  const resultData = JSON.parse(items).reduce((acc, elem) => {
    const repo = elem.repository;
    if (!acc[repo]) {
      acc[repo] = [];
    }

    acc[repo].push(elem);
    return acc;
  }, {});
  let data = JSON.stringify(resultData, null, 2);
  console.log(`Data in ${packageFile}ResultData.json file`);
  fs.writeFileSync(fullPath + `/data/${packageFile}ResultData.json`, data);
}

module.exports = sortedByRepos;
