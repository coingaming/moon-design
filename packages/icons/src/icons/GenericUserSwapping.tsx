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
      d="M8.549 7.277a.5.5 0 10.675.738l-.675-.738zm13.789 18.342a.5.5 0 00-.577-.817l.577.817zm2.816-8.095a.5.5 0 00-.8.6l.8-.6zm1.6 2.966l-.4.3a.5.5 0 00.8 0l-.4-.3zm2.4-2.366a.5.5 0 00-.8-.6l.8.6zM6.846 16.007a.5.5 0 00.8-.6l-.8.6zm-1.6-2.967l.4-.3a.5.5 0 00-.8 0l.4.3zm-2.4 2.367a.5.5 0 10.8.6l-.8-.6zm6.488 5.57a.5.5 0 10.996.086l-.996-.086zm12.336.086a.5.5 0 10.996-.086l-.996.086zm.008-1.77l-.456.205.456-.205zm-11.357 0l-.456-.205.456.205zM16 26.638c-5.647 0-10.255-4.746-10.255-10.638h-1c0 6.41 5.023 11.638 11.255 11.638v-1zm0-21.277c5.647 0 10.254 4.747 10.254 10.639h1C27.254 9.589 22.232 4.36 16 4.36v1zM9.224 8.015c1.809-1.653 4.18-2.654 6.776-2.654v-1c-2.86 0-5.468 1.103-7.451 2.916l.675.738zM21.76 24.802A9.949 9.949 0 0116 26.638v1c2.35 0 4.534-.746 6.338-2.02l-.577-.816zM26.254 16v3.979h1v-3.98h-1zM5.745 16v-2.507h-1V16h1zm18.61 2.124l2 2.667.8-.6-2-2.667-.8.6zm2.8 2.667l2-2.667-.8-.6-2 2.666.8.6zm-19.51-5.384l-2-2.667-.8.6 2 2.667.8-.6zm-2.8-2.667l-2 2.667.8.6 2-2.667-.8-.6zm13.741.416A2.587 2.587 0 0116 15.742v1a3.587 3.587 0 003.586-3.586h-1zM16 15.742a2.587 2.587 0 01-2.587-2.586h-1A3.587 3.587 0 0016 16.742v-1zm-2.587-2.586A2.587 2.587 0 0116 10.569v-1a3.587 3.587 0 00-3.587 3.587h1zM16 10.569a2.586 2.586 0 012.586 2.587h1A3.586 3.586 0 0016 9.569v1zm5.222 8.929c.21.465.401 1.025.448 1.565l.996-.086c-.06-.698-.3-1.374-.532-1.889l-.912.41zM10.33 21.063c.046-.54.238-1.1.447-1.565l-.912-.41c-.231.515-.472 1.191-.531 1.89l.996.085zm9.685-3.263h-8.03v1h8.03v-1zm-9.238 1.698c.192-.428.656-.698 1.208-.698v-1c-.86 0-1.734.429-2.12 1.288l.912.41zm11.357-.41c-.385-.86-1.26-1.288-2.12-1.288v1c.553 0 1.016.27 1.208.698l.912-.41z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericUserSwapping =
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
export default GenericUserSwapping;
