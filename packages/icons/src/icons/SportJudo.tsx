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
      d="M19.387 5.5h-6.774m6.774 0l-3.393 10.05M19.387 5.5l1.398 1.016c2.002 0 3.106 1.269 3.76 3.16l1.403 4.052c.365 1.056.552 2.165.552 3.282v4.801h-4.403M12.613 5.5l4.059 12.188M12.612 5.5l-1.397 1.016c-2.001 0-3.106 1.269-3.76 3.16l-1.403 4.052A10.033 10.033 0 005.5 17.01v4.801h4.403M22.436 9.903v3.387l-.678 5.42m0 0h-3.65m3.65 0v1.693M9.565 9.903v3.387l.677 5.42m0 0h3.68m-3.68 0v1.693m0 0l-.677 5.42v.677h12.87v-.677l-.677-5.42m-11.516 0h1.945m9.571 0h-1.933m-5.466 0h3.276m-.619-2.71l4.065 4.065-1.017 1.016-4.029-4.03m.981-1.05l-5.08 5.08-1.017-1.016 4.065-4.064m2.032 0h-2.032m0 0L11.258 6.684M21.081 26.5l-.508-4.064m-3.726-4.742L20.91 6.684"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportJudo =
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
export default SportJudo;
