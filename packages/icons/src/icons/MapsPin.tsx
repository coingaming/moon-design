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
      d="M15.5 25.5a.5.5 0 101 0h-1zm1-5.115a.5.5 0 00-1 0h1zm7 0v.5a.5.5 0 00.5-.5h-.5zm-15 0H8a.5.5 0 00.5.5v-.5zm3-6.465h.5-.5zm0-4.497H11h.5zm-.697 5.795l-.307-.394.307.394zm10.393 0l.308-.394-.308.394zM16.5 25.5v-5.115h-1V25.5h1zm7-5.615h-15v1h15v-1zM14.5 7h3V6h-3v1zM20 9.423v4.497h1V9.423h-1zm-8 4.497V9.423h-1v4.497h1zM17.5 7C18.893 7 20 8.097 20 9.423h1C21 7.52 19.42 6 17.5 6v1zm-3-1C12.58 6 11 7.52 11 9.423h1C12 8.097 13.107 7 14.5 7V6zm-4.004 8.824C8.823 16.13 8 18.072 8 20.384h1c0-2.062.723-3.689 2.11-4.771l-.614-.789zm10.393.789C22.277 16.695 23 18.322 23 20.385h1c0-2.314-.823-4.256-2.496-5.56l-.615.788zM11 13.92c0 .322-.181.652-.504.904l.615.789c.5-.39.889-.988.889-1.693h-1zm9 0c0 .705.39 1.303.89 1.693l.614-.789c-.323-.252-.504-.582-.504-.904h-1z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MapsPin =
  styled(Svg) <
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
export default MapsPin;
