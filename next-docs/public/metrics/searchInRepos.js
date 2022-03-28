/* 
   Search current packageName in current repo (or in all repos, if repo = '') in coingaming orgonization and return results
    
  */

const { Octokit } = require('@octokit/core');
const parse = require('parse-link-header');
const delay = require('./helper/delay');
const tokens = require('./_token');

async function search_in_repos(packageName, page = 1, repo = '') {
  const items = [];
  const totalCounts = [];
  const repository = repo ? `repo:${repo}` : '';
  const query = `${packageName} org:coingaming language:TypeScript language:JavaScript language:TSX -repo:coingaming/moon-design in:file ${repository}`;

  const octokit = new Octokit({
    auth: tokens.tokens.GITHUB_CLIENT_TOKEN,
    headers: {
      Accsept: 'application/vnd.github.v3.text-match+json',
    },
  });

  const response = await octokit.request('GET /search/code', {
    q: query,
    per_page: 100,
    page: page,
  });

  const totalCount = response.data.total_count;
  console.log('totalCount:', totalCount);
  console.log('page:', page);

  items.push(...response.data.items);
  totalCounts.push(response.data.total_count);

  const pagination = parse(response.headers.link);

  if (pagination?.next?.page) {
    console.log('sleeping 20s...');
    await delay();
    const result = await search_in_repos(
      packageName,
      parseInt(pagination.next.page),
      repo
    );
    items.push(...result);
  }

  return items;
}
module.exports = search_in_repos;
