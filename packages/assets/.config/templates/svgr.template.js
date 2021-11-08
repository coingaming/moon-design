/* Disable rules due to SVGR's setup */
/* eslint-disable no-shadow, @typescript-eslint/no-unused-vars */
const prefix = (componentName) => componentName.name.replace('Svg', '');

// e.g
// const sharedDefaultProps = 'verticalAlign: "middle",';
const sharedDefaultProps = '';

const customDefaultProps = {
  LogoSportsbet: 'color: "bulma.100",',
  LogoSportsbetSponsor: 'color: "bulma.100",',
  LogoBetaddaFull: 'color: "bulma.100",',
  PatternCircles: 'color: "piccolo.100",',
  PatternRipple: 'color: "piccolo.100",',
  PatternSpeed: 'color: "piccolo.100",',
  PatternStars: 'color: "piccolo.100",',
  PatternWave: 'color: "piccolo.100",',
};

const defaultProps = (prefixCompName) =>
  `${prefixCompName}.defaultProps = {
    ${
      customDefaultProps[prefixCompName]
        ? `${sharedDefaultProps}${customDefaultProps[prefixCompName]}`
        : sharedDefaultProps
    }
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
    import SvgProps from './private/SvgProps';

    const Svg = (props: React.SVGProps<SVGSVGElement>) => ${jsx};

    const Component =
      styled(Svg)<SvgProps >
      (({ color, height, width, fontSize, theme }) => ({
        ...(color && { color: themed('color', color)(theme) }),
        height,
        width,
        fontSize,
        verticalAlign,
      })
    );
    
    const ${prefix(componentName)}: React.FC<SvgProps > = (props) => {
      const theme = useTheme();
      const secondaryColor = theme.color.bulma[100];
      const attributes = { ...props, secondaryColor } as any;
      return <Component {...attributes} />;
    };  

    ${defaultProps(prefix(componentName))}

    export default ${prefix(componentName)};
  `;
}
module.exports = template;
