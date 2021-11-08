import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 75 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.502 46h10.432V31.344h3.904L24.182 46h12.544L25.91 29.872c5.632-2.304 8.576-7.04 8.576-13.632C34.486 7.152 29.494.56 18.23.56H.502V46zm10.432-24V9.968h5.568c4.8 0 6.912 2.56 6.912 6.016 0 3.776-2.496 6.016-7.104 6.016h-5.376zM41.425 58.672h9.983v-15.68l.128-.064c2.048 2.368 4.8 3.648 8.384 3.648 8.64 0 14.784-6.528 14.784-16.192 0-9.6-6.143-16.256-14.271-16.256-3.52 0-6.657 1.344-8.897 3.904h-.128v-3.328h-9.983v43.968zm16.512-20.928c-3.968 0-6.976-2.88-6.976-7.36 0-4.288 2.88-7.424 6.912-7.424 3.84 0 6.72 2.944 6.72 7.424 0 4.416-2.817 7.36-6.657 7.36z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyIdr =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconCurrencyIdr;
