import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 23"
    fill="none"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.85}
      d="M.693 20.383L15.87 4.581l1.733 1.804L2.426 22.188.693 20.383z"
      stroke="currentColor"
    />
    <path
      d="M19.017 6.376l-3.135-3.264c-.229-.238-.571-.268-.764-.066l-3.25 3.382c-.193.202-.164.558.064.797l3.135 3.264c.23.238.572.268.765.066l3.249-3.383c.194-.201.165-.558-.064-.796z"
      fill="currentColor"
    />
    <path
      opacity={0.85}
      d="M16.013.07a1.682 1.682 0 010 1.752.038.038 0 000 .052c.007.007.016.01.025.01.01 0 .019-.003.025-.01a1.493 1.493 0 011.683 0c.006.007.015.01.025.01.01 0 .018-.003.025-.01a.037.037 0 00.01-.026c0-.01-.004-.02-.01-.026a1.648 1.648 0 01.009-1.765.043.043 0 00.002-.03.038.038 0 00-.033-.027.037.037 0 00-.028.01 1.522 1.522 0 01-1.683 0 .038.038 0 00-.027-.01.037.037 0 00-.027.014.042.042 0 00-.009.029.04.04 0 00.013.027zM17.498 10.027c-.072.38-.25.728-.512 1-.262.274-.596.46-.96.537a.039.039 0 00-.019.014.041.041 0 000 .047.039.039 0 00.02.014c.363.076.697.263.959.536s.44.622.512 1a.04.04 0 00.014.02.037.037 0 00.045 0 .04.04 0 00.014-.02 1.99 1.99 0 01.515-1c.262-.272.596-.459.96-.536a.039.039 0 00.02-.014.042.042 0 000-.047.038.038 0 00-.02-.014 1.865 1.865 0 01-.96-.537 1.99 1.99 0 01-.515-1 .04.04 0 00-.014-.02.037.037 0 00-.045 0 .04.04 0 00-.014.02zM22.379 4.128a1.974 1.974 0 01-.514 1 1.849 1.849 0 01-.961.532.038.038 0 00-.02.015.041.041 0 000 .046.038.038 0 00.02.015c.364.076.698.262.96.536.263.273.442.621.515 1a.04.04 0 00.014.02.037.037 0 00.045 0 .04.04 0 00.014-.02c.074-.379.253-.726.515-1 .263-.272.597-.459.96-.536a.04.04 0 00.02-.015.041.041 0 000-.046.04.04 0 00-.02-.015 1.861 1.861 0 01-.953-.537 1.986 1.986 0 01-.51-.995.045.045 0 00-.013-.031.041.041 0 00-.06 0 .045.045 0 00-.012.031zM12.657 2.032a.976.976 0 01-.238.408.922.922 0 01-.396.24.035.035 0 00-.017.013.037.037 0 000 .042c.005.006.01.01.017.013.151.044.289.129.4.244a.97.97 0 01.234.416c0 .04.058.04.065 0a.978.978 0 01.236-.415c.11-.115.248-.2.398-.245a.035.035 0 00.017-.013.037.037 0 00-.017-.055.93.93 0 01-.397-.246.984.984 0 01-.237-.414c-.007-.028-.053-.028-.065.012z"
      fill="currentColor"
    />
    <path
      d="M17.361 7.128c.35 0 .634-.296.634-.66a.647.647 0 00-.634-.66.647.647 0 00-.633.66c0 .364.284.66.633.66z"
      fill="#fff"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconWand =
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
export default IconWand;
