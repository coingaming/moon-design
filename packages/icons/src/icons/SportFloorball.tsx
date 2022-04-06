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
      d="M14.159 6.559c-.047.142-.047.33-.047.472 0 1.038.85 1.888 1.888 1.888 1.038 0 1.888-.85 1.888-1.888 0-.142 0-.33-.047-.472m.047 18.882c0-1.039-.85-1.888-1.888-1.888-1.039 0-1.888.85-1.888 1.888m-7.553-7.553c1.039 0 1.888-.85 1.888-1.888 0-1.039-.85-1.888-1.888-1.888m18.882 0c-1.039 0-1.889.85-1.889 1.888 0 1.038.85 1.888 1.889 1.888m-9.441 0A1.894 1.894 0 0114.112 16c0-1.039.85-1.888 1.888-1.888 1.038 0 1.888.85 1.888 1.888 0 1.038-.85 1.888-1.888 1.888zm-3.776-3.776a1.894 1.894 0 01-1.889-1.889c0-1.038.85-1.888 1.889-1.888 1.038 0 1.888.85 1.888 1.888 0 1.039-.85 1.889-1.888 1.889zm7.552 0a1.894 1.894 0 01-1.888-1.889c0-1.038.85-1.888 1.888-1.888 1.039 0 1.889.85 1.889 1.888 0 1.039-.85 1.889-1.889 1.889zm0 7.553a1.894 1.894 0 01-1.888-1.889c0-1.038.85-1.888 1.888-1.888 1.039 0 1.889.85 1.889 1.888 0 1.039-.85 1.889-1.889 1.889zm-7.552 0a1.894 1.894 0 01-1.889-1.889c0-1.038.85-1.888 1.889-1.888 1.038 0 1.888.85 1.888 1.888 0 1.039-.85 1.889-1.888 1.889zM16 25.5A9.499 9.499 0 016.5 16c0-5.248 4.252-9.5 9.5-9.5s9.5 4.252 9.5 9.5-4.252 9.5-9.5 9.5z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportFloorball =
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
export default SportFloorball;
