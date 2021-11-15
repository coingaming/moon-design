/* Disable rules due to SVGR's setup */
/* eslint-disable no-shadow, @typescript-eslint/no-unused-vars */
const prefix = (componentName) => componentName.name.replace('Svg', '');

const customDefaultProps = {
  IconInstagram: 'color: "bulma.100",',
};

const defaultProps = (prefixCompName) =>
  customDefaultProps[prefixCompName] &&
  `${prefixCompName}.defaultProps = {
    ${customDefaultProps[prefixCompName]}
  }`;

function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });
  return typeScriptTpl.ast`
    import React from 'react';
    import styled from 'styled-components';
    import { ColorProps } from '@heathmont/moon-themes';
    import { themed } from '@heathmont/moon-utils';

    const Svg = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    type IconProps =  {
      backgroundColor?: ColorProps;
      circleColor?: ColorProps;
      color?: ColorProps;
    };

    const ${prefix(componentName)} = styled(Svg).withConfig({
      shouldForwardProp: (prop) => !['backgroundColor', 'circleColor', 'color'].includes(prop),
    })<IconProps>(
      ({ backgroundColor, circleColor, color, theme }) => [
        backgroundColor && {
          backgroundColor: themed('color', backgroundColor)(theme),
          padding: backgroundColor ? '0.25em' : 0,
          overflow: 'visible',
          borderRadius: '50%',
        },
        color && {
          color: themed('color', color)(theme),
        },
        circleColor && {
          circle: {
            fill: themed('color', circleColor)(theme),
          },
        },
      ]
    );

    ${defaultProps(prefix(componentName))}

    export default ${prefix(componentName)};
  `;
}
module.exports = template;
