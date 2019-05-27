import { renderToStaticMarkup } from 'react-dom/server';
import { ReactElement } from 'react';
import miniSvgDataUri from 'mini-svg-data-uri';

type InlineSVGProps = ReactElement<string>;

const inlineSVG = (svg: InlineSVGProps) => {
  const rendered = renderToStaticMarkup(svg);
  /*
    The issue is that we get smth like this for first render:
      <style data-emotion-css=".."">..</style>
      <svg ...> .. </svg>

    Only SVG part works properly as a background-image.
    So we remove that <style> stuff
  */
  const renderedSVG = rendered.split('</style>').pop();
  return `url("${miniSvgDataUri(renderedSVG)}")`;
};

export { inlineSVG, InlineSVGProps };
