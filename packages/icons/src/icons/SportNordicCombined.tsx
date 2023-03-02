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
      d="M14.08 7.815c1.325 0 2.4-1.078 2.4-2.408A2.404 2.404 0 0014.08 3a2.404 2.404 0 00-2.4 2.407 2.404 2.404 0 002.4 2.408zm0 0c.765 0 1.44-.367 1.879-.927a5.524 5.524 0 012.99 1.153l3.233 2.548h-.004a2.714 2.714 0 01.567 3.649l-.605.895a1.406 1.406 0 01-1.843.131 1.418 1.418 0 01-.416-1.764l.434-.87-2.88-1.925-.48 4.815 1.709 5.892c.138.554.11 1.135-.082 1.672l-1.591 4.47a1.55 1.55 0 01-.531.722 2.698 2.698 0 00-.507-1.795l-.172-.235-.282.07a2.678 2.678 0 00-1.488.99 1.555 1.555 0 01.037-.732l1.126-3.677a3.863 3.863 0 00.008-2.238l-1.105-3.695.772 3.483c.123.555.08 1.133-.123 1.664l-1.651 4.307c-.18.47-.58.793-1.045.905a2.666 2.666 0 00-.394-.843l-.172-.235-.282.07c-.28.068-.533.192-.771.34a1.49 1.49 0 01-.15-1.213l1.09-3.558a3.858 3.858 0 00.035-2.147l-.704-2a5.025 5.025 0 01-.205-2.565l.723-3.987s-1.593 3.439-3.36 3.37c-1.036-.04-2.177-1.026-2.944-1.835a1.42 1.42 0 01.026-1.978 1.41 1.41 0 011.996 0l.922.925 1.481-2.478a4.801 4.801 0 012.969-2.193c.44.498 1.075.819 1.79.819zM4.96 28.037V12.784m.96 14.29H4m23.882-1.926L19.84 15.037M28 23.791l-1.47 1.239M9.29 28.012a2.69 2.69 0 011.892-1.699l.282-.069.172.235c.533.727.668 1.674.36 2.521l-2.706-.988h0zm4.32 0a2.69 2.69 0 011.892-1.699l.282-.069.172.235c.533.727.668 1.674.36 2.521l-2.707-.988h.002z"
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
const SportNordicCombined =
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
export default SportNordicCombined;
