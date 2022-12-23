import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
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
      d="M9.8 7.03a10.891 10.891 0 0112.4 0m2.77 2.77a10.89 10.89 0 010 12.4M7.03 9.8a10.891 10.891 0 000 12.4m2.77 2.769a10.892 10.892 0 0012.4 0M11.967 10.167a7.096 7.096 0 018.066 0m1.8 1.8a7.095 7.095 0 010 8.065m-11.665-8.065a7.095 7.095 0 000 8.065m1.8 1.8a7.096 7.096 0 008.065 0m.338-9.946l-.257-.257a1.09 1.09 0 01-.128-1.391l2.583-3.74a.545.545 0 01.83-.07l2.176 2.176a.546.546 0 01-.07.83l-3.74 2.583a1.09 1.09 0 01-1.394-.131zm-8.485 8.484l-.257-.257a1.09 1.09 0 00-1.39-.127l-3.74 2.582a.545.545 0 00-.07.831l2.175 2.175a.546.546 0 00.83-.07l2.583-3.739a1.091 1.091 0 00-.13-1.395zm8.228 0l.257-.257a1.09 1.09 0 011.39-.127l3.74 2.582a.544.544 0 01.07.831l-2.175 2.175a.546.546 0 01-.83-.07l-2.583-3.739a1.09 1.09 0 01.13-1.395zm-8.485-8.484l.257-.257a1.09 1.09 0 00.128-1.391L9.43 6.498a.545.545 0 00-.83-.07L6.424 8.604a.545.545 0 00.07.83l3.74 2.583a1.09 1.09 0 001.394-.131z"
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
const OtherLifebuoy =
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
export default OtherLifebuoy;
