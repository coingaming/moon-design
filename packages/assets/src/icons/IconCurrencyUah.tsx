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
      d="M15.61 14.355a7.112 7.112 0 01-4.959 2.035c-2.147 0-3.054-.831-3.054-1.748 0-.573.302-1.089.786-1.519h9.194v-2.235h-6.049c1.12-.458 2.268-.974 3.327-1.375h2.722V7.307H15.67c.998-.573 1.815-1.49 1.815-2.866 0-2.435-2.57-4.441-6.653-4.441-2.54 0-5.202.917-7.258 2.407l2.389 3.037C7.476 4.27 9.079 3.64 10.62 3.64c1.24 0 2.298.401 2.298 1.547 0 .831-.726 1.548-1.451 2.12H3v2.207h6.593c-1.059.43-2.208.946-3.236 1.375H3v2.235h1.935c-.816.573-1.542 1.462-1.542 2.78 0 2.292 2.48 4.097 6.805 4.097 2.752 0 5.594-.716 7.802-2.693l-2.39-2.952z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyUah =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
  ]);
export default IconCurrencyUah;
