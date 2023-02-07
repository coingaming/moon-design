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
      d="M3.64 10.768C7.298 7.718 11.52 6 16 6c4.48 0 8.703 1.718 12.36 4.768a1 1 0 001.28-1.536C25.683 5.93 21.017 4 16 4S6.318 5.93 2.36 9.232a1 1 0 101.28 1.536z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.016 12.84C8.38 10.844 11.726 9 15.5 9c3.773 0 7.12 1.844 9.484 3.84 1.19 1.004 2.161 2.072 2.845 3.02.341.474.621.932.82 1.35.186.392.351.85.351 1.29 0 .44-.165.898-.35 1.29a8.931 8.931 0 01-.821 1.35c-.684.948-1.656 2.016-2.845 3.02C22.62 26.156 19.274 28 15.5 28s-7.12-1.844-9.484-3.84c-1.19-1.004-2.161-2.072-2.845-3.02a8.929 8.929 0 01-.82-1.35C2.165 19.397 2 18.94 2 18.5c0-.44.165-.898.35-1.29.2-.418.48-.876.821-1.35.684-.948 1.656-2.016 2.845-3.02zM4 18.5v.003c.004.021.028.156.157.427.134.282.345.636.637 1.04.581.807 1.44 1.756 2.512 2.662C9.466 24.455 12.37 26 15.5 26c3.13 0 6.034-1.545 8.194-3.368 1.072-.906 1.93-1.855 2.512-2.662a6.97 6.97 0 00.637-1.04c.13-.271.153-.406.156-.427v-.006a1.713 1.713 0 00-.156-.427 6.97 6.97 0 00-.637-1.04c-.581-.807-1.44-1.756-2.512-2.662a16.515 16.515 0 00-2.313-1.64 6.5 6.5 0 11-11.763 0 16.514 16.514 0 00-2.312 1.64c-1.072.906-1.93 1.855-2.512 2.662a6.969 6.969 0 00-.637 1.04c-.13.271-.153.406-.156.427v.003zm7-3a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconEye =
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
export default IconEye;
