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
      d="M9.84 8.122a.5.5 0 10.616.788l-.616-.788zm11.704.788a.5.5 0 10.616-.788l-.616.788zM8.566 10.925a.5.5 0 00-.825-.565l.825.565zm15.693-.565a.5.5 0 00-.825.565l.825-.565zM9.395 22.383a.5.5 0 00.717.697l-.717-.697zm5.3-4.738l.359.348-.359-.348zm1.103-5.852a.5.5 0 10-1 0h1zm6.436 11.284a.5.5 0 00.722-.691l-.722.691zm-4.506-5.435l-.361.346.361-.346zm-.09-5.85a.5.5 0 00-1 0h1zM25 16a9 9 0 01-9 9v1c5.523 0 10-4.477 10-10h-1zm-9 9a9 9 0 01-9-9H6c0 5.523 4.477 10 10 10v-1zM10.456 8.91A8.96 8.96 0 0116 7V6a9.96 9.96 0 00-6.16 2.122l.616.788zM16 7a8.96 8.96 0 015.544 1.91l.616-.788A9.959 9.959 0 0016 6v1zm-9 9c0-1.883.578-3.63 1.566-5.075l-.825-.565A9.956 9.956 0 006 16h1zm16.434-5.075A8.956 8.956 0 0125 16h1a9.956 9.956 0 00-1.74-5.64l-.826.565zM10.112 23.08l4.942-5.087-.717-.697-4.942 5.087.717.697zm5.686-6.92v-4.367h-1v4.366h1zm-.744 1.833a2.632 2.632 0 00.744-1.834h-1c0 .425-.166.833-.461 1.137l.717.697zm7.902 4.393l-4.866-5.09-.723.692 4.867 5.089.722-.691zm-5.319-6.217v-4.376h-1v4.376h1zm.453 1.128a1.631 1.631 0 01-.453-1.128h-1c0 .678.262 1.33.73 1.819l.723-.691z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportOverwatch =
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
export default SportOverwatch;
