import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 20 20"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.996 1.802c2.67 0 2.984.012 4.04.06.976.044 1.504.206 1.857.345.468.183.802.397 1.15.747.35.349.568.682.747 1.15.135.354.301.882.345 1.859.048 1.056.06 1.37.06 4.041 0 2.672-.012 2.985-.06 4.041-.044.977-.206 1.505-.345 1.858a3.106 3.106 0 01-.746 1.151c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.048-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.206-1.857-.345a3.103 3.103 0 01-1.15-.747 3.055 3.055 0 01-.747-1.15c-.135-.354-.301-.882-.345-1.859-.047-1.056-.06-1.37-.06-4.041 0-2.672.013-2.985.06-4.041.044-.977.206-1.505.345-1.858.183-.469.397-.802.746-1.151.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.052 1.373-.06 4.04-.06zm0-1.802C7.282 0 6.94.012 5.873.06 4.81.107 4.083.278 3.448.524c-.658.254-1.214.6-1.77 1.155A4.96 4.96 0 00.525 3.45C.278 4.086.107 4.812.06 5.88.012 6.943 0 7.285 0 10c0 2.715.012 3.057.06 4.125.047 1.064.218 1.79.464 2.43.254.658.599 1.214 1.155 1.77a4.959 4.959 0 001.77 1.155c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.055-.012 4.123-.06c1.064-.047 1.79-.218 2.429-.464a4.873 4.873 0 001.77-1.155 4.96 4.96 0 001.154-1.77c.246-.636.417-1.362.464-2.43.048-1.068.06-1.406.06-4.125 0-2.72-.012-3.057-.06-4.125-.047-1.064-.218-1.79-.464-2.43a4.874 4.874 0 00-1.155-1.77A4.959 4.959 0 0016.552.52c-.634-.246-1.36-.417-2.428-.464C13.052.012 12.71 0 9.996 0z"
    />
    <path
      fill="currentColor"
      d="M9.996 4.867a5.137 5.137 0 00-5.135 5.137 5.134 5.134 0 1010.27 0 5.134 5.134 0 00-5.135-5.137zm0 8.468A3.334 3.334 0 016.663 10a3.334 3.334 0 116.667 0 3.334 3.334 0 01-3.334 3.335zM15.333 5.86a1.199 1.199 0 100-2.398 1.199 1.199 0 000 2.398z"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconInstagram =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
IconInstagram.defaultProps = {
  color: 'bulma.100',
};
export default IconInstagram;
