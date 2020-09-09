import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.781 3.75c.246 0 .446.2.446.446v.01h-.89l-.002-.01c0-.247.201-.446.446-.446zm.945 2.909a.353.353 0 00-.282-.001l-.675.286-.671-.236a.367.367 0 00-.239 0l-.136.05.525-1.839h1.067l.508 1.781-.097-.041zM14.19 7.684c.04 0 .08-.007.12-.021l.67-.24.683.24c.084.03.176.027.258-.009l.661-.28.649.28a.355.355 0 00.485-.424l-.789-2.764c-.003-.01-.013-.016-.017-.024.001-.005.005-.009.006-.013a1.16 1.16 0 00-1.135-1.392c-.639 0-1.159.52-1.159 1.159 0 .083.014.165.032.245-.004.01-.015.014-.018.025l-.789 2.763a.354.354 0 00.1.358.353.353 0 00.243.097zm3.182 10.456l-3.314-3.315.383-.382c.002 0 0-.002.002-.002l.384-.384 3.312 3.313-.767.77zM3.237 9.73C2.3 8.794 1.76 7.574 1.717 6.296c-.044-1.268.408-2.444 1.272-3.307.826-.827 1.936-1.276 3.141-1.276.055 0 .111 0 .166.002 1.28.044 2.499.585 3.435 1.522.937.936 1.477 2.156 1.52 3.434.045 1.268-.407 2.444-1.271 3.307-1.791 1.792-4.816 1.68-6.743-.248zm15.659 7.388L15.079 13.3a.365.365 0 00-.505.001l-.384.384-3.467-3.467c.846-.975 1.288-2.227 1.242-3.572-.05-1.459-.664-2.849-1.73-3.913-1.064-1.066-2.454-1.68-3.914-1.73-1.471-.04-2.83.475-3.836 1.48C1.479 3.49.953 4.853 1.003 6.32c.05 1.46.664 2.85 1.73 3.914a5.818 5.818 0 004.103 1.731c1.225 0 2.416-.43 3.37-1.256l3.48 3.481-.385.384a.357.357 0 000 .505l3.818 3.818a.355.355 0 00.505-.001l1.272-1.274a.357.357 0 000-.504z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportsBadminton = styled(Svg)<IconProps>(
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
export default IconSportsBadminton;
