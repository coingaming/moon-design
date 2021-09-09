import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.94 11.574c2.387 0 4.322-1.92 4.322-4.287C16.262 4.92 14.327 3 11.94 3 9.552 3 7.617 4.92 7.617 7.287c0 2.368 1.935 4.287 4.323 4.287zM20.471 18.23l-.341-1.804c-.341-1.693-1.706-2.82-3.185-2.82h-1.82c-.228 0-.57 0-.797.112-.682.226-1.478.451-2.388.451-.91 0-1.593-.113-2.275-.338-.228-.113-.455-.113-.797-.113h-1.82c-1.592 0-2.843 1.128-3.185 2.595l-.34 1.918c-.115.564.227 1.015.682 1.24 2.275.903 8.986 2.934 15.697 0 .455-.225.683-.676.569-1.24z"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <rect x={19} y={5} width={5} height={1} rx={0.5} fill="currentColor" />
    <path
      d="M20 17.5c-2 1.6-11.833 1-16.5.5l1 1.5 5 1.5 5.5-.5 5-1 .5-1.5c0-.167-.1-.5-.5-.5z"
      fill="currentColor"
      fillOpacity={0.29}
    />
    <rect
      x={22}
      y={3}
      width={5}
      height={1}
      rx={0.5}
      transform="rotate(90 22 3)"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportsFantasy = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
export default IconSportsFantasy;
