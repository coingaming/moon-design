import { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

type InlineSVGProps = ReactElement<string>;

const inlineSvg = (svg: InlineSVGProps) => {
  const rendered = renderToStaticMarkup(svg);
  const encodedSVG = encodeURIComponent(rendered);
  return `url('data:image/svg+xml;utf8, ${encodedSVG}')`;
};

export type { InlineSVGProps };

export default inlineSvg;
