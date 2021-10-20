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
      d="M5.007 15.972c0-3.633 3.153-6.983 7.57-7.772 4.419-.79 8.574 1.256 9.862 4.658"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M10.055 15.26S7.861 13.955 5 15.943m12.195-2.001s1.68-2.05 5.231-1.084m-5.231 1.083s-4.182-1.37-7.15 1.306m2.33-7.007s-2.97 1.452-2.323 6.975m2.34-6.96s3.412.241 4.78 5.634M12.136 6.3l-.053-.3"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M12.246 6.894L12.083 6m3.223 18.466L15.598 26"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <path
      d="M15.426 25.102l.172.897"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M13.544 15.136l1.244 6.587"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <path
      d="M27 16.2l-3.392 6.878H7.878m10.084-2.738h6.99M9.308 25.986l1.77-2.902m7.733-.025l1.66-2.703m4.554 5.63l-1.766-2.902"
      stroke="currentColor"
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
const TravelBeachChair =
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
export default TravelBeachChair;
