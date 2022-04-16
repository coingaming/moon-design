import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.523 16.144a3.923 3.923 0 11-7.846 0 3.923 3.923 0 017.846 0zM10.47 1.95a1.73 1.73 0 11-3.46 0 1.73 1.73 0 013.46 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.755 12.007l-1.594.16c.039.03.075.06.11.091l2.143 3.602a.702.702 0 101.207-.717l-1.866-3.136zM2.817 9.882a1.528 1.528 0 01-.114-1.155 2.81 2.81 0 01.395-.84l2.278-3.622c.465-.766 1.37-.727 1.673-.561l1.101.669c.702.561.4 1.695.171 1.92L6.075 9.554l-3.258.327z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 6.17a.526.526 0 01.103.737c-.969 1.283-.994 2.88-.84 3.8L18.5 9.221a.526.526 0 01.1 1.048L.723 11.84l-.124-.415c-.282-.948-.5-3.279.915-5.153a.526.526 0 01.737-.103z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.062 4.437a.965.965 0 011.349.208l1.555 2.122 3.274-.597a.965.965 0 11.346 1.899l-3.544.646a1.491 1.491 0 01-1.47-.585L6.854 5.785a.965.965 0 01.208-1.348z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsHarness =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
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
export default IconSportsHarness;
