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
      d="M11.983 5a5.102 5.102 0 00-3.606 1.498 5.118 5.118 0 00-1.495 3.613c0 1.355.538 2.654 1.495 3.612a5.102 5.102 0 003.606 1.499c1.353-.001 2.65-.54 3.608-1.498a5.118 5.118 0 001.495-3.613 5.118 5.118 0 00-1.495-3.613A5.102 5.102 0 0011.983 5v0zm-3.826 5.11a3.833 3.833 0 003.826 3.833 3.832 3.832 0 003.827-3.832 3.832 3.832 0 00-3.827-3.833A3.827 3.827 0 009.28 7.402a3.84 3.84 0 00-1.122 2.709v0zm14.032-1.277a3.832 3.832 0 00-3.826 3.832 3.833 3.833 0 003.826 3.834 3.832 3.832 0 003.827-3.833 3.831 3.831 0 00-3.827-3.832v-.001zm-2.551 3.832a2.556 2.556 0 002.551 2.557 2.555 2.555 0 000-5.111 2.555 2.555 0 00-2.551 2.555v0zm2.551 6.39a.638.638 0 01-.433-1.081.638.638 0 01.433-.197c1.758 0 3.517.143 5.273.428a2.55 2.55 0 012.046 1.823l.396 1.395c.014.05.027.1.039.152.295 1.347-.582 2.674-1.915 3.035a27.055 27.055 0 01-3.885.741.637.637 0 01-.556-1.03.638.638 0 01.416-.24 25.742 25.742 0 003.692-.703c.696-.19 1.146-.87 1.002-1.53a1.176 1.176 0 00-.02-.076l-.397-1.395a1.278 1.278 0 00-1.022-.911 31.575 31.575 0 00-5.069-.412v0zm-10.206 7.667c3.647 0 6.293-.341 7.915-1.005a1.28 1.28 0 00.77-1.433l-.497-2.49a3.196 3.196 0 00-2.858-2.559c-1.41-.119-3.188-.18-5.33-.18-2.14 0-3.917.061-5.329.181a3.188 3.188 0 00-2.858 2.558l-.495 2.49a1.279 1.279 0 00.768 1.433c1.622.664 4.267 1.005 7.914 1.005zm-8.396.177C5.395 27.64 8.186 28 11.985 28c3.797 0 6.589-.361 8.396-1.1a2.553 2.553 0 001.538-2.866l-.497-2.49a4.461 4.461 0 00-4-3.581c-1.451-.124-3.263-.185-5.437-.185-2.175 0-3.988.061-5.44.185a4.461 4.461 0 00-3.999 3.581l-.497 2.49a2.559 2.559 0 001.538 2.865v0z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.5}
      strokeLinejoin="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconUsers = styled(Svg)<IconProps>(
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
export default IconUsers;
