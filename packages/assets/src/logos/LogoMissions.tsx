import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx={27.1917}
      cy={21.3057}
      rx={10.3709}
      ry={10.3709}
      transform="rotate(-15 27.1917 21.3057)"
      fill="#FF385C"
    />
    <ellipse
      cx={13.7017}
      cy={26.8477}
      rx={10.3709}
      ry={10.3709}
      transform="rotate(-15 13.7017 26.8477)"
      fill="#6A36CA"
    />
    <circle
      cx={15.8012}
      cy={13.7017}
      r={10.3709}
      transform="rotate(-15 15.8012 13.7017)"
      fill="#FFB319"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const LogoMissions = styled(Svg)<SvgProps>(
  ({
    color, height, width, fontSize, verticalAlign, theme,
  }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  }),
);
LogoMissions.defaultProps = {
  verticalAlign: 'middle',
};
export default LogoMissions;
