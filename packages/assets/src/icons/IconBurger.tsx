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
      d="M2 15c0-.552.627-1 1.4-1h25.2c.773 0 1.4.448 1.4 1s-.627 1-1.4 1H3.4c-.773 0-1.4-.448-1.4-1zM3.11 6.022C6.96 5.44 11.31 5 16 5c4.641 0 9.023.29 12.958 1.033.747.141 1.193.689.995 1.223-.198.533-.964.852-1.711.71C24.617 7.282 20.493 7 16 7c-4.446 0-8.598.417-12.31.978-.756.114-1.5-.23-1.66-.771-.16-.54.324-1.071 1.08-1.185zM2.047 23.744c.198-.534.964-.852 1.711-.71C7.383 23.718 11.507 24 16 24c4.446 0 8.598-.417 12.31-.978.756-.114 1.5.23 1.66.771.16.54-.324 1.071-1.08 1.185C25.04 25.56 20.69 26 16 26c-4.641 0-9.023-.29-12.958-1.033-.747-.141-1.193-.689-.995-1.223z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconBurger = styled(Svg)<IconProps>(
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
export default IconBurger;
