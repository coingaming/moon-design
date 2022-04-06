import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

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
      d="M10.377 11.144l1.344 1.31c.177.188.4.302.666.328l2.572.248m3.25-1.037l4.528-4.178a.988.988 0 011.338.025c.371.372.36.95-.025 1.31l-3.92 3.594c-.29.265-.39.664-.283 1.027l1.451 4.426 3.553 6.587a1.096 1.096 0 01-.476 1.538l-.083.042c-.55.29-1.255.102-1.555-.43L19.8 20.732a.757.757 0 00-1.174-.143l-2.636 2.487a1.337 1.337 0 01-1.032.386l-4.14-.303c-.656-.056-1.153-.62-1.077-1.255.062-.6.632-1.043 1.251-1l3.188.257a.74.74 0 00.576-.207l1.234-1.065c.35-.356.49-.878.337-1.355l-.96-2.878a1.044 1.044 0 00-.879-.697l-2.768-.28a.98.98 0 01-.628-.297l-2.395-2.192c-.274-.28-.315-.683-.174-1.018m.534-5.668c1.198-.061 2.22.826 2.284 1.983.063 1.156-.856 2.144-2.053 2.205-1.198.062-2.22-.826-2.284-1.983-.064-1.156.856-2.144 2.053-2.205zm8.746 3.574c.127 1.258-.825 2.377-2.126 2.5-1.302.124-2.461-.795-2.59-2.053-.127-1.257.825-2.376 2.127-2.5 1.302-.123 2.46.796 2.589 2.053z"
      stroke="currentColor"
      strokeMiterlimit={10}
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
const SportHandball =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
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
export default SportHandball;
