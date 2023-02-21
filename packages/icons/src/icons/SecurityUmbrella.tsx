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
      d="M22.364 10.44l-.35.358.35-.357zm-12.728 0l-.35-.356.35.357zm-2.578 5.24l.496.058-.496-.057zM8 16.68v-.5.5zm16.942-.998l.497-.058-.497.058zM16 21.357h-.5.5zm-5.039 0a.5.5 0 10-1 0h1zM16.5 6.5a.5.5 0 00-1 0h1zm8.939 9.123a9.253 9.253 0 00-2.725-5.54l-.7.715a8.252 8.252 0 012.432 4.94l.993-.115zm-2.725-5.54A9.593 9.593 0 0016 7.358v1c2.258 0 4.42.88 6.014 2.441l.7-.714zM16 7.358c-2.516 0-4.932.98-6.714 2.727l.7.714A8.593 8.593 0 0116 8.358v-1zm-6.714 2.727a9.253 9.253 0 00-2.725 5.54l.993.114a8.253 8.253 0 012.432-4.94l-.7-.714zM8 17.179h8v-1H8v1zm8 0h8v-1h-8v1zm-9.439-1.556c-.103.885.628 1.556 1.439 1.556v-1c-.294 0-.47-.228-.446-.44l-.993-.116zm17.885.115c.024.213-.152.44-.446.44v1c.81 0 1.542-.67 1.439-1.555l-.993.115zm-8.946.94v4.68h1v-4.68h-1zm0 4.68a2.278 2.278 0 01-2.27 2.285v1a3.278 3.278 0 003.27-3.286h-1zm-2.27 2.285c-1.25 0-2.269-1.02-2.269-2.286h-1a3.278 3.278 0 003.27 3.286v-1zM15.5 6.5v1.357h1V6.5h-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityUmbrella =
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
export default SecurityUmbrella;
