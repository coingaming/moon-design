import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 30 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.33 11.51a1.103 1.103 0 00-.039-.04l-9.257-9.274a.7.7 0 01.992-.99l9.257 9.274c.957.957.956 2.51-.002 3.466l-9.27 9.27a.7.7 0 11-.99-.992l9.27-9.269.042-.044H15.067c-6.975 0-12.637 5.64-12.666 12.614A.7.7 0 111 25.52c.032-7.747 6.32-14.01 14.067-14.01H27.33z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.8}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconForward = styled(Svg)<IconProps>(
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
export default IconForward;
