import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.265 15.91v11.44a1.21 1.21 0 001.215 1.088h17.43a.991.991 0 00.964-1.089V15.911m-19.609 0h19.609m-19.609 0l-.357-1.756m19.966 1.756l1.116-8.75a.506.506 0 00-.468-.659H11.778m.39 16.49a1.634 1.634 0 001.634-1.635v-.544a1.634 1.634 0 00-3.268 0v.544a1.634 1.634 0 001.634 1.634zm0 0c.926 0 2.723.457 2.723 1.633v1.09m-2.723-2.724c-.926 0-2.724.458-2.724 1.634v1.09m7.081-6.536h1.63m-1.63 1.634h2.99m1.912 0h2.991m-11.161-7.626h7.08m-3.812 10.35h1.63M16.52 25.17h2.724m2.183 0h2.991"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M5.242 13.622l.211-.359-.211.359zm2.757 0l-.211-.359.211.359zm-.962-8.379a.417.417 0 00-.833 0h.833zm-.833 3.334a.417.417 0 10.833 0h-.833zm.833 1.65a.417.417 0 00-.833 0h.833zm-.833.641a.417.417 0 00.833 0h-.833zM4.12 2.848h5v-.834h-5v.834zm7.083 2.083v3.325h.833V4.931h-.833zM2.037 8.256V4.931h-.833v3.325h.833zm3.416 5.007c-2.006-1.184-3.416-2.966-3.416-5.007h-.833c0 2.452 1.685 4.461 3.826 5.725l.423-.718zm5.75-5.007c0 2.041-1.409 3.823-3.415 5.007l.423.718c2.141-1.264 3.826-3.273 3.826-5.725h-.833zM5.03 13.981c.98.578 2.2.578 3.181 0l-.423-.718a2.299 2.299 0 01-2.335 0l-.423.718zM9.12 2.848c1.151 0 2.084.932 2.084 2.083h.833a2.917 2.917 0 00-2.916-2.917v.834zm-5-.834a2.917 2.917 0 00-2.916 2.917h.833c0-1.15.933-2.083 2.084-2.083v-.834zm2.084 3.23v3.333h.833V5.243h-.833zm0 4.982v.642h.833v-.642h-.833z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityPassportAlert =
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
export default SecurityPassportAlert;
