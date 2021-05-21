import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.574 3.699h10.733a2.464 2.464 0 012.464 2.464v14.194"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.603 20.357h33.165c.126 0 .232.106.232.232v.658c0 .884-.715 1.599-1.599 1.599H6.976a1.597 1.597 0 01-1.599-1.6v-.657a.226.226 0 01.226-.232zM25.568 6.959H35.77"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.991 5.487c-.285.376-.304.951-.186 1.32.142.441.54.923 1.308 1.164l1.133.368.237.737 1.71.264.5-.973-1.642-5.12c-.118-.368-.674-.962-1.296-1.128l.28-1.024-1.473.472-1.915.614c-1.768.567-2.66 1.585-3.4 3.203C10.21 7.097 9.86 7.778 8.092 8.345L4.778 9.408"
      stroke="currentColor"
      strokeWidth={0.832}
      strokeMiterlimit={10}
    />
    <path
      d="M7.092 10.291l1.842-.59c2.505-.804 2.8-2.036 3.46-3.142.662-1.105.7-2.255 2.357-2.786M17.433 4.537l.973.5M12.77 8.998c-.818.994-1.743 1.656-2.959 2.046l-5.193 1.665M16.537 8.075a2.32 2.32 0 00.023 2.226c.492.899.289 1.533-.174 2.372l4.225 1.773.723.987-.633 1.827M18.503 18.006l.264-1.71-3.537-.896-2.697.458-2.432-1.251"
      stroke="currentColor"
      strokeWidth={0.832}
      strokeMiterlimit={10}
    />
    <rect
      x={3.25}
      y={4.356}
      width={0.5}
      height={0.5}
      rx={0.25}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.5}
    />
    <rect
      x={-0.25}
      y={0.25}
      width={0.5}
      height={0.5}
      rx={0.25}
      transform="matrix(-1 0 0 1 4.5 7.106)"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.5}
    />
    <rect
      x={2.25}
      y={15.356}
      width={0.5}
      height={0.5}
      rx={0.25}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.5}
    />
    <rect
      x={5.25}
      y={4.356}
      width={2.5}
      height={0.5}
      rx={0.25}
      fill="#118BFF"
      stroke="currentColor"
      strokeWidth={0.5}
    />
    <rect
      x={-0.25}
      y={0.25}
      width={2.5}
      height={0.5}
      rx={0.25}
      transform="matrix(-1 0 0 1 2.5 7.106)"
      fill="#118BFF"
      stroke="currentColor"
      strokeWidth={0.5}
    />
    <rect
      x={4.25}
      y={15.356}
      width={2.5}
      height={0.5}
      rx={0.25}
      fill="#118BFF"
      stroke="currentColor"
      strokeWidth={0.5}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconVirtualSports =
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
export default IconVirtualSports;
