import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.705 6.337l2.839 2.767a.542.542 0 01.155.48l-.67 3.906 3.508-1.845a.542.542 0 01.505 0l3.508 1.845-.67-3.907a.542.542 0 01.155-.479l2.839-2.767-3.923-.57a.54.54 0 01-.407-.296L7.79 1.917 6.035 5.47a.54.54 0 01-.408.296l-3.922.57zm10.564 8.684a.545.545 0 01-.252-.062L7.79 12.736 3.562 14.96a.543.543 0 01-.786-.57l.808-4.708-3.42-3.334a.54.54 0 01.3-.924l4.726-.687L7.304.453a.542.542 0 01.971 0l2.114 4.283 4.726.687a.54.54 0 01.3.924l-3.42 3.334.807 4.707a.541.541 0 01-.533.633z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsFeatured =
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
export default IconSportsFeatured;
