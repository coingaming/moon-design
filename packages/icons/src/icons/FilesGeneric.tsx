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
      d="M12.064 19.22a7.441 7.441 0 011.726-2.732l8.957-9.006a2.076 2.076 0 012.947 0v0a2.104 2.104 0 010 2.963l-8.956 9.006a7.388 7.388 0 01-2.717 1.736l-.97.352c-.832.302-1.638-.508-1.337-1.345l.35-.975z"
      stroke="currentColor"
    />
    <path
      transform="scale(.99725 1.00275) rotate(45 -.125 30.219)"
      stroke="currentColor"
      d="M0-.5h4.651"
    />
    <path
      d="M17.937 7H14.5c-3.771 0-5.657 0-6.828 1.172C6.5 9.343 6.5 11.229 6.5 15v3c0 3.771 0 5.657 1.172 6.828C8.843 26 10.729 26 14.5 26h2.896c3.771 0 5.657 0 6.828-1.172 1.172-1.171 1.172-3.057 1.172-6.828v-2"
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
const FilesGeneric =
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
export default FilesGeneric;
