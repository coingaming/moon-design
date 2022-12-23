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
      d="M15.5 13.537a.5.5 0 101 0h-1zm1-7.037a.5.5 0 10-1 0h1zm2.499 2.12a.5.5 0 10-.331.943l.331-.943zm-5.667.943a.5.5 0 10-.331-.943l.331.943zm3.168 3.974V6.5h-1v7.037h1zm7.5 3.519C24 21.44 20.421 25 16 25v1c4.968 0 9-4.002 9-8.944h-1zM16 25c-4.421 0-8-3.56-8-7.944H7C7 21.998 11.033 26 16 26v-1zm2.668-15.437C21.777 10.655 24 13.6 24 17.056h1c0-3.898-2.507-7.21-6.001-8.436l-.331.943zM8 17.056c0-3.457 2.223-6.4 5.332-7.493l-.331-.943C9.507 9.847 7 13.158 7 17.056h1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SoftwareShutdown =
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
export default SoftwareShutdown;
