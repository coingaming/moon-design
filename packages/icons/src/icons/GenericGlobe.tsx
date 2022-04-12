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
      d="M25.5 16a9.5 9.5 0 01-9.5 9.5m9.5-9.5A9.5 9.5 0 0016 6.5m9.5 9.5h-19m9.5 9.5A9.5 9.5 0 016.5 16m9.5 9.5v-19m0 19c2.915 0 5.278-4.253 5.278-9.5M16 25.5c-2.915 0-5.278-4.253-5.278-9.5M6.5 16A9.5 9.5 0 0116 6.5m0 0c-2.915 0-5.278 4.253-5.278 9.5M16 6.5c2.915 0 5.278 4.253 5.278 9.5m0 0H10.722"
      stroke="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericGlobe =
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
export default GenericGlobe;
