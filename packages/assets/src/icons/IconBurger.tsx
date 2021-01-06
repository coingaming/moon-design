import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 8a1 1 0 011-1h18a1 1 0 110 2H1a1 1 0 01-1-1zM.793 1.022C3.54.44 6.65 0 10 0c3.315 0 6.445.29 9.256 1.033a1 1 0 01-.512 1.934C16.154 2.282 13.209 2 10 2c-3.176 0-6.142.417-8.793.978a1 1 0 01-.414-1.956zM.033 13.744a1 1 0 011.223-.71C3.845 13.717 6.79 14 10 14c3.175 0 6.141-.417 8.793-.978a1 1 0 11.414 1.956C16.458 15.56 13.349 16 10 16c-3.316 0-6.445-.29-9.256-1.033a1 1 0 01-.711-1.223z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconBurger = styled(Svg)<IconProps>(
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
export default IconBurger;
