import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.73 11.178C16.53 16 11.645 18.933 6.822 17.73A8.995 8.995 0 01.27 6.824C1.473 2.002 6.355-.934 11.177.27c4.82 1.203 7.756 6.085 6.553 10.908z"
      fill="#F7931A"
    />
    <path
      d="M12.976 7.824c.188-1.261-.766-1.939-2.069-2.391l.424-1.708-1.033-.259-.412 1.663c-.271-.068-.55-.133-.827-.196l.414-1.674L8.442 3 8.02 4.707l-2.082-.52-.275 1.111s.766.177.75.188c.418.105.494.384.48.605L5.737 10.77c-.052.128-.181.32-.473.246.01.015-.75-.19-.75-.19L4 12.019l2.079.53-.427 1.727 1.03.259.424-1.71c.282.078.555.149.822.216l-.422 1.701L8.54 15l.427-1.725c1.76.336 3.084.2 3.64-1.402.449-1.29-.022-2.036-.948-2.521.674-.158 1.182-.604 1.318-1.528zm-2.359 3.331c-.32 1.291-2.477.594-3.177.418l.567-2.289c.7.176 2.943.525 2.61 1.871zm.32-3.35c-.29 1.175-2.087.579-2.67.432l.514-2.076c.583.146 2.46.42 2.156 1.644"
      fill="#fff"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconBtc =
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
export default IconBtc;
