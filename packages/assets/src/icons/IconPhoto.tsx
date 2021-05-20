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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 12a6 6 0 100 12 6 6 0 000-12zm-4 6a4 4 0 118 0 4 4 0 01-8 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 25V12.708C30 10.108 27.892 8 25.292 8a2.708 2.708 0 01-2.423-1.497L22 4.763A5 5 0 0017.528 2h-3.056A5 5 0 0010 4.764l-.87 1.739A2.708 2.708 0 016.708 8 4.708 4.708 0 002 12.708V25a5 5 0 005 5h18a5 5 0 005-5zm-2-12.292V25a3 3 0 01-3 3H7a3 3 0 01-3-3V12.708A2.708 2.708 0 016.708 10a4.708 4.708 0 004.211-2.603l.87-1.739A3 3 0 0114.472 4h3.056a3 3 0 012.683 1.658l.87 1.74A4.708 4.708 0 0025.29 10 2.708 2.708 0 0128 12.708z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconPhoto = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
export default IconPhoto;
