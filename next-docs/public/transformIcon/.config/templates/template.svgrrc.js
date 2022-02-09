const prefix = (componentName) => componentName.replace('Svg', '');

const defaultProps = (prefixCompName) =>
  `${prefixCompName}.defaultProps = {
    color: "bulma.100",
  }`;

const template = (
  { imports, interfaces, componentName, props, jsx, exports },
  { tpl }
) => {
  return tpl`
    import React from 'react';
    import styled from 'styled-components';
    import { ColorProps } from '@heathmont/moon-themes';
    import { themed } from '@heathmont/moon-utils';

    const Svg = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    type SvgProps = {
      color?: ColorProps;
      height?: string | number;
      width?: string | number;
      fontSize?: string | number;
    };

    const ${prefix(componentName)} =
      styled(Svg)<SvgProps >
      (({ color, height, width, fontSize, theme }) => ({
        ...(color && { color: themed('color', color)(theme) }),
        height,
        width,
        fontSize,
      }));

    ${defaultProps(prefix(componentName))}

    export default ${prefix(componentName)};
  `;
};
module.exports = template;
