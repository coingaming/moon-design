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
      d="M16.276 7.086l.343.364-.343-.364zm0 17.828l-.342.364.342-.364zm4.828-11.33a.5.5 0 00-.708.707l.708-.707zm3.417 4.832a.5.5 0 00.708-.707l-.708.707zm.708-4.125a.5.5 0 00-.708-.707l.708.707zm-4.833 3.418a.5.5 0 00.708.707l-.708-.707zM8 17.731v-3.462H7v3.462h1zm1.5-4.962h.476v-1H9.5v1zm.476 6.462H9.5v1h.476v-1zM7 17.73a2.5 2.5 0 002.5 2.5v-1a1.5 1.5 0 01-1.5-1.5H7zm1-3.462a1.5 1.5 0 011.5-1.5v-1a2.5 2.5 0 00-2.5 2.5h1zm3.69-2.18l4.929-4.639-.685-.728-4.93 4.64.686.728zm5.772-4.275v16.372h1V7.814h-1zm-.843 16.736l-4.93-4.64-.685.728 4.93 4.64.685-.728zm.843-.364a.5.5 0 01-.843.364l-.685.728c.957.9 2.528.222 2.528-1.092h-1zM16.619 7.45a.5.5 0 01.843.364h1c0-1.314-1.571-1.993-2.528-1.092l.685.728zm3.777 6.841l4.125 4.125.708-.707-4.125-4.125-.708.707zm4.125-.707l-4.125 4.125.708.707 4.125-4.125-.708-.707zM9.976 20.231a1.5 1.5 0 011.028.407l.686-.728a2.5 2.5 0 00-1.714-.68v1zm0-7.462a2.5 2.5 0 001.713-.68l-.685-.727a1.5 1.5 0 01-1.028.407v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaNoVolume =
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
export default MediaNoVolume;
