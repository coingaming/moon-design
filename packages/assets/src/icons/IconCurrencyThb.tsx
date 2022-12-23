import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 39 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.688 62.5h-6.97v-7.281H.064V8.75h13.656V.125h6.969v8.688c3.77.083 6.927.572 9.468 1.468 2 .688 3.604 1.938 4.813 3.75.52.854.916 1.709 1.187 2.563.292.833.438 1.718.438 2.656 0 3.938-1.844 7.146-5.532 9.625-.479.27-.947.542-1.406.813-.437.27-.958.572-1.562.906 1.687.5 3.229 1.156 4.625 1.968a15.723 15.723 0 013.656 2.907c1.583 1.708 2.375 3.916 2.375 6.625 0 2.354-.74 4.552-2.219 6.593-1.416 1.959-3.385 3.51-5.906 4.657-2.563 1.166-5.875 1.791-9.938 1.875V62.5zm0-35.438c3.312-.437 5.229-1.187 5.75-2.25.52-1.083.708-2.354.562-3.812-.146-1.458-.604-2.583-1.375-3.375-.75-.813-2.396-1.365-4.938-1.656v11.094zm-6.97-11.218H9.126v11.719h4.594v-11.72zm6.97 32.25c3.875-.438 6.197-1.73 6.968-3.875.771-2.146.73-4.177-.125-6.094-.833-1.938-3.114-2.958-6.843-3.063v13.032zM9.124 34.625v13.5h4.594v-13.5H9.125z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCurrencyThb =
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
export default IconCurrencyThb;
