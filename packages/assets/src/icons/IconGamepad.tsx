import * as React from 'react';
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
      clipRule="evenodd"
      d="M17.712 17.96a1.11 1.11 0 001.1-1.26l-1.158-8.484a2.356 2.356 0 00-2.334-2.038H8.68c-1.178 0-2.175.87-2.334 2.038L5.189 16.7a1.11 1.11 0 002.069.689l2.123-3.822a1.767 1.767 0 011.545-.91h2.148c.642 0 1.233.349 1.545.91l2.123 3.822c.196.352.567.57.97.57zm2.267-1.42a2.288 2.288 0 01-4.267 1.421l-2.123-3.822a.59.59 0 00-.515-.303h-2.148a.59.59 0 00-.515.303l-2.123 3.822a2.288 2.288 0 01-4.267-1.42l1.157-8.484A3.534 3.534 0 018.68 5h6.64a3.534 3.534 0 013.502 3.057l1.157 8.484z"
      stroke="currentColor"
      strokeWidth={0.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconGamepad = styled(Svg)<IconProps>(
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
export default IconGamepad;
