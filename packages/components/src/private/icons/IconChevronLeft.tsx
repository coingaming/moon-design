import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 17.377L4.986 10 12 2.624 9.5 0 0 10l9.502 10z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconChevronLeft = styled(Svg)<IconProps>(
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
export default IconChevronLeft;
