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
      d="M14 2a5 5 0 00-5 5v6.154c0 .33-.183.699-.553.996C6.123 16.009 5 18.765 5 22a1 1 0 001 1h9v6a1 1 0 102 0v-6h9a1 1 0 001-1c0-3.235-1.123-5.991-3.447-7.85-.37-.297-.553-.667-.553-.996V7a5 5 0 00-5-5h-4zm10.957 19c-.203-2.273-1.114-4.057-2.653-5.289-.726-.58-1.304-1.482-1.304-2.557V7a3 3 0 00-3-3h-4a3 3 0 00-3 3v6.154c0 1.075-.579 1.977-1.304 2.557-1.54 1.232-2.45 3.016-2.653 5.289h17.914z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconPin =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
  ]);
export default IconPin;
