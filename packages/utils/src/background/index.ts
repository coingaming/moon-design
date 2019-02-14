import { renderToStaticMarkup } from 'react-dom/server';
import { ReactElement } from 'react';

const inlineSVG = (svg: ReactElement<string>) =>
  `url('data:image/svg+xml,${encodeURIComponent(renderToStaticMarkup(svg))}')`;

export { inlineSVG };
