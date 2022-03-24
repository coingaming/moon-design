/* 
  Get data: in which repositories imported the current package in the organization:
  
  1. Get all the repos from the file outputRepos.json
  2. Read the list of already checked repos from checkedReposList.txt (It should be empty in the first iteration): []
  3. Read the result data of already checked repos: [{}] For not to lost previous results 
  4. Search repositories with searchInRepos() help
  5. Process response and filtered only needed rows: processItemsRespons()
  6. Write data in to [packageName]checkedRepos.json
  7. Sorted result repositories with sortedByRepos() help

  !!!!!Warniing:
  - Script execution can take some time because of GitHub API unstable and rate limit (have to set 20s delay becouse of api secondary rate limit);
  - If you catch error: "Secondary rate limit", just restart script after 10-20s;
  - When the result for some repositories is too big, the fetching of data could be separated into several pages. 
  - If you are noticed that the total count for the same repository is different (for example began smaller), 
    need to restart the script from the scratch, as the result data could be incomplete.  
    
  */

const path = require('path');
const fs = require('fs');

const delay = require('./helper/delay');
const camelize = require('./helper/camelize');
const searchInRepos = require('./searchInRepos');
const sortedByRepos = require('./sortedByRepos');

const PackagesList = [
  'moon-accordion',
  'moon-calendar',
  'moon-charts',
  'moon-components',
  'moon-core',
  'moon-datepicker',
  'moon-draggabletable',
  'moon-fonts',
  'moon-global',
  'moon-icons',
  'moon-notifications',
  'moon-pagination',
  'moon-popover',
  'moon-select',
  'moon-sidebar',
  'moon-table',
  'moon-themes',
  'moon-utils',
];

function processItemsRespons(result) {
  return result?.map((res) => ({
    name: res?.name,
    path: res?.path,
    url: res?.url,
    repository:
      typeof res?.repository == 'object'
        ? res?.repository['full_name']
        : res?.repository,
  }));
}

async function main() {
  const packageName = process.argv[2] || 'moon-core';
  const packageFile = camelize(packageName);
  const fullPath = path.resolve(process.cwd(), `next-docs/public/metrics`);

  // Get all repos in organization from outputRepos.json []
  const allRepos = fs.readFileSync(fullPath + '/data/outputRepos.json', {
    encoding: 'utf8',
    flag: 'a+',
  });
  const reposData = allRepos ? JSON.parse(allRepos) : [];

  // Get the list of already checked repos: []
  const checkedReposList = fs.readFileSync(
    fullPath + `/data/${packageFile}CheckedReposList.txt`,
    { encoding: 'utf8', flag: 'a+' }
  );
  // Get the result data of already checked repos: [{}]
  const checkedReposData = fs.readFileSync(
    fullPath + `/data/${packageFile}CheckedRepos.json`,
    { encoding: 'utf8', flag: 'a+' }
  );
  const checkedRepos = checkedReposData ? JSON.parse(checkedReposData) : [];
  if (reposData) {
    const items = checkedRepos.length ? [...checkedRepos] : [];
    const checkedData = checkedReposList ? checkedReposList.split(', ') : [];
    try {
      for (const repo of reposData) {
        if (!checkedData.find((i) => i === repo.fullName)) {
          console.log('sleeping 10s...');
          await delay(10000);
          console.log(repo.fullName);
          const item = await searchInRepos(packageName, 1, repo.fullName);
          items.push(...item);
          fs.writeFileSync(
            fullPath + `/data/${packageFile}CheckedReposList.txt`,
            `${repo.fullName}, `,
            {
              flag: 'a+',
            }
          );
        }
      }
      const flattenedSearches = processItemsRespons(items);
      let data = JSON.stringify(flattenedSearches, null, 2);
      fs.writeFileSync(
        fullPath + `/data/${packageFile}CheckedRepos.json`,
        data
      );
      sortedByRepos(packageName);
      console.log('Search Complete!');
    } catch (e) {
      console.log('Search Failed :-(');
      console.error(e.message);
      const flattenedSearches = processItemsRespons(items);
      let data = JSON.stringify(flattenedSearches, null, 2);
      fs.writeFileSync(
        fullPath + `/data/${packageFile}CheckedRepos.json`,
        data
      );
    }
  }
}

main();
module.exports = main;
