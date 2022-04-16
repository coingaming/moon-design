import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.348 9.063l.756-1.44 1.218 1.33m5.467.11l-.716-1.52-1.351 1.565m-7.037 4.637h10.63m-.26 1.88l1.527-7.303c.221-.094.415-.238.567-.42.151-.182.256-.397.304-.626.196-.816-.238-1.653-.967-1.872-.729-.22-1.48.262-1.676 1.078a1.655 1.655 0 00.287 1.386l-2.713 2.773-1.614-3.475c.191-.154.345-.348.449-.568.103-.22.154-.46.149-.702 0-.837-.613-1.521-1.368-1.521-.755 0-1.368.684-1.368 1.527-.005.242.046.482.15.702.103.22.257.415.448.568l-1.614 3.476-2.713-2.78a1.655 1.655 0 00.287-1.392c-.196-.817-.946-1.3-1.676-1.082-.73.218-1.163 1.062-.967 1.878.048.23.152.445.304.627.151.182.346.326.567.42l1.528 7.303h10.109v.003z"
      stroke="#8697A2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconClubhouseGames =
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
export default IconClubhouseGames;
