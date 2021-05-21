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
      d="M9.638 2.493a1 1 0 011.369-.355l5 2.938a1 1 0 01.328 1.411l-3 4.562a1 1 0 11-1.67-1.098l1.858-2.827C8.67 8.048 5 12.314 5 17.438c0 5.799 4.701 10.5 10.5 10.5S26 23.237 26 17.438c0-3.075-1.32-5.84-3.428-7.761a1 1 0 111.348-1.478A12.47 12.47 0 0128 17.438c0 6.903-5.596 12.5-12.5 12.5S3 24.34 3 17.438c0-5.855 4.025-10.77 9.458-12.128L9.993 3.862a1 1 0 01-.355-1.369z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconRefresh =
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
export default IconRefresh;
