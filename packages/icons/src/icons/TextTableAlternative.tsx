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
      d="M17.344 6H14.55C9.53 6 7.322 6 6.468 8.859c-.176.588.304 1.141.917 1.141h17.23c.613 0 1.093-.553.917-1.141-.854-2.86-3.062-2.86-8.082-2.859h-.106zM17.344 26H14.55c-5.02 0-7.228 0-8.082-2.859-.176-.588.304-1.141.917-1.141h17.23c.613 0 1.093.553.917 1.141-.854 2.86-3.062 2.86-8.082 2.859h-.106z"
      stroke="#000"
    />
    <rect x={6} y={14} width={20} height={4} rx={1} stroke="#000" />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TextTableAlternative =
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
export default TextTableAlternative;
