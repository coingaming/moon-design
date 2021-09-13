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
      d="M20.22 20.273c2.274 0 4.143-.126 4.75-.532.284-.19.557-.703.528-1.065 0-2.346-3.925-2.346-3.925-2.346s0 0 0 0h-1.315c-.025 0-.05 0-.074.002-.373.013-3.418.151-3.5 1.174m6.703-6.284a2.12 2.12 0 01-2.11 2.13 2.12 2.12 0 01-2.112-2.13 2.12 2.12 0 012.111-2.13 2.12 2.12 0 012.111 2.13zm-6.936.138c0 1.856-1.491 3.36-3.33 3.36-1.84 0-3.331-1.504-3.331-3.36C9.79 9.505 11.28 8 13.12 8s3.331 1.505 3.331 3.36zm2.793 11.135c-.882.59-2.783 1.505-6.082 1.505-3.3 0-5.2-.916-6.083-1.505-.412-.276-.616-.784-.574-1.31.046-.577.206-1.154.39-1.654.36-.973 1.347-1.505 2.384-1.505h7.765c1.038 0 2.025.532 2.384 1.505.184.5.344 1.077.39 1.654.042.526-.162 1.034-.574 1.31z"
      stroke="currentColor"
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
const GenericUsers =
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
export default GenericUsers;
