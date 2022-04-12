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
      d="M21.958 9.15c.066-.09.142-.173.213-.26.76-.926.126-2.39-1.11-2.39h-5.843c-.41 0-.802.18-1.075.493l-4.28 6.577c-.82.943-.162 2.43 1.076 2.43h.268c1.16 0 1.822 1.314 1.2 2.265a1.49 1.49 0 00-.136.246l-2.147 5.23c-.071.173-.18.33-.248.506-.223.573.182 1.253.844 1.253.171 0 .339-.05.484-.143l8.817-7.082c1.024-.661.564-2.275-.65-2.275-1.062 0-1.597-1.283-.898-2.061.037-.042.075-.084.108-.13l3.377-4.658z"
      stroke="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const OtherLightning =
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
export default OtherLightning;
