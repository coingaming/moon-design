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
      d="M15.6 30c-5.9 0-13.2 0-13.2-7.8C2.4 15 12.5 9.7 12.9 9.4c.5-.3 1.1-.1 1.3.4.3.5.1 1.1-.4 1.3-.1 0-9.5 5-9.5 11 0 5.4 4.2 5.8 11.2 5.8 7.1 0 12.1-.4 12.1-5.7 0-5.9-9.3-11-9.4-11-.5-.3-.7-.9-.4-1.4.3-.5.9-.7 1.4-.4.4.2 10.5 5.7 10.5 12.8-.1 7.8-8.2 7.8-14.1 7.8z"
      fill="currentColor"
    />
    <path
      d="M16.1 12.4c-2.1 0-4.2-1.6-5.4-4.2-.8-1.6-1.3-3.8-.3-5.1 1.2-1.5 2.8-1.1 3.9-.7.6.2 1.2.4 1.8.4.6 0 1.2-.2 1.8-.4 1.2-.3 2.7-.8 3.9.7 1 1.2.4 3.5-.3 5.1-1.2 2.6-3.2 4.2-5.4 4.2zM12.5 4c-.3 0-.4.1-.6.3-.2.2-.2 1.4.6 3 .7 1.5 2.1 3 3.6 3 1.6 0 2.9-1.6 3.6-3 .8-1.6.7-2.8.6-3-.3-.4-.6-.4-1.8 0-.7.2-1.5.4-2.4.4-.9 0-1.7-.2-2.4-.4-.6-.2-.9-.3-1.2-.3z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconMoneybag = styled(Svg)<IconProps>(
  ({
    backgroundColor, circleColor, color, theme,
  }) => [
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
  ],
);
export default IconMoneybag;
