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
      d="M16.008 11.173v.874m-3.054-.04l.428.755m-2.663 1.522l.74.436M9.9 17.395h.858m-.038 3.11l.74-.436m9.838.436l-.743-.436m1.56-2.674h-.857m.04-3.11l-.743.435m-1.494-2.712l-.428.754m-.247 2.21l-1.537 1.565m0 0a1.229 1.229 0 01.001 1.715 1.175 1.175 0 01-1.683 0 1.229 1.229 0 010-1.714 1.174 1.174 0 011.682 0zm3.19 8.763l-1.96-3.36h-4.143l-1.96 3.36m6.815-2.14h3.423a8.622 8.622 0 002.083-4.386 8.702 8.702 0 00-.605-4.834 8.516 8.516 0 00-3.099-3.713 8.29 8.29 0 00-4.586-1.388 8.29 8.29 0 00-4.586 1.388A8.516 8.516 0 008.32 13.94a8.702 8.702 0 00-.605 4.834A8.622 8.622 0 009.8 23.161h3.423m9.85 2.139a10.738 10.738 0 003.148-5.455c.485-2.1.335-4.301-.43-6.313a10.665 10.665 0 00-3.857-4.96A10.366 10.366 0 0016 6.7c-2.118 0-4.187.652-5.934 1.872a10.665 10.665 0 00-3.857 4.96 10.883 10.883 0 00-.43 6.313A10.739 10.739 0 008.927 25.3h14.146z"
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
const SportMotor =
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
export default SportMotor;
