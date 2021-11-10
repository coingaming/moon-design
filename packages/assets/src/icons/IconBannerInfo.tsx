import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={2} y={2} width={20} height={20} rx={10} fill="#1084F2" />
    <path
      d="M12.234 8.46c-.392 0-.667-.08-.826-.238a.825.825 0 01-.224-.588V7.34c0-.233.075-.43.224-.588.159-.159.43-.238.812-.238.392 0 .663.08.812.238a.799.799 0 01.238.588v.294c0 .233-.08.43-.238.588-.15.159-.415.238-.798.238zM9 15.768h2.464v-4.76H9V9.776h3.99v5.992h2.31V17H9v-1.232z"
      fill="#fff"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconBannerInfo =
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
export default IconBannerInfo;
