import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.75 8.609l-1.073-.322a.439.439 0 00.266-.116l2.682-2.682a.43.43 0 00.115-.265l.322 1.074-2.311 2.31zm-7.036 3.716l-2.91 2.908-1.038-1.038 2.91-2.909a.591.591 0 01.815 0l.223.222a.576.576 0 010 .817zm-4.36 3.544l-.223-.223a.58.58 0 010-.817l.012-.011 1.038 1.039-.011.012a.58.58 0 01-.817 0zm9.349-13.932l1.072.323a.433.433 0 00-.264.114l-2.683 2.683a.44.44 0 00-.115.266l-.322-1.073 2.312-2.313zm.738 5.49l-1.293.047.527-.527a.44.44 0 00-.622-.622l-.527.526.047-1.293 2.439-2.438 1.94-.072-.072 1.94-2.439 2.438zm4.54-1.13l-1.15-3.834c0-.006-.006-.01-.009-.015a.43.43 0 00-.1-.169.455.455 0 00-.178-.106l-.007-.004-3.833-1.15a.437.437 0 00-.438.11l-2.684 2.684a.437.437 0 00-.11.438l1.074 3.58-2.672 2.672c-.565-.372-1.324-.336-1.82.16l-3.545 3.544c-.497.497-.532 1.255-.16 1.82l-2.22 2.221a.44.44 0 00.623.622l2.22-2.22c.242.16.51.267.79.267.372 0 .746-.142 1.031-.426l3.543-3.544c.497-.497.533-1.255.16-1.82l2.673-2.673 3.58 1.074a.436.436 0 00.438-.112l2.684-2.681a.441.441 0 00.11-.439z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportsDarts = styled(Svg)<IconProps>(
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
export default IconSportsDarts;
