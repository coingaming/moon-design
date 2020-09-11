import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <path
        id="icon-price-boost_svg__a"
        d="M14 3v2h2.6L9 12.6l-3-3-6 6L1.4 17 6 12.4l3 3 9-9V9h2V3z"
      />
    </defs>
    <use
      fill="currentColor"
      fillRule="nonzero"
      xlinkHref="#icon-price-boost_svg__a"
      transform="translate(0 -3)"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconPriceBoost = styled(Svg)<IconProps>(
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
export default IconPriceBoost;
