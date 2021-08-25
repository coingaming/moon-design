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
      d="M13.493 14.556L16 13.112m-2.507 1.444v2.874m0-2.874L11 13.112m5 0l2.493 1.444M16 13.112v-2.889m2.493 4.333v2.874m0-2.874l2.493-1.444m-2.493 4.318L16 18.875m2.493-1.445l2.493 1.445m-4.986 0l-2.507-1.445M16 18.875v2.888m-2.507-4.333L11 18.875m-.79-9.101l.79.45v2.887m0 0l-2.507 1.445-.777-.464m0 3.802l.777-.463L11 18.874m0 0v2.888l-.79.463m3.283 1.894v-.913L16 21.763m0 0l2.493 1.444v.913m3.284-1.908l-.79-.45v-2.887m0 0l2.506-1.445.79.464m-.013-3.801l-.777.463-2.507-1.444m0 0v-2.889l.79-.45M18.493 7.88v.899L16 10.223m0 0L13.493 8.78v-.913M24.501 16a8.502 8.502 0 11-17.003 0 8.502 8.502 0 0117.003 0z"
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
const SportSoccer =
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
export default SportSoccer;
