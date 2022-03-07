import { Octokit } from '@octokit/core';
import { paginateRest } from '@octokit/plugin-paginate-rest';
import { throttling } from '@octokit/plugin-throttling';
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods';

export default async () => {
  const query =
    'moon-core org:coingaming language:TypeScript language:JavaScript language:TSX in:file';
  const q = 'import language:JavaScript org:jquery in:file';

  // const octokit = new Octokit({
  //   auth: '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',
  // });

  // const response = await octokit.request('GET /search/code', {
  //   q: query,
  //   per_page: 100,
  //   page: 1,
  // });

  // octokit.hook.after('request', async (response, options) => {
  //   console.log(`${options.method} ${options.url}: ${response.status}`);
  // });

  // const totalCount = response.data.total_count;

  // const rateLimit = await octokit.request('GET /rate_limit');

  // console.log('rateLimit', rateLimit);
  // console.log('response', response);

  const MyOctokit = Octokit.plugin(
    throttling,
    paginateRest,
    restEndpointMethods
  );
  const octokitPagination = new MyOctokit({
    auth: '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',
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
    throttle: {
      onRateLimit: (retryAfter, options, octokit) => {
        octokit.log.warn(
          `Request quota exhausted for request ${options.method} ${options.url}`
        );

        if (options.request.retryCount === 0) {
          // only retries once
          octokit.log.info(`Retrying after ${retryAfter} seconds!`);
          return true;
        }
      },
      onSecondaryRateLimit: (retryAfter, options, octokit) => {
        // does not retry, only logs a warning
        octokit.log.warn(
          `Abuse detected for request ${options.method} ${options.url}`
        );
      },
    },
  });

  const totalRespons = await octokitPagination.paginate(
    'GET /search/code',
    {
      q: query,
      per_page: 100,
    },
    (response, done) => {
      console.log('response', response);
      return response.data;
    }
  );

  console.log('totalRespons', totalRespons);
};
