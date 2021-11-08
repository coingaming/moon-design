import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.117 5.985c0-2.77 2.226-5.013 4.974-5.013 2.747 0 4.974 2.244 4.974 5.013 0 2.768-2.227 5.012-4.974 5.012-2.748 0-4.974-2.244-4.974-5.012zm4.974 4.01c-2.198 0-3.98-1.795-3.98-4.01s1.782-4.01 3.98-4.01 3.979 1.794 3.979 4.01c0 2.215-1.781 4.01-3.98 4.01zm.65 11.492a.5.5 0 00-.502-.496c-.166.002-.334.003-.503.003-3.219 0-5.91-.342-8.071-1.022a1.003 1.003 0 01-.685-1.122l.42-2.543a2.495 2.495 0 012.238-2.086 63.992 63.992 0 016.35-.245.5.5 0 00.5-.498.5.5 0 00-.495-.505 65.012 65.012 0 00-6.44.249 3.493 3.493 0 00-3.135 2.92l-.42 2.544a2.006 2.006 0 001.37 2.243c2.267.713 5.055 1.068 8.368 1.068.173 0 .344-.001.514-.003a.5.5 0 00.492-.507zm5.816.54c-2.473 0-4.477-2.02-4.477-4.512 0-2.492 2.004-4.512 4.477-4.512 2.473 0 4.477 2.02 4.477 4.512 0 2.491-2.004 4.511-4.477 4.511zm-5.471-4.513c0-3.045 2.449-5.514 5.471-5.514 3.022 0 5.471 2.469 5.471 5.514 0 3.046-2.449 5.515-5.471 5.515-3.022 0-5.471-2.469-5.471-5.515zm4.76 1.705a.482.482 0 00.359.155.478.478 0 00.35-.162l2.481-2.5c.47-.473-.234-1.181-.703-.709l-2.135 2.152-1.14-1.15c-.47-.472-1.173.237-.704.71l1.492 1.504z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconGeneralInfo =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconGeneralInfo;
