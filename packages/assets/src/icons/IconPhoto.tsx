import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 10a6 6 0 100 12 6 6 0 000-12zm-4 6a4 4 0 118 0 4 4 0 01-8 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 23V10.708C28 8.108 25.892 6 23.292 6a2.708 2.708 0 01-2.423-1.497L20 2.763A5 5 0 0015.528 0h-3.056A5 5 0 008 2.764l-.87 1.739A2.708 2.708 0 014.708 6 4.708 4.708 0 000 10.708V23a5 5 0 005 5h18a5 5 0 005-5zm-2-12.292V23a3 3 0 01-3 3H5a3 3 0 01-3-3V10.708A2.708 2.708 0 014.708 8 4.708 4.708 0 008.92 5.397l.87-1.739A3 3 0 0112.472 2h3.056a3 3 0 012.683 1.658l.87 1.74A4.708 4.708 0 0023.29 8 2.708 2.708 0 0126 10.708z"
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
