import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4V24H10.1553V16.8034H14.3963L16.103 12.4121H10.1553V8.33759H17.3961L19 4H4Z"
      fill="#FF5565"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 23.7533C17.3294 24.1791 18.7629 24.0503 20.0051 23.3935C21.2472 22.7367 22.2032 21.6018 22.6761 20.2229C23.149 18.8441 23.1026 17.3262 22.5466 15.9824C21.9906 14.6385 20.9673 13.571 19.6876 13L16 23.7533Z"
      fill="#FF5565"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
};
const IconESportsLeagueOfLegends = styled(Svg)<IconProps>(
  ({ backgroundColor, theme }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
  ]
);
export default IconESportsLeagueOfLegends;
