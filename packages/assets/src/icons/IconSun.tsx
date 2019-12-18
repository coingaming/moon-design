import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/sportsbet-themes';
import { themed } from '@heathmont/sportsbet-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.152 11.717H.717a.717.717 0 1 1 0-1.434h1.435a.717.717 0 1 1 0 1.434zM21.283 11.717h-1.435a.717.717 0 1 1 0-1.434h1.435a.717.717 0 0 1 0 1.434zM11 22a.717.717 0 0 1-.717-.717v-1.435a.717.717 0 1 1 1.434 0v1.435A.717.717 0 0 1 11 22zM11 2.87a.717.717 0 0 1-.717-.718V.717a.717.717 0 1 1 1.434 0v1.435A.717.717 0 0 1 11 2.87zM16.142 20.623a.717.717 0 0 1-.622-.36l-.717-1.242a.717.717 0 1 1 1.242-.717l.717 1.242a.717.717 0 0 1-.62 1.077zM6.577 4.055a.717.717 0 0 1-.622-.359l-.717-1.242a.717.717 0 1 1 1.242-.718l.717 1.243a.717.717 0 0 1-.62 1.076zM19.904 16.859a.712.712 0 0 1-.357-.097l-1.243-.717a.717.717 0 1 1 .717-1.242l1.243.717a.717.717 0 0 1-.36 1.339zM3.337 7.294a.712.712 0 0 1-.358-.097L1.736 6.48a.717.717 0 1 1 .718-1.243l1.242.718a.717.717 0 0 1-.36 1.339zM18.663 7.294a.717.717 0 0 1-.36-1.339l1.243-.717a.717.717 0 1 1 .718 1.242l-1.243.717a.713.713 0 0 1-.358.097zM2.096 16.859a.717.717 0 0 1-.36-1.339l1.243-.717a.717.717 0 1 1 .717 1.242l-1.242.717a.713.713 0 0 1-.358.097zM15.423 4.055a.717.717 0 0 1-.62-1.076l.717-1.243a.718.718 0 0 1 1.242.718l-.717 1.242a.717.717 0 0 1-.622.36zM5.858 20.623a.717.717 0 0 1-.62-1.076l.717-1.243a.717.717 0 1 1 1.242.717l-.717 1.243a.717.717 0 0 1-.622.359z"
      fill="#FFB319"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.304 11A6.703 6.703 0 0 0 11 17.696 6.703 6.703 0 0 0 17.696 11 6.703 6.703 0 0 0 11 4.304 6.703 6.703 0 0 0 4.304 11zm5.967-3.12a.716.716 0 1 0 0-1.435 3.831 3.831 0 0 0-3.826 3.826.716.716 0 1 0 1.435 0 2.392 2.392 0 0 1 2.391-2.391z"
      fill="#FFB319"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSun = styled(Svg)<IconProps>(
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
export default IconSun;
