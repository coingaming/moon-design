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
      d="M12.25 25a.5.5 0 000 1v-1zm7.5 1a.5.5 0 000-1v1zm.187-4.4l-.471-.167.471.167zm-7.874 0l-.472.167.472-.167zm6.687-4.87a.5.5 0 00-1 0h1zm-4.5 0a.5.5 0 00-1 0h1zm-2 9.27h7.5v-1h-7.5v1zM9 13.646C9 9.616 12.092 7 16 7V6c-4.376 0-8 2.984-8 7.646h1zM16 7c3.908 0 7 2.617 7 6.646h1C24 8.983 20.376 6 16 6v1zm7 6.646c0 1.476-.64 2.83-1.425 4.128-.401.665-.796 1.244-1.185 1.87-.373.598-.715 1.2-.924 1.79l.943.333c.17-.482.463-1.006.83-1.595.35-.562.798-1.23 1.192-1.88.807-1.334 1.569-2.885 1.569-4.647h-1zm-10.466 7.787c-.209-.59-.551-1.191-.924-1.79-.39-.625-.784-1.204-1.185-1.869C9.64 16.476 9 15.122 9 13.645H8c0 1.762.762 3.313 1.569 4.647.394.65.843 1.318 1.192 1.88.367.588.66 1.113.83 1.595l.943-.334zm6.216.644h-5.5v1h5.5v-1zm-7.159-.31c.225.635.817 1.31 1.659 1.31v-1c-.262 0-.572-.238-.716-.644l-.943.334zm7.875-.334c-.144.407-.454.644-.716.644v1c.842 0 1.434-.675 1.659-1.31l-.943-.334zm-1.716-4.702c0 .922-.771 1.692-1.75 1.692v1c1.506 0 2.75-1.193 2.75-2.692h-1zM16 18.423c-.979 0-1.75-.77-1.75-1.692h-1c0 1.499 1.243 2.692 2.75 2.692v-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericIdea =
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
export default GenericIdea;
