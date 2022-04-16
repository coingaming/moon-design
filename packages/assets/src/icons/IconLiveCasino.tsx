import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.02 5.55V1.486c0-.372-.192-.722-.51-.918a1 1 0 00-1.018-.044L13.46 1.88a1.093 1.093 0 00-.764-.306H9.6c-.296 0-.593.131-.805.371-.022.022-.022.044-.043.044L5.486.502A1.118 1.118 0 004.47.546a1.08 1.08 0 00-.51.918V5.44C1.798 5.965.8 8.303.8 10.379v6.927c0 1.267.912 2.294 2.057 2.294h16.286c1.124 0 2.057-1.027 2.057-2.294v-6.927c0-2.6-1.633-4.174-3.18-4.83zm-8.992.743c.19.262.509.415.848.415h2.566c.297 0 .551-.11.742-.306l3.308 1.595c.149.066.297.11.446.11-.743 2.01-1.845 3.692-3.33 5.003A9.91 9.91 0 0111 14.77c-3.499-1.594-5.026-4.61-5.704-6.685l.19-.066 3.542-1.726zm7.93-4.786l.022 5.529-3.414-1.661.233-2.425 3.16-1.443zM9.58 2.666h3.138v.021l-.254 2.885c0 .022-.021.022-.021.022H9.876c-.021 0-.021-.022-.021-.022l-.276-2.885v-.021zM8.54 3.08l.191 2.141L5.02 7.036v-5.55L8.54 3.08zm11.6 14.225c0 .655-.446 1.201-.997 1.201H2.857c-.551 0-.997-.546-.997-1.201v-6.927c0-1.508.636-3.168 1.972-3.737.319 1.836 1.633 6.905 6.935 9.221l.17.088.19-.066c.233-.065 5.429-1.77 7.274-8.893.954.656 1.718 1.77 1.718 3.387v6.927h.02z"
      fill="currentColor"
    />
    <path
      d="M11 9.789c.527 0 .954-.44.954-.983 0-.543-.427-.984-.954-.984-.527 0-.954.44-.954.984 0 .543.427.983.954.983zM11.318 11.078c-.488-.175-1.04.088-1.23.59-.17.503.085 1.07.573 1.268.487.174 1.039-.088 1.23-.59.19-.503-.085-1.071-.573-1.268z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconLiveCasino =
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
export default IconLiveCasino;
