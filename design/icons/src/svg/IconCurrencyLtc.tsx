import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#icon-currency-LTC_svg__clip0)" fill="currentColor">
      <path d="M56.002 28c0 15.464-12.536 28-28 28s-28-12.536-28-28 12.536-28 28-28 28 12.536 28 28z" />
      <path d="M50.056 28c0 12.18-9.874 22.055-22.055 22.055C15.82 50.055 5.945 40.18 5.945 28S15.82 5.945 28.001 5.945c12.18 0 22.055 9.874 22.055 22.055z" />
      <path d="M26.364 35.48l1.819-6.848 4.306-1.573 1.07-4.025-.036-.1-4.238 1.549 3.054-11.5h-8.661L19.684 27.99l-3.334 1.218-1.102 4.15 3.332-1.218-2.354 8.844h23.05l1.477-5.504H26.364z" />
    </g>
    <defs>
      <clipPath id="icon-currency-LTC_svg__clip0">
        <path fill="currentColor" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyLtc = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);
