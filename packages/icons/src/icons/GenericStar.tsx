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
      d="M14.8 6.886c.444-1.068 1.956-1.068 2.4 0l1.67 4.012a1.3 1.3 0 001.095.797l4.332.347c1.153.092 1.62 1.53.742 2.283l-3.3 2.827a1.3 1.3 0 00-.42 1.29l1.01 4.226c.267 1.125-.956 2.014-1.943 1.411l-3.708-2.265a1.3 1.3 0 00-1.356 0l-3.708 2.265c-.987.603-2.21-.286-1.942-1.411l1.008-4.227a1.3 1.3 0 00-.419-1.289l-3.3-2.827c-.878-.752-.41-2.19.742-2.283l4.331-.347a1.3 1.3 0 001.097-.797L14.8 6.886z"
      stroke="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const GenericStar = styled(Svg)<IconProps>(
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
export default GenericStar;
