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
      d="M12.008 5.747a4 4 0 017.984 0c.147.057.292.117.435.18a4 4 0 015.646 5.646c.063.143.123.288.18.435a4 4 0 010 7.984c-.057.147-.117.292-.18.435a4 4 0 01-5.646 5.646c-.143.063-.288.123-.435.18a4 4 0 01-7.984 0 10.913 10.913 0 01-.435-.18 4 4 0 01-5.646-5.646 10.898 10.898 0 01-.18-.435 4 4 0 010-7.984c.057-.147.117-.291.18-.435a4 4 0 015.646-5.646c.143-.063.288-.123.435-.18zm-4.493 4.596a1.65 1.65 0 01.32 1.864c-.106.23-.203.464-.29.703A1.65 1.65 0 016 14a2 2 0 100 4 1.65 1.65 0 011.544 1.09c.088.24.185.474.291.703a1.65 1.65 0 01-.32 1.864 2 2 0 102.828 2.828 1.65 1.65 0 011.864-.32c.23.106.464.203.703.29A1.65 1.65 0 0114 26a2 2 0 104 0 1.65 1.65 0 011.09-1.544c.24-.088.474-.185.703-.291a1.65 1.65 0 011.864.32 2 2 0 002.828-2.828 1.65 1.65 0 01-.32-1.864c.106-.23.203-.464.29-.703A1.65 1.65 0 0126 18a2 2 0 100-4 1.65 1.65 0 01-1.544-1.09 8.921 8.921 0 00-.291-.703 1.65 1.65 0 01.32-1.864 2 2 0 10-2.828-2.828 1.65 1.65 0 01-1.864.32 8.945 8.945 0 00-.703-.29A1.65 1.65 0 0118 6a2 2 0 10-4 0 1.65 1.65 0 01-1.09 1.544 8.941 8.941 0 00-.703.291 1.65 1.65 0 01-1.864-.32 2 2 0 00-2.828 2.828z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 12a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSettings = styled(Svg)<IconProps>(
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
export default IconSettings;
