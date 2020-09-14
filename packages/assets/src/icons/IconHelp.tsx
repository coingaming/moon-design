import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 8a3 3 0 00-3 3 1 1 0 11-2 0 5 5 0 0110 0c0 1.496-.968 2.645-1.834 3.477-.377.362-.786.71-1.156 1.024l-.203.173c-.312.267-.584.505-.81.728A1 1 0 0113 16.333V16a1 1 0 01.251-.663c.368-.415.826-.816 1.257-1.184l.217-.184v-.001c.371-.315.726-.617 1.056-.934C16.6 12.249 17 11.61 17 11a3 3 0 00-3-3zM15 20a1 1 0 11-2 0 1 1 0 012 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 0C6.273 0 0 6.234 0 13.934 0 21.617 6.214 28 13.958 28c3.882 0 7.731-.038 11.61-.076l1.4-.014a1 1 0 00.93-1.343l-1.955-5.358A13.825 13.825 0 0028 13.934C28 6.234 21.727 0 14 0zM2 13.934C2 7.348 7.368 2 14 2s12 5.348 12 11.934c0 2.44-.735 4.707-1.998 6.597a1 1 0 00-.108.898l1.64 4.495c-3.875.038-7.709.076-11.576.076C7.343 26 2 20.538 2 13.934z"
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
