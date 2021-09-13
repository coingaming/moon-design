import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.39 14.323h.319v-.32a.36.36 0 11.72 0v.32h.32a.36.36 0 010 .72h-.32v.32a.36.36 0 01-.36.36H4.75v.32a.36.36 0 11-.72 0v-.32h-.319a.36.36 0 010-.72h.319v-.32a.36.36 0 01.36-.36zm13.383-5.638l-.549.55-.348.348c-.686.686-2.08.45-3.047-.517l-2.907-2.913c-.966-.967-1.203-2.364-.518-3.05l.348-.348.55-.55a1.732 1.732 0 011.228-.51c.444 0 .89.171 1.228.51l4.015 4.02a1.742 1.742 0 010 2.46zm-5.411 5.418c-.653.654-1.804.654-2.456 0l-4.017-4.02a1.727 1.727 0 01-.505-1.23c0-.466.18-.902.505-1.23l3.414-3.417c.014.827.386 1.733 1.109 2.457l2.909 2.912c.72.722 1.623 1.102 2.448 1.118l-3.407 3.41zm-2.888 1.494a.632.632 0 01-.87 0L4.4 11.385a.612.612 0 01-.18-.434c0-.166.064-.32.197-.453a.606.606 0 01.434-.18.61.61 0 01.436.18l4.205 4.211c.116.115.179.27.179.436a.63.63 0 01-.196.452zM5.55 18.13l-3.68-3.684 2.283-2.286 3.68 3.684-2.283 2.286zM4.285 5.975c-.014-1.138.96-2.026 1.902-2.884.233-.214.46-.42.663-.623a1.12 1.12 0 011.585 0c.437.437.437 1.15 0 1.587L5.381 7.113c-.143.144-.26.306-.361.476-.445-.414-.728-1.007-.735-1.614zm13.998-.26l-4.016-4.02c-.925-.927-2.55-.927-3.475 0l-.549.55-.348.348-.434.435a1.823 1.823 0 00-.516-1.07 1.84 1.84 0 00-2.603 0 18.23 18.23 0 01-.64.6c-1.01.92-2.155 1.964-2.137 3.427.01.891.458 1.773 1.165 2.317a2.5 2.5 0 00-.066.551c0 .263.05.515.128.757-.324.016-.649.14-.902.395-.434.433-.485 1.084-.197 1.595l-2.587 2.59a.36.36 0 000 .51l4.188 4.194a.36.36 0 00.51 0l2.586-2.59c.202.113.417.191.642.191.348 0 .697-.135.968-.406a1.32 1.32 0 00.38-.886c.24.078.492.129.754.129.657 0 1.275-.255 1.736-.718l4.515-4.52.348-.349.55-.55c.463-.464.717-1.08.717-1.74 0-.659-.254-1.276-.717-1.74z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsBoxing =
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
export default IconSportsBoxing;
