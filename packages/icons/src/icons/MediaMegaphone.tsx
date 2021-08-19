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
      d="M8.456 13.096l.214.452-.214-.452zm0 5.808l-.214.452.214-.452zm11.95-10.381l-.274-.419.274.419zm0 14.955l.273-.419-.273.419zm-10.54.082l.498-.058-.497.058zM8 17.394v-2.787H7v2.787h1zm1.17-3.958h4.186v-1H9.171v1zm4.186 5.129H9.171v1h4.185v-1zM8.67 13.548c.157-.074.328-.112.5-.112v-1a2.17 2.17 0 00-.928.208l.428.904zM7 17.394c0 .84.484 1.603 1.242 1.962l.428-.904A1.17 1.17 0 018 17.394H7zm2.17 1.17a1.17 1.17 0 01-.5-.112l-.428.904c.29.137.608.209.929.209v-1zM8 14.608c0-.453.26-.865.67-1.059l-.428-.904A2.17 2.17 0 007 14.607h1zm6.177-1.416l6.502-4.25-.547-.837-6.502 4.25.547.837zM23 10.197v11.607h1V10.197h-1zm-2.32 12.862l-6.503-4.25-.547.837 6.502 4.25.547-.837zM23 21.804c0 1.192-1.323 1.907-2.32 1.255l-.548.837C21.795 24.983 24 23.79 24 21.804h-1zM20.68 8.94c.997-.652 2.32.064 2.32 1.256h1c0-1.987-2.205-3.18-3.868-2.093l.547.837zm-8.141 10.124v4.312h1v-4.312h-1zm-2.175 4.437l-.521-4.495-.994.115.521 4.495.994-.115zm1.083.966c-.554 0-1.02-.415-1.083-.966l-.994.116a2.091 2.091 0 002.077 1.85v-1zm1.092-1.091c0 .603-.489 1.091-1.092 1.091v1a2.091 2.091 0 002.092-2.091h-1zm.817-3.812a.5.5 0 01.274.081l.547-.837a1.5 1.5 0 00-.821-.244v1zm0-6.13a1.5 1.5 0 00.82-.244l-.546-.837a.5.5 0 01-.274.082v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaMegaphone =
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
export default MediaMegaphone;
