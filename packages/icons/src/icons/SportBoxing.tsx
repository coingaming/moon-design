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
      d="M20.313 20.06c-.98 0-2.267.936-2.267 1.954 0 1.019.796 1.846 1.776 1.846h.903m-7.927-2.663l-.039 2.507a1.722 1.722 0 001.741 1.748l4.86-.053a1.722 1.722 0 001.704-1.736l-.032-3.724m-9.865-6.555c0-.634-.466-1.215-1.107-1.277-.74-.073-1.365.496-1.365 1.208v1.703c0 3.593 3.163 4.33 4.915 5.018h7.417c.225-.75 1.461-4.392 1.444-9.418V8.514m-9.843 6.766s1.965.802 1.965 4.67m7.845-11.202c-.47 7.236-11.292 7.232-11.758-.004-.025-.352.014.178-.016-.762-.005-.802.657-1.453 1.473-1.453h8.848c.816 0 1.474.65 1.474 1.449 0 .661.004.41-.021.77z"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportBoxing =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
export default SportBoxing;
