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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.065 14.645A.998.998 0 002 15c0 .089.007.175.02.258-.014.246-.02.493-.02.742 0 7.732 6.268 14 14 14s14-6.268 14-14c0-.249-.006-.496-.02-.742.013-.083.02-.17.02-.258a.998.998 0 00-.065-.355C29.254 7.55 23.275 2 16 2S2.746 7.549 2.065 14.645zM16 4c-1.032 0-2.283.948-3.335 3.227C11.653 9.42 11 12.52 11 16c0 .258.004.513.01.766 1.525.15 3.211.234 4.99.234 1.779 0 3.465-.084 4.99-.234.006-.253.01-.508.01-.766 0-3.479-.653-6.58-1.665-8.773C18.283 4.948 17.032 4 16 4zm4.857 14.788c-1.511.137-3.15.212-4.857.212-1.707 0-3.346-.075-4.857-.212.245 2.336.79 4.398 1.522 5.985C13.717 27.052 14.968 28 16 28s2.283-.948 3.335-3.227c.732-1.587 1.276-3.649 1.521-5.985zm-11.852-2.27A29.587 29.587 0 019 16c0-3.7.69-7.1 1.85-9.611.262-.57.559-1.112.89-1.61-4.22 1.602-7.3 5.516-7.697 10.195.079.077.221.187.458.316.542.296 1.394.594 2.531.857.598.138 1.258.262 1.973.37zm-4.935.786c.698.308 1.555.57 2.513.792.763.176 1.611.33 2.529.459.239 2.696.851 5.136 1.737 7.056.263.57.56 1.112.89 1.61-4.135-1.57-7.177-5.362-7.669-9.917zm23.887-2.33C27.56 10.295 24.48 6.38 20.26 4.778c.33.499.627 1.042.89 1.61C22.31 8.9 23 12.3 23 16c0 .173-.002.346-.005.518a26.655 26.655 0 001.973-.371c1.137-.263 1.989-.561 2.531-.857.237-.13.38-.239.458-.316zm-.027 2.33c-.698.308-1.555.57-2.513.792a29.66 29.66 0 01-2.529.459c-.239 2.696-.851 5.136-1.737 7.056-.263.57-.56 1.112-.89 1.61 4.135-1.57 7.177-5.362 7.669-9.917z"
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
  ({
    backgroundColor, circleColor, color, theme,
  }) => [
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
  ],
);
export default IconGlobe;
