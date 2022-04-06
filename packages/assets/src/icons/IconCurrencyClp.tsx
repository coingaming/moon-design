import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 34 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M33.175 38.072c0-8.512-5.567-10.816-14.463-13.504-4.224-1.28-5.569-2.368-5.569-3.904 0-1.6 1.28-2.56 3.968-2.56 2.624 0 5.697.896 9.345 3.456l5.951-7.424c-3.071-2.496-7.423-4.608-11.647-5.44V.952h-6.913V8.44C6.296 9.464 1.944 14.584 1.944 21.368c0 8.32 6.464 10.944 13.76 13.12 4.928 1.472 6.145 2.56 6.145 4.416 0 1.664-1.473 2.88-3.968 2.88-3.072 0-7.296-1.408-10.88-4.8L.854 44.472c3.776 3.776 8.192 5.888 12.929 6.656v7.36h6.847v-7.296c7.616-1.024 12.544-5.824 12.544-13.12z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyClp =
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
export default IconCurrencyClp;
