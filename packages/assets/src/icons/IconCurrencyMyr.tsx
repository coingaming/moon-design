import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 89 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.283 46h10.432V31.344h3.904L23.963 46h12.544L25.691 29.872c5.632-2.304 8.576-7.04 8.576-13.632 0-9.088-4.992-15.68-16.256-15.68H.283V46zm10.432-24V9.968h5.568c4.8 0 6.912 2.56 6.912 6.016C23.195 19.76 20.7 22 16.091 22h-5.376zM41.91 46h10.56V20.912h.192l9.216 16.704h6.848l9.216-16.64h.128V46h10.624V.56H77.878l-12.48 24.128h-.128L52.662.56H41.91V46z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyMyr =
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
export default IconCurrencyMyr;
