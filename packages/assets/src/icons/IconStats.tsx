import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.33 16h2v4h-2v-4zm5-3h2v7h-2v-7zm7.358-5.726a.896.896 0 01-1.099.642.909.909 0 01-.635-1.111l.72-2.72-12.777 6.71L0 9.222l12.777-6.709-2.688-.728A.908.908 0 019.454.673a.903.903 0 01.418-.551.886.886 0 01.681-.09l4.782 1.295c.478.13.763.628.634 1.112l-1.28 4.835zM13.33 11h2v9h-2v-9z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconStats = styled(Svg)<IconProps>(
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
export default IconStats;
