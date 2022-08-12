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
      d="M6.265 14.91v11.44a1.21 1.21 0 001.215 1.089h17.43a.991.991 0 00.964-1.09V14.911m-19.609 0L4.288 5.22a.588.588 0 01.594-.66h22.626a.507.507 0 01.468.66l-2.102 9.69m-19.609 0h19.609m-14.707 7.08a1.634 1.634 0 001.634-1.633v-.545a1.634 1.634 0 10-3.268 0v.545a1.634 1.634 0 001.634 1.634zm0 0c.926 0 2.724.458 2.724 1.635v1.089m-2.724-2.723c-.926 0-2.723.457-2.723 1.634v1.089m7.08-6.536h1.63m-1.63 1.634h2.992m1.911 0h2.99m-11.16-7.626h7.08m-3.812 10.35h1.629M15.52 24.17h2.723m2.184 0h2.99"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityPassport =
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
export default SecurityPassport;
