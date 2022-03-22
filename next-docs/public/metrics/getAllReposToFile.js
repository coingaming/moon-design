/* 
    Get all repositories in organization:
    
    1. Fetch all repositories JS and TS repositories in organization: search_repos()
    2. Process response and filtered only needed rows: processReposRespons()
    3. Parse data to JSON and  write data about repositories in to the file outputRepos.json

  */

const { Octokit } = require('@octokit/core');
const parse = require('parse-link-header');
const delay = require('./helper/delay');
const path = require('path');
const fs = require('fs');
const tokens = require('./_token');

async function search_repos(org = '', page = 1) {
  console.log();
  const items = [];
  const query = `org:${org} language:TypeScript language:JavaScript language:TSX sort:updated`;
  console.log(org);
  const octokit = new Octokit({
    auth: tokens.tokens.GITHUB_CLIENT_TOKEN,
    headers: {
      Accsept: 'application/vnd.github.v3+json',
    },
  });

  const response = await octokit.request('GET /search/repositories', {
    q: query,
    per_page: 100,
    page: page,
  });

  items.push(...response.data.items);
  const pagination = parse(response.headers.link);

  if (pagination?.next?.page) {
    console.log('sleeping 1s...');
    await delay(1000);
    const result = await search_repos(org, parseInt(pagination.next.page));
    items.push(...result);
  }

  return items;
}

function processReposRespons(result) {
  return result?.map((res) => ({
    name: res?.name,
    fullName: res?.full_name,
    private: res?.private,
    url: res?.html_url,
    createdAt: res?.created_at,
    updatedAt: res?.updated_at,
    language: res?.language,
  }));
}

async function getAllReposToFile() {
  console.log('Starting Repos Search...');
  try {
    const findings = await search_repos('coingaming');
    const repos = processReposRespons(findings);
    const fullPath = path.resolve(process.cwd(), 'next-docs/public/metrics');
    let data = JSON.stringify(repos, null, 2);
    fs.writeFileSync(fullPath + '/data/outputRepos.json', data);
    console.log('Search Repos Complete!');
  } catch (e) {
    console.log('Search Repos Failed :-(');
    console.error(e.message);
    return Promise.resolve(null);
  }
}

getAllReposToFile();
module.exports = getAllReposToFile;
