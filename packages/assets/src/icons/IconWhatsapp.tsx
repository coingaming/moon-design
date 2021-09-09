import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 49 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.085 44c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
      fill="#15CA4F"
    />
    <path
      d="M34.013 28.857c-.123-.222-.45-.354-.944-.62-.492-.265-2.912-1.548-3.364-1.724-.45-.177-.778-.266-1.107.265-.328.53-1.272 1.725-1.559 2.079-.286.353-.574.397-1.066.131-.492-.265-2.078-.824-3.958-2.63-1.462-1.406-2.45-3.142-2.737-3.673-.287-.53-.03-.817.215-1.081.222-.237.492-.619.739-.93.25-.306.331-.527.497-.882.163-.354.082-.664-.042-.93-.124-.264-1.108-2.873-1.517-3.934-.4-1.033-.806-.894-1.108-.91L17.12 14c-.328 0-.861.132-1.312.664-.45.531-1.722 1.812-1.722 4.421 0 2.61 1.763 5.13 2.009 5.483.246.354 3.469 5.708 8.405 8.004 1.174.546 2.092.872 2.805 1.116 1.18.404 2.252.346 3.1.211.946-.152 2.911-1.282 3.322-2.52.41-1.24.41-2.301.287-2.523z"
      fill="#fff"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconWhatsapp = styled(Svg)<IconProps>(
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
export default IconWhatsapp;
