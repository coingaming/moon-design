import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.654 12.877l-1.06-.536.518-1.097 1.06.536-.518 1.097zm-2.489 5.266l-1.06-.536.518-1.097 1.06.536-.518 1.097zm-5.95-4.37h.001l1.433.725-3.27-.453.46-.97 1.376.697zm-3.939-4.17l1.06.537-.519 1.097-1.06-.537.52-1.098zm3.55-4.73l-.519 1.098-1.06-.536.518-1.098 1.06.537zm6.265 4.532l-1.06-.536.518-1.097 1.06.536-.518 1.097zm.037 4.37l-1.06-.537.518-1.097 1.06.536-.518 1.097zm-1.89 1.218l.518-1.098 1.06.538-.518 1.097-1.06-.537zm-2.874-2.814l1.06.536-.518 1.097-1.061-.536.52-1.097zm-2.332-1.181l-.519 1.098-1.06-.538.519-1.097 1.06.537zm-.23-2.292l1.06.537-.52 1.097-1.058-.536.518-1.098zm-1.696-.858l1.06.536-.519 1.097-1.06-.536.52-1.097zm1.371-.121l-1.06-.538.518-1.097 1.06.537-.518 1.098zm2.214-.24l-.518 1.097-1.06-.536.519-1.097 1.06.536zm2.874 2.815l-1.06-.537.519-1.098 1.06.538-.52 1.097zm1.697.859l-1.06-.538.518-1.097 1.06.538-.518 1.097zm-3.068-.738l1.06.537-.519 1.098-1.06-.538.52-1.097zM9.81 8.907l.518-1.097 1.06.536-.518 1.097-1.06-.536zm.749 1.195l-.519 1.097-1.06-.537.52-1.098 1.059.538zm2.874 2.814l-1.06-.537.519-1.097 1.06.536-.52 1.098zm-.83 1.755l-1.06-.536.519-1.098 1.06.537-.52 1.097zm1.312-7.222l-.52 1.097-1.06-.536.52-1.097 1.06.536zm-1.697-.859l-.519 1.098-1.06-.537.52-1.097 1.06.536zm-1.696-.857l-.518 1.097-1.06-.538.519-1.097 1.059.538zm-2.372 6.684l.52-1.097 1.059.536-.518 1.098-1.06-.537zm.811 2.586l3.27.454-.458.969-2.812-1.423zm3.448 1.745l.52-1.097 1.059.536-.519 1.097-1.06-.536zm3.587-.36l-1.06-.537.518-1.097 1.06.537-.518 1.098zm.83-1.755l-1.06-.536.518-1.098 1.06.537-.518 1.097zm-.349-3.71l-.518 1.097-1.06-.538.518-1.096 1.06.536zm2.326.36l-3.074-1.556.674-1.426a.376.376 0 00-.164-.49l-3.39-1.717h-.002l-1.694-.858h-.001l-.001-.002L8.077 3.68l.544-1.152a.374.374 0 00-.163-.49.35.35 0 00-.473.169l-.7 1.48-2.49 5.265-.83 1.756v.001l-2.93 6.197a.373.373 0 00.164.49.34.34 0 00.155.037.352.352 0 00.318-.205l2.775-5.869 2.755 1.395-.674 1.427c-.008.017-.01.038-.015.057-.005.019-.015.034-.018.055 0 .004.002.008.001.012-.002.025.002.05.005.074.002.024.002.048.01.07v.011c.002.005.008.006.01.01.03.083.087.152.164.193.003.002.003.006.006.007l5.087 2.576h.001l3.393 1.718c.05.024.102.037.154.037a.354.354 0 00.32-.206l.828-1.755.83-1.755v-.001l.83-1.754.001-.002.83-1.754a.373.373 0 00-.163-.49z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportsMotorSports = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default IconSportsMotorSports;
