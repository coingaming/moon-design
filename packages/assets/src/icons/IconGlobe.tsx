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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.065 12.645A.998.998 0 000 13c0 .089.007.175.02.258-.013.246-.02.493-.02.742 0 7.732 6.268 14 14 14s14-6.268 14-14c0-.249-.006-.496-.02-.742.013-.083.02-.17.02-.258a.998.998 0 00-.065-.355C27.254 5.55 21.275 0 14 0S.746 5.549.065 12.645zM14 2c-1.032 0-2.283.948-3.335 3.227C9.653 7.42 9 10.52 9 14c0 .258.004.513.01.766 1.525.15 3.211.234 4.99.234 1.779 0 3.465-.084 4.99-.234.006-.253.01-.508.01-.766 0-3.479-.653-6.58-1.665-8.773C16.283 2.948 15.032 2 14 2zm4.857 14.788c-1.511.137-3.15.212-4.857.212-1.707 0-3.346-.075-4.856-.212.245 2.336.789 4.398 1.521 5.985C11.717 25.052 12.968 26 14 26s2.283-.948 3.335-3.227c.732-1.587 1.276-3.649 1.521-5.985zm-11.852-2.27A29.587 29.587 0 017 14c0-3.7.69-7.1 1.85-9.611.262-.57.559-1.112.89-1.61-4.22 1.602-7.3 5.516-7.697 10.195.079.077.221.187.458.316.542.296 1.394.594 2.531.857.598.138 1.258.262 1.973.37zm-4.935.786c.698.308 1.555.57 2.513.792.763.176 1.611.33 2.529.459.239 2.696.851 5.136 1.737 7.056.263.57.56 1.112.89 1.61-4.135-1.57-7.177-5.362-7.669-9.917zm23.887-2.33C25.56 8.295 22.48 4.38 18.26 2.778c.33.499.627 1.042.89 1.61C20.31 6.9 21 10.3 21 14c0 .173-.002.346-.005.518a26.655 26.655 0 001.973-.371c1.137-.263 1.989-.561 2.531-.857.237-.13.38-.239.458-.316zm-.027 2.33c-.698.308-1.555.57-2.513.792a29.66 29.66 0 01-2.529.459c-.239 2.696-.851 5.136-1.737 7.056-.263.57-.56 1.112-.89 1.61 4.135-1.57 7.177-5.362 7.669-9.917z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconGlobe = styled(Svg)<IconProps>(
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
export default IconGlobe;
