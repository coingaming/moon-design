import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#icon_sports_greyhound_svg__clip0)">
      <path
        d="M13.573 4.741a.522.522 0 00.416-.61.523.523 0 00-.6-.43.522.522 0 00-.417.61c.05.287.32.48.6.43z"
        fill="currentColor"
      />
      <path
        d="M.773 4.078l1.321-.296a3.56 3.56 0 011.836.122c1.61.56 2.798 2.136 3.144 3.98l.42 2.244 9.79 1.086 1.413-.265c.34-.064.668.16.732.502v0a.628.628 0 01-.308.662l-1.829 1.033-3.745-.759-7.805.003s-.229-.298-1.926-2.367c-.944-1.15-1.622-1.64-3.026-1.4M10.667 6.006c.504.881 1.367.911 2.187.922 1.22.018 2.431-.086 3.62-.31l.658-.123c.295-.055.57-.19.793-.391l.428-.384a.618.618 0 00.195-.574v0a.618.618 0 00-.422-.475L15.26 3.77l-.328-.35c-.303-.325-.64-.624-1.05-.795a3.663 3.663 0 00-2.098-.24c-1.363.256-2.606.996-3.568 2.13M9.828 3.118l-5.286.99M11.122 6.758l-3.84 1.89"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M.868 11.736l3.77-.707 1.98 2.55 8.89 3.088 1.908-.648a.599.599 0 00.396-.677v0a.599.599 0 00-.657-.485l-1.653.19-5.724-2.63M8.221 4.514l1.398.045a5 5 0 001.7-.241l.14-.046"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="icon_sports_greyhound_svg__clip0">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportsGreyhound = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default IconSportsGreyhound;
