import express from 'express';
import * as React from 'react';
import * as dotenv from 'dotenv-safe';
import { renderToString } from 'react-dom/server';

import createEmotionServer from 'create-emotion-server';
import createCache from '@emotion/cache';
import { CacheProvider, Global } from '@emotion/core';

import { styles } from '@heathmont/sportsbet-global';

import { template } from './template';

import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from '../app/app';

dotenv.config({ allowEmptyValues: true });

const PORT = process.env.SERVICE_PORT;

/**
 * Emotion SSR
 *
 * Due to quirks with Emotion 10's SSR and 'dangerous' selectors, we've opted
 * for a custom SSR configuration.
 * More info on the issue: https://github.com/emotion-js/emotion/issues/1178
 */
const cache = createCache();
const { extractCritical, renderStylesToString } = createEmotionServer(cache);

/* Allows us to render `sportsbet-global` styles inline before others */
const globalStyles = renderStylesToString(
  renderToString(<Global styles={styles} />)
);

/**
 * App
 */
const app = express();

process.on('unhandledRejection', ({ message, stack }) => {
  console.log('uncaughtException', { message, stack });
  setTimeout(() => {
    throw { message, stack };
  }, 1000);
});

/* JS Bundles*/
app.use(express.static('dist'));
/* Assets, fonts, images etc */
app.use('/assets', express.static('../../design/assets'));

app.get('/*', (req, res) => {
  const { html, css, ids } = extractCritical(
    renderToString(
      <StaticRouter location={req.url} context={{}}>
        <CacheProvider value={cache}>
          <AppRoutes />
        </CacheProvider>
      </StaticRouter>
    )
  );

  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(template({ html, css, ids, globalStyles }));
});

app.listen(PORT);
