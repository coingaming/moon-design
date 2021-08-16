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
      d="M17.33 8.903l.355.354-.354-.354zm6.768 6.775l-.353-.353a.633.633 0 00-.014.014l.367.34zM16 24.464l-.368.34a.5.5 0 00.736 0l-.368-.34zm-1.33-15.56l-.354.353.353-.354zm-6.768 0l.353.353-.353-.354zm0 6.774l.367-.339a.472.472 0 00-.014-.014l-.353.353zM16 10.235l-.354.354a.5.5 0 00.708 0L16 10.235zm1.684-.978a4.282 4.282 0 016.06 0l.708-.707a5.282 5.282 0 00-7.475 0l.707.707zm6.06 0a4.294 4.294 0 010 6.068l.708.707a5.294 5.294 0 000-7.482l-.707.707zm-.013 6.082l-8.099 8.786.736.678 8.098-8.786-.735-.678zM7.548 8.55a5.295 5.295 0 000 7.483l.707-.707a4.295 4.295 0 010-6.068l-.707-.707zm-.014 7.468l8.098 8.786.736-.678-8.099-8.786-.735.678zm9.443-7.467l-1.33 1.332.707.707 1.33-1.332-.707-.707zm-1.954 0a5.282 5.282 0 00-7.475 0l.707.707a4.282 4.282 0 016.06 0l.708-.707zm1.33 1.332l-1.33-1.332-.707.707 1.33 1.332.708-.707z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericHeart =
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
export default GenericHeart;
