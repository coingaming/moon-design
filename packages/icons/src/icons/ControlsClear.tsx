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
    <mask id="ControlsClear_svg__a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.008 8h-10.45c-.783 0-1.567.3-2.194.8l-.157.15L4.73 14.9c-.314.3-.47.7-.47 1.1 0 .4.156.8.47 1.1l6.478 5.95.157.15c.627.55 1.41.8 2.194.8h10.398c1.829 0 3.292-1.4 3.292-3.15v-9.7C27.3 9.4 25.837 8 24.008 8z"
      />
    </mask>
    <path
      d="M15.27 12.639a.5.5 0 10-.69.723l.69-.723zm5.231 6.38a.5.5 0 00.69-.724l-.69.723zm-5.921-.724a.5.5 0 00.69.723l-.69-.723zm6.612-4.934a.5.5 0 00-.69-.723l.69.723zm-6.612 0l5.921 5.657.69-.723-5.92-5.657-.691.723zm.69 5.657l5.922-5.657-.69-.723-5.922 5.657.69.723zM11.365 8.8l-.623-.782-.036.028-.032.032.691.722zm-.157.15l.677.737.007-.007.008-.008-.692-.722zM4.73 14.9l-.677-.736-.007.006-.008.008.692.722zm0 2.2l-.692.723.008.007.007.007.677-.737zm6.478 5.95l.692-.723-.008-.007-.007-.006-.677.736zm.157.15l-.691.723.015.015.017.014.66-.752zm15.884-12.05l-1-.03v.03h1zM13.558 7c-1.034 0-2.033.392-2.817 1.018l1.247 1.564c.469-.374 1.037-.582 1.57-.582V7zm-2.885 1.078l-.157.15 1.383 1.444.157-.15-1.383-1.444zm-.142.135l-6.479 5.95 1.353 1.473 6.479-5.95-1.353-1.473zm-6.494 5.965A2.517 2.517 0 003.258 16h2c0-.139.054-.274.162-.377l-1.383-1.445zM3.258 16c0 .662.26 1.326.78 1.823l1.382-1.445A.517.517 0 015.258 16h-2zm.794 1.837l6.479 5.95 1.353-1.473-6.479-5.95-1.353 1.473zm6.464 5.936l.157.15 1.383-1.445-.157-.15-1.383 1.445zm.189.179c.831.729 1.858 1.048 2.854 1.048v-2c-.572 0-1.113-.181-1.535-.552l-1.32 1.504zM23.956 25c2.339 0 4.292-1.807 4.292-4.15h-2c0 1.157-.974 2.15-2.292 2.15v2zm4.292-4.15v-9.7h-2v9.7h2zm0-9.67C28.317 8.807 26.34 7 24.007 7v2c1.326 0 2.274.993 2.24 2.12l2 .06zM24.007 7h-10.45v2h10.45V7zm-10.45 18h10.398v-2H13.559v2z"
      fill="currentColor"
      mask="url(#ControlsClear_svg__a)"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ControlsClear =
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
export default ControlsClear;
