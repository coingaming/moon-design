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
      d="M10.262 8.663a.4.4 0 00.493.63l-.493-.63zm10.983.63a.4.4 0 00.493-.63l-.493.63zM8.968 11.199a.4.4 0 10-.66-.452l.66.452zm14.725-.452a.4.4 0 00-.66.452l.66-.452zM9.852 22.037a.4.4 0 00.574.558l-.574-.557zm4.924-4.494l.287.279-.287-.279zm.965-5.49a.4.4 0 00-.8 0h.8zm6.158 10.54a.4.4 0 00.578-.553l-.578.553zm-4.277-5.052l-.29.276.29-.276zm-.155-5.489a.4.4 0 00-.8 0h.8zM24.514 16A8.514 8.514 0 0116 24.514v.8A9.314 9.314 0 0025.314 16h-.8zM16 24.514A8.514 8.514 0 017.486 16h-.8A9.314 9.314 0 0016 25.314v-.8zM10.755 9.293A8.476 8.476 0 0116 7.486v-.8a9.276 9.276 0 00-5.738 1.977l.493.63zM16 7.486c1.979 0 3.8.675 5.245 1.807l.493-.63A9.276 9.276 0 0016 6.686v.8zM7.486 16c0-1.782.547-3.434 1.482-4.8l-.66-.453A9.272 9.272 0 006.685 16h.8zm15.546-4.8a8.472 8.472 0 011.482 4.8h.8a9.272 9.272 0 00-1.621-5.253l-.66.452zM10.426 22.594l4.637-4.773-.574-.558-4.637 4.774.574.557zm5.315-6.445v-4.098h-.8v4.098h.8zm-.678 1.672a2.4 2.4 0 00.678-1.672h-.8a1.6 1.6 0 01-.452 1.114l.574.558zm7.414 4.218l-4.566-4.775-.578.552 4.566 4.776.578-.553zm-5.01-5.881v-4.107h-.8v4.107h.8zm.444 1.106a1.6 1.6 0 01-.444-1.106h-.8a2.4 2.4 0 00.666 1.658l.578-.552z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportOverwatch =
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
export default SportOverwatch;
