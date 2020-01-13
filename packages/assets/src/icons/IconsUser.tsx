import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/sportsbet-themes';
import { themed } from '@heathmont/sportsbet-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    width="1em"
    height="1em"
  >
    <path
      d="M9.94 9.574c2.387 0 4.322-1.92 4.322-4.287C14.262 2.92 12.327 1 9.94 1 7.552 1 5.617 2.92 5.617 5.287c0 2.368 1.935 4.287 4.323 4.287zM18.471 16.23l-.341-1.805c-.341-1.692-1.706-2.82-3.185-2.82h-1.82c-.228 0-.569 0-.796.113-.683.225-1.48.451-2.39.451-.91 0-1.592-.113-2.274-.338-.228-.113-.455-.113-.797-.113h-1.82c-1.592 0-2.843 1.128-3.185 2.595l-.34 1.918c-.115.564.227 1.015.682 1.24 2.275.903 8.986 2.934 15.697 0 .455-.225.683-.676.57-1.24z"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconsUser = styled(Svg)<IconProps>(
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
export default IconsUser;
