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
      d="M10.953 9.231a2.44 2.44 0 10-4.873.26 2.44 2.44 0 004.873-.26zM15.825 13.992a2.662 2.662 0 10-.52-5.298 2.662 2.662 0 00.52 5.298zM9.87 13.488l1.512 1.526c.199.217.449.35.748.38l2.89.289M18.671 14.476l5.089-4.861a1.083 1.083 0 011.503.03 1.069 1.069 0 01-.028 1.523l-4.406 4.182a1.195 1.195 0 00-.317 1.196l2.478 6.932m-6.099 0l-1.414-4.741a1.182 1.182 0 00-.987-.811l-3.111-.326a1.086 1.086 0 01-.705-.346l-2.691-2.55c-.308-.325-.355-.794-.195-1.185"
      stroke="#1A212A"
      strokeWidth={0.8}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.692 23.2v0a2.304 2.304 0 013.025-.136l.275.219a2.707 2.707 0 003.314.043l.218-.164a2.973 2.973 0 013.578 0l.195.147c.993.748 2.37.71 3.321-.09v0a2.666 2.666 0 013.376-.047l.12.094c.965.769 2.339.75 3.283-.046l.203-.17a2.28 2.28 0 012.935 0v0"
      stroke="#1A212A"
      strokeWidth={0.8}
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
const SportWaterpolo =
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
export default SportWaterpolo;
