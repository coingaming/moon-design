/* Disable rules due to SVGR's setup */
/* eslint-disable no-shadow, @typescript-eslint/no-unused-vars */
const prefix = componentName => componentName.name.replace('Svg', '');

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import * as React from 'react';
    import styled from '@emotion/styled';

    const Svg = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    type SvgProps = {
      height?: string | number;
      width?: string | number;
      fontSize?: string | number;
      verticalAlign?: string,
    };

    export const ${prefix(componentName)} =
      styled(Svg)<SvgProps >
      (({ height, width, fontSize, verticalAlign }) => ({
        height,
        width,
        fontSize,
        verticalAlign
      }));

    ${prefix(componentName)}.defaultProps = {
      verticalAlign: 'middle'
    }
  `;
}
module.exports = template;
