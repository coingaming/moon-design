import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 72 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.096 51h10.432V36.344h3.904L23.776 51H36.32L25.504 34.872c5.632-2.304 8.576-7.04 8.576-13.632 0-9.088-4.992-15.68-16.256-15.68H.096V51zm10.432-24V14.968h5.568c4.8 0 6.912 2.56 6.912 6.016 0 3.776-2.496 6.016-7.104 6.016h-5.376zM71.738 38.072c0-8.512-5.568-10.816-14.464-13.504-4.224-1.28-5.568-2.368-5.568-3.904 0-1.6 1.28-2.56 3.968-2.56 2.624 0 5.696.896 9.344 3.456l5.952-7.424c-3.072-2.496-7.424-4.608-11.648-5.44V.952H52.41V8.44c-7.552 1.024-11.904 6.144-11.904 12.928 0 8.32 6.464 10.944 13.76 13.12 4.928 1.472 6.144 2.56 6.144 4.416 0 1.664-1.472 2.88-3.968 2.88-3.072 0-7.296-1.408-10.88-4.8l-6.144 7.488c3.776 3.776 8.192 5.888 12.928 6.656v7.36h6.848v-7.296c7.616-1.024 12.544-5.824 12.544-13.12z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyBrl =
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
export default IconCurrencyBrl;
