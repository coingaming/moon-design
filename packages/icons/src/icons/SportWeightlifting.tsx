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
      d="M20.365 20.374s-2.966-4.62-9.823-1.307m2.657-1.01S11.226 14.236 6 16.018m3.276 7.735S8.013 24.964 7.019 27m1.663-2.269c7.323 4.446 17.244-.87 17.244-.87.743-10.109-4.356-17.166-4.356-17.166l-.073-.082s-1.1-1.666-5.827-1.612c0 0-2.347 1.14-1.914 3.751l.662.849 3.505-.383s.55-1.441.844-1.842m-.229.986c-.033-.027 1.63 1.18 1.82 2.731l.025.103c.16.835.346 2.087.168 2.645-.215.678-1.1 1.824-1.445 3.405"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportWeightlifting =
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
export default SportWeightlifting;
