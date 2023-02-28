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
      d="M3.093 10.439s8.436.427 8.847.427c1.678 0 3.949.34 4.06 1.915m0 0v5.853m0-5.854c.111-1.574 2.382-1.914 4.06-1.914.41 0 8.847-.427 8.847-.427M16 18.634c0 1.17-2.1 1.34-2.94.773-.838-.568-2.722-1.71-2.997-1.99-.182-.516-.241-1.411-.352-2.278.81.44 2.018.252 2.516.252.153.252.505.527.675.703M16 18.634c0 1.17 2.1 1.34 2.94.773.838-.568 2.722-1.71 2.997-1.99.182-.516.241-1.411.352-2.278-.81.44-2.018.252-2.517.252-.152.252-.504.527-.674.703m-6.19-1.534l-.686.825m1.073 4.162c.323.715-.053 3.29-2.194 2.424-1.396-.568-1.678-.855-3.632-1.423-1.373-.398-1.719-.93-2.558-1.78-.839-.854-1.414-1.884-2.411-1.884m16.592-2.324l.686.825m-1.073 4.162c-.323.715.053 3.29 2.194 2.424 1.396-.568 1.678-.855 3.632-1.423 1.373-.398 1.719-.93 2.558-1.78.839-.854 1.414-1.884 2.411-1.884M11.306 5.17l1.76 2.341m7.628-2.341l-1.76 2.341m-2.934 0V4m-4.694 22.83l1.76-2.342m7.628 2.341l-1.76-2.341m-2.934 0V28"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportKabaddi =
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
export default SportKabaddi;
