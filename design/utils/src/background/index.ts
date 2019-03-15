import { renderToStaticMarkup } from 'react-dom/server';
import { ReactElement } from 'react';
import miniSvgDataUri from 'mini-svg-data-uri';

type InlineSVGProps = ReactElement<string>;

const inlineSVG = (svg: InlineSVGProps) =>
  `url("${miniSvgDataUri(renderToStaticMarkup(svg))}")`;

export { inlineSVG, InlineSVGProps };
