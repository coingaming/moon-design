import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
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
      d="M21.639 24.843a48.743 48.743 0 01-.338 3.235c-.036.257-.346.37-.546.2l-1.485-1.247a.683.683 0 00-.842-.027l-1.855 1.364a.683.683 0 01-.807 0l-1.884-1.385a.683.683 0 00-.807 0l-1.884 1.385a.683.683 0 01-.807 0L8.53 27.004a.683.683 0 00-.842.027l-1.492 1.254c-.198.167-.507.057-.546-.197-1.07-6.846-.606-13.524-.107-17.569a1.861 1.861 0 011.67-1.618c.45-.047.907-.085 1.37-.118m4.707-.433h5.045m-5.045 3.957H24.05M13.29 16.264H24.05M7.675 19.82h2.142m-2.142-3.975h2.142m14.99-12.062c-3.09-.257-8.109-.469-12.403-.028-.877.09-1.564.76-1.67 1.619-.5 4.044-.963 10.722.106 17.568.04.254.348.364.547.197l1.492-1.254a.683.683 0 01.841-.027l1.856 1.364c.239.176.568.176.807 0l1.884-1.385a.683.683 0 01.807 0l1.883 1.386c.24.175.568.175.807 0l1.856-1.365a.683.683 0 01.841.027l1.485 1.248c.2.169.51.056.547-.2.842-6.01.47-13.02.07-17.43a1.905 1.905 0 00-1.756-1.72z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericMultiBet =
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
export default GenericMultiBet;
