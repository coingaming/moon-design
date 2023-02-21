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
      d="M6.5 15.5a.5.5 0 000 1v-1zm19 1a.5.5 0 000-1v1zm-9-10a.5.5 0 00-1 0h1zm-1 19a.5.5 0 001 0h-1zm7.308-9.5A6.808 6.808 0 0116 22.808v1A7.808 7.808 0 0023.808 16h-1zM16 22.808A6.808 6.808 0 019.192 16h-1A7.808 7.808 0 0016 23.808v-1zM9.192 16A6.808 6.808 0 0116 9.192v-1A7.808 7.808 0 008.192 16h1zM16 9.192A6.808 6.808 0 0122.808 16h1A7.808 7.808 0 0016 8.192v1zM6.5 16.5h2.192v-1H6.5v1zm16.808 0H25.5v-1h-2.192v1zM15.5 6.5v2.192h1V6.5h-1zm0 16.808V25.5h1v-2.192h-1zM17.692 16c0 .935-.757 1.692-1.692 1.692v1A2.692 2.692 0 0018.692 16h-1zM16 17.692A1.692 1.692 0 0114.308 16h-1A2.692 2.692 0 0016 18.692v-1zM14.308 16c0-.935.757-1.692 1.692-1.692v-1A2.692 2.692 0 0013.308 16h1zM16 14.308c.935 0 1.692.757 1.692 1.692h1A2.692 2.692 0 0016 13.308v1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MapsLocation =
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
export default MapsLocation;
