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
      d="M16.145 3.621c0 1.012.789 1.914 1.914 1.914 1.011 0 1.914-.789 1.914-1.914 0-1.012-.79-1.914-1.914-1.914-1.016.113-1.915.902-1.915 1.914zM18.96 18.266c-.112-.227-.448-.336-.675-.227-.562.227-1.238.45-1.914.45-.45 0-.902-.114-1.238-.337-.227-.113-3.942-2.93-5.067-3.828.114-.113.227-.113.336-.226l3.606-3.715h2.93c.449 0 .902-.336.902-.903 0-.449-.336-.902-.902-.902h-.114L14.91 7.113s.227-.336.563-.789c.336-.45.449-.789.449-1.012 0-.902-.676-1.578-1.578-1.578h-3.828L6.91 1.258l.336-.336c.113-.113.113-.336-.113-.45-.227-.113-.336-.113-.45 0l-.335.45-.45-.336c-.113-.113-.336-.113-.336 0-.113.226-.113.336 0 .45l.45.335-.336.45c-.114.113-.114.335.113.448.113 0 .113.114.227.114.113 0 .226 0 .226-.114l.336-.449 2.93 2.254H7.254c-.902-.113-1.578.563-1.578 1.465 0 .563.336 1.125.789 1.352l4.504 3.379-2.14 2.253c-.227.227-.337.45-.337.676C5.668 11.055 2.63 8.691.824 7.34c-.226-.113-.562-.113-.676.114-.226.227-.113.45.114.676 1.914 1.46 14.191 10.7 14.418 10.922.562.336 1.125.562 1.8.562.903 0 1.688-.226 2.254-.562.227-.223.336-.45.227-.785zm-3.155-9.461h-1.688l.563-.903 1.125.903zm-5.18-1.692h2.59l-.902 1.352-1.688-1.352z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsSki =
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
export default IconSportsSki;
