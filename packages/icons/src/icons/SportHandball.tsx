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
      d="M10.798 11.717l1.156 1.167a.876.876 0 00.573.292l2.211.22m2.794-.923l3.894-3.72a.828.828 0 011.15.023c.32.332.31.846-.022 1.165l-3.37 3.2a.915.915 0 00-.243.915l1.247 3.94 3.055 5.865a.993.993 0 01-.41 1.369l-.071.037a.988.988 0 01-1.336-.382l-2.527-4.633a.638.638 0 00-1.009-.127l-2.266 2.214a1.128 1.128 0 01-.887.344l-3.56-.27a1.015 1.015 0 01-.926-1.117c.054-.534.543-.93 1.076-.891l2.74.23a.623.623 0 00.496-.185l1.061-.948c.301-.317.422-.782.29-1.207l-.826-2.562a.905.905 0 00-.755-.62l-2.38-.25a.832.832 0 01-.54-.264l-2.06-1.951c-.235-.25-.27-.608-.149-.907m.46-5.045a1.867 1.867 0 11.197 3.728 1.867 1.867 0 01-.198-3.728zm7.518 3.182a2.036 2.036 0 11-4.053.398 2.036 2.036 0 014.053-.398z"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportHandball =
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
export default SportHandball;
