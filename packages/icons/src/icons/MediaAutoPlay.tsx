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
      d="M21.775 4.164a.5.5 0 00-.967.255l.967-.255zm.895 5.35l.1.49a.5.5 0 00.384-.617l-.484.127zm-5.064.514a.5.5 0 00.198.98l-.198-.98zm8.714 6.538a.5.5 0 10-.998.05l.998-.05zM20.808 4.419l1.379 5.223.967-.255-1.38-5.223-.966.255zm1.763 4.605l-4.965 1.005.198.98 4.965-1.005-.198-.98zm-.187 15.253c-3.957 3.957-10.408 3.933-14.409-.068l-.707.707c4.385 4.386 11.47 4.422 15.824.068l-.707-.707zm-14.409-.068c-4-4-4.025-10.452-.068-14.41L7.2 9.094c-4.353 4.354-4.317 11.438.068 15.823l.707-.707zM7.907 9.8c3.958-3.956 10.409-3.932 14.41.069l.707-.707C18.638 4.775 11.554 4.739 7.2 9.093l.707.707zm17.415 6.817a10.07 10.07 0 01-2.938 7.661l.708.707a11.07 11.07 0 003.229-8.418l-1 .05z"
      fill="currentColor"
    />
    <path
      d="M11.903 20.892v-7.354c0-.846.949-1.346 1.646-.866l5.473 3.762a1.05 1.05 0 01-.02 1.745l-5.471 3.591a1.051 1.051 0 01-1.628-.878z"
      stroke="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaAutoPlay =
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
export default MediaAutoPlay;
