import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 38 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37.784 7.168H34.2V.896H24.152v6.272h-10.56v5.952h10.56v6.912h-.064c-2.24-2.56-5.44-3.904-8.96-3.904-8.064 0-14.272 6.656-14.272 16.256C.856 42.048 7 48.576 15.64 48.576c3.904 0 6.848-1.344 8.896-3.904h.128V48H34.2V13.12h3.584V7.168zM17.688 39.744c-3.904 0-6.72-2.944-6.72-7.36 0-4.48 2.944-7.424 6.72-7.424 4.032 0 6.848 3.136 6.848 7.424 0 4.48-2.944 7.36-6.848 7.36zM3.544 59.328h30.592v-8.384H3.544v8.384z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyVnd =
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
export default IconCurrencyVnd;
