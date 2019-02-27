import express from 'express';
import path from 'path';

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './app/App';

const app = express();

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/*', (req, res) => {
  const jsx = <App />;
  const reactDom = renderToString(jsx);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom));
});

app.listen(7024);

function htmlTemplate(reactDom: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Cashier Demo</title>
    </head>

    <body>
      <div id="app">${reactDom}</div>
      <script src="./main.bundle.js"></script>
    </body>
    </html>
  `;
}
