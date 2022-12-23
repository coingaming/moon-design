import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 78 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.013 51.576c8.064 0 14.4-3.84 18.304-8.64l-7.808-6.72c-2.624 3.136-6.272 5.12-10.496 5.12-7.424 0-12.224-5.696-12.224-12.992 0-8.32 5.568-13.184 12.16-13.184 4.416 0 8.064 2.368 10.496 5.248l7.808-6.72C37.261 7.608 30.35 4.92 23.95 4.92 8.973 4.92.525 15.352.525 28.344c0 15.104 10.432 23.232 23.488 23.232zM77.957 38.072c0-8.512-5.568-10.816-14.464-13.504-4.224-1.28-5.568-2.368-5.568-3.904 0-1.6 1.28-2.56 3.968-2.56 2.624 0 5.696.896 9.344 3.456l5.952-7.424c-3.072-2.496-7.424-4.608-11.648-5.44V.952h-6.912V8.44c-7.552 1.024-11.904 6.144-11.904 12.928 0 8.32 6.464 10.944 13.76 13.12 4.928 1.472 6.144 2.56 6.144 4.416 0 1.664-1.472 2.88-3.968 2.88-3.072 0-7.296-1.408-10.88-4.8l-6.144 7.488c3.776 3.776 8.192 5.888 12.928 6.656v7.36h6.848v-7.296c7.616-1.024 12.544-5.824 12.544-13.12z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyCad =
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
export default IconCurrencyCad;
