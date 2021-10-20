import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.357 27a.5.5 0 001 0h-1zm1-1.443a.5.5 0 10-1 0h1zM20.643 27a.5.5 0 101 0h-1zm1-1.443a.5.5 0 10-1 0h1zm-2-3.105a.5.5 0 101 0h-1zm1-11.548a.5.5 0 10-1 0h1zm-8.286 11.548a.5.5 0 101 0h-1zm1-11.548a.5.5 0 10-1 0h1zM16 22.452a.5.5 0 001 0h-1zm1-11.548a.5.5 0 10-1 0h1zM12 4.5a.5.5 0 000 1v-1zm9 1a.5.5 0 000-1v1zM12.357 27v-1.443h-1V27h1zm9.286 0v-1.443h-1V27h1zm-1.5-4.548h.5V10.903h-1v11.549h.5zm-7.286 0h.5V10.903h-1v11.549h.5zm4.143 0V10.904h-1v11.548h1zm3.214-14.567V5.507h-1v2.378h1zm-7.428-2.378v2.378h1V5.507h-1zm-1.298 2.947h10.024v-1H11.488v1zm10.024 0c1.102 0 1.988.884 1.988 1.965h1c0-1.642-1.342-2.965-2.988-2.965v1zm1.988 1.965V22.8h1V10.42h-1zm0 12.38a1.977 1.977 0 01-1.988 1.966v1c1.646 0 2.988-1.323 2.988-2.965h-1zm-1.988 1.966H11.488v1h10.024v-1zm-10.024 0A1.977 1.977 0 019.5 22.8h-1c0 1.642 1.342 2.965 2.988 2.965v-1zM9.5 22.8V10.42h-1V22.8h1zm0-12.38c0-1.082.886-1.966 1.988-1.966v-1c-1.646 0-2.988 1.323-2.988 2.965h1zM12 5.5h9v-1h-9v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TravelSuitcase =
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
export default TravelSuitcase;
