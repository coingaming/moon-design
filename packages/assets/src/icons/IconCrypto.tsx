import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 37 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.7 14.42c-1.335 5.356-6.762 8.617-12.12 7.28C4.224 20.366.963 14.94 2.3 9.583 3.635 4.224 9.06.964 14.418 2.3c5.358 1.336 8.618 6.763 7.283 12.12z"
      fill="#F7931A"
    />
    <path
      d="M16.971 10.628c.23-1.47-.936-2.262-2.529-2.79l.517-1.992-1.261-.302-.504 1.94c-.331-.08-.672-.154-1.01-.229l.506-1.953L11.43 5l-.518 1.992c-.274-.06-.544-.12-.805-.182l.001-.006-1.74-.418-.335 1.296s.936.206.916.219c.511.122.604.447.588.705l-.588 2.27c.035.009.08.021.13.04l-.133-.031-.825 3.18c-.062.15-.22.373-.578.288.013.018-.917-.22-.917-.22L6 15.522l1.642.393c.305.074.604.15.9.223l-.523 2.016 1.26.302.517-1.994c.344.09.679.173 1.006.25l-.516 1.986 1.262.302.522-2.012c2.151.392 3.769.234 4.45-1.637.548-1.506-.028-2.375-1.16-2.942.825-.183 1.446-.704 1.611-1.78zm-2.882 3.887c-.39 1.506-3.028.692-3.883.487l.693-2.67c.855.205 3.597.612 3.19 2.183zm.39-3.909c-.356 1.37-2.551.675-3.263.504l.628-2.422c.712.17 3.006.49 2.635 1.918z"
      fill="#fff"
    />
    <circle cx={27} cy={12} r={10} fill="#7748FA" />
    <path
      d="M26.997 4l-.109.364v10.58l.11.107 4.997-2.903L26.997 4z"
      fill="#CFC1F7"
    />
    <path d="M26.998 4L22 12.148l4.998 2.903V4z" fill="#fff" />
    <path
      d="M26.999 15.981l-.061.074v3.768l.061.177 5-6.92-5 2.901z"
      fill="#CFC1F7"
    />
    <path d="M26.998 20v-4.019L22 13.08 26.998 20z" fill="#fff" />
    <path d="M26.997 15.051l4.998-2.903-4.998-2.232v5.135z" fill="#9781EE" />
    <path d="M22 12.148l4.998 2.903V9.916L22 12.148z" fill="#C9C1F7" />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCrypto =
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
export default IconCrypto;
