import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 3v3a1 1 0 102 0V1.01A.999.999 0 003 0H3a1.001 1.001 0 00-.61.208L.4 1.7a1 1 0 101.2 1.6L2 3zM27 5a1 1 0 000-2H8a1 1 0 100 2h19zM28 13a1 1 0 01-1 1H8a1 1 0 110-2h19a1 1 0 011 1zM28 22a1 1 0 01-1 1H8a1 1 0 110-2h19a1 1 0 011 1zM2.5 11a.5.5 0 00-.5.5 1 1 0 11-2 0A2.5 2.5 0 012.5 9c.61 0 1.245.185 1.738.64.507.466.762 1.123.762 1.86 0 .36-.13.672-.247.89a4.35 4.35 0 01-.44.649c-.251.313-.57.655-.868.975l-.21.227c-.246.266-.473.519-.665.759H4a1 1 0 110 2H1a1 1 0 01-1-1c0-.683.33-1.297.642-1.757.327-.482.748-.952 1.123-1.359l.244-.263c.292-.314.543-.583.741-.832a2.43 2.43 0 00.24-.342c.046-.087-.037-.273-.107-.336C2.833 11.065 2.72 11 2.5 11zM1 19a1 1 0 100 2h1.5a6.143 6.143 0 01-.68.768 1 1 0 00-.059 1.406c.207.226.379.406.53.565.188.195.344.358.494.535.151.179.326.406.098.615-.05.046-.164.111-.383.111a.5.5 0 01-.5-.5 1 1 0 10-2 0A2.5 2.5 0 002.5 27c.61 0 1.245-.185 1.738-.64.507-.466.762-1.123.762-1.86 0-.668-.423-1.205-.69-1.52a13.152 13.152 0 00-.442-.486c.057-.07.115-.142.174-.218.212-.275.441-.611.621-.977C4.84 20.942 5 20.489 5 20a1 1 0 00-1-1H1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconListNumbered = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
export default IconListNumbered;
