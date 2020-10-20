import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 10a3 3 0 00-3 3 1 1 0 11-2 0 5 5 0 0110 0c0 1.496-.968 2.645-1.834 3.477-.377.362-.786.71-1.156 1.024l-.203.173c-.312.267-.583.505-.81.728A1 1 0 0115 18.333V18a1 1 0 01.251-.663c.368-.415.826-.816 1.257-1.184l.217-.184v-.001c.371-.315.726-.617 1.056-.934C18.6 14.249 19 13.61 19 13a3 3 0 00-3-3zM17 22a1 1 0 11-2 0 1 1 0 012 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C8.273 2 2 8.234 2 15.934 2 23.617 8.214 30 15.958 30c3.882 0 7.731-.038 11.61-.076l1.4-.014a1 1 0 00.93-1.343l-1.955-5.358A13.825 13.825 0 0030 15.934C30 8.234 23.727 2 16 2zM4 15.934C4 9.348 9.368 4 16 4s12 5.348 12 11.934c0 2.44-.735 4.707-1.998 6.597a1 1 0 00-.108.898l1.64 4.495c-3.875.038-7.709.076-11.576.076C9.343 28 4 22.538 4 15.934z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconHelp = styled(Svg)<IconProps>(
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
export default IconHelp;
