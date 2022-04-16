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
      d="M20.783 3l.475.155a.5.5 0 00-.84-.498l.365.343zM17.13 14.238l-.475-.155a.5.5 0 00.475.655v-.5zm7.87 0l.366.34a.5.5 0 00-.366-.84v.5zM11.217 29l-.473-.16a.5.5 0 00.839.501L11.217 29zm3.952-10.166a.5.5 0 00-.947-.319l.947.32zM6 18.674l-.364-.342a.5.5 0 00.364.843v-.5zm5.957.5a.5.5 0 100-1v1zm8.35-16.329l-3.652 11.238.951.31 3.652-11.238-.95-.31zM17.13 14.738H25v-1h-7.87v1zm7.505-.842L10.851 28.66l.73.682L25.367 14.58l-.732-.683zM11.69 29.16l3.478-10.326-.947-.319-3.478 10.325.947.32zM20.42 2.657L5.636 18.332l.728.686L21.146 3.343l-.727-.686zM6 19.175h5.957v-1H6v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericLightningBolt =
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
export default GenericLightningBolt;
