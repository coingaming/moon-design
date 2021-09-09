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
      d="M14.005 14.068c0 .583-1.568 1.067-3.503 1.067-1.934 0-3.502-.467-3.502-1.067m7.005 0c0-.584-1.568-1.068-3.503-1.068C8.568 13 7 13.484 7 14.068m7.005 0v2.284c0 .584-1.568 1.068-3.503 1.068C8.568 17.42 7 16.953 7 16.352v-2.284m13.298-.321l3.054-7.132m-1.095 7.66l2.625-5.91M9.067 21.434l-.39 3.649m6.31-4.072l-.3 3.468m-7.719-.452c-.067.62.453 1.14 1.073 1.106l8.276-.536a4.022 4.022 0 002.145-.855l.368-.301a4.054 4.054 0 001.173-1.525l2.63-6.032a.896.896 0 00-.469-1.19l-2.01-.87a.884.884 0 00-1.173.452l-2.01 4.44c-.201.436-.47.838-.821 1.173a4.011 4.011 0 01-2.564 1.172l-5.495.302a1.02 1.02 0 00-.938.905l-.185 1.759z"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const SportIceHockey = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default SportIceHockey;
