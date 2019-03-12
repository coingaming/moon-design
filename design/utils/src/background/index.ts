import { renderToStaticMarkup } from 'react-dom/server';
import { ReactElement } from 'react';
import miniSvgDataUri from 'mini-svg-data-uri';

const inlineSVG = (svg: ReactElement<string>) =>
  `url("${miniSvgDataUri(renderToStaticMarkup(svg))}")`;

export { inlineSVG };
