import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

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
      d="M13.808 22.615a1.5 1.5 0 011.5-1.5h1.384a1.5 1.5 0 011.5 1.5V24a1.5 1.5 0 01-1.5 1.5h-1.384a1.5 1.5 0 01-1.5-1.5v-1.385zM13.808 15.308a1.5 1.5 0 011.5-1.5h1.384a1.5 1.5 0 011.5 1.5v1.384a1.5 1.5 0 01-1.5 1.5h-1.384a1.5 1.5 0 01-1.5-1.5v-1.384zM6.5 22.615a1.5 1.5 0 011.5-1.5h1.385a1.5 1.5 0 011.5 1.5V24a1.5 1.5 0 01-1.5 1.5H8A1.5 1.5 0 016.5 24v-1.385zM21.115 22.615a1.5 1.5 0 011.5-1.5H24a1.5 1.5 0 011.5 1.5V24a1.5 1.5 0 01-1.5 1.5h-1.385a1.5 1.5 0 01-1.5-1.5v-1.385zM21.115 15.308a1.5 1.5 0 011.5-1.5H24a1.5 1.5 0 011.5 1.5v1.384a1.5 1.5 0 01-1.5 1.5h-1.385a1.5 1.5 0 01-1.5-1.5v-1.384zM13.808 8a1.5 1.5 0 011.5-1.5h1.384a1.5 1.5 0 011.5 1.5v1.385a1.5 1.5 0 01-1.5 1.5h-1.384a1.5 1.5 0 01-1.5-1.5V8z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaTunerAlternative =
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
export default MediaTunerAlternative;
