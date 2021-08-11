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
      d="M13.464 9a.5.5 0 01.5-.5h6.107c1.79 0 3.215 1.492 3.215 3.3v9.966l1.855-1.914a.5.5 0 11.718.696l-2.714 2.8a.5.5 0 01-.718 0l-2.715-2.8a.5.5 0 11.718-.696l1.856 1.914V11.8c0-1.285-1.006-2.3-2.215-2.3h-6.107a.5.5 0 01-.5-.5zm-4.25-.5a.5.5 0 01.36.152l2.714 2.8a.5.5 0 11-.718.696l-1.856-1.914V20.2c0 1.285 1.006 2.3 2.215 2.3h6.107a.5.5 0 110 1h-6.107c-1.79 0-3.215-1.492-3.215-3.3v-9.966L6.86 12.148a.5.5 0 11-.718-.696l2.714-2.8a.5.5 0 01.36-.152z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ArrowsRefresh =
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
export default ArrowsRefresh;
