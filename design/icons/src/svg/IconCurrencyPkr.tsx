import * as React from 'react';
import styled from '@emotion/styled';

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
      d="M6.774 5c1.157 0 2.007.23 2.551.69.554.461.83 1.193.83 2.197 0 .672-.143 1.21-.43 1.616a2.797 2.797 0 01-1.097.925l2.15 4.434H8.466l-1.72-3.785H6.09v3.785H4V5h2.774zM6.58 6.713h-.49v2.665h.52c.514 0 .88-.115 1.097-.345.228-.23.341-.57.341-1.022 0-.47-.118-.801-.356-.994-.237-.203-.608-.304-1.112-.304zm6.957.47c.425 0 .83.045 1.216.137.386.093.776.244 1.172.456l-.534 1.478a8.237 8.237 0 00-.905-.387 2.378 2.378 0 00-.86-.165c-.524 0-.787.175-.787.525 0 .12.03.23.09.331.069.092.202.193.4.304.198.11.485.258.86.442.366.175.683.354.95.538.277.185.49.415.637.691.149.276.223.64.223 1.091 0 .765-.247 1.354-.742 1.768-.484.405-1.201.608-2.15.608-.475 0-.88-.037-1.217-.11a4.58 4.58 0 01-1.023-.332v-1.699c.346.184.717.336 1.112.456.406.12.762.18 1.068.18.346 0 .594-.06.742-.18a.562.562 0 00.237-.47.67.67 0 00-.089-.345c-.06-.11-.188-.23-.386-.36a7.302 7.302 0 00-.92-.51c-.612-.295-1.062-.603-1.349-.926-.287-.322-.43-.773-.43-1.353 0-.7.242-1.234.727-1.602.494-.378 1.147-.567 1.958-.567z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyPkr = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);
