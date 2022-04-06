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
      d="M24.683 12.295a.5.5 0 10.634-.772l-.634.772zm-18-.772a.5.5 0 10.634.772l-.634-.772zm17.125 6.181c0 .033-.021.151-.126.37a4.913 4.913 0 01-.458.736 10.736 10.736 0 01-1.77 1.848c-1.515 1.26-3.569 2.342-5.8 2.342v1c2.548 0 4.821-1.228 6.439-2.573a11.727 11.727 0 001.938-2.026c.232-.317.42-.62.551-.893.125-.26.226-.542.226-.803h-1zM15.654 23c-2.232 0-4.285-1.083-5.8-2.342a10.738 10.738 0 01-1.77-1.848 4.918 4.918 0 01-.458-.737c-.105-.218-.126-.336-.126-.369h-1c0 .262.1.545.226.804.131.273.319.576.55.893a11.728 11.728 0 001.939 2.026C10.833 22.772 13.105 24 15.654 24v-1zM7.5 17.704c0-.032.02-.15.126-.368.099-.205.251-.455.458-.737a10.738 10.738 0 011.77-1.848c1.515-1.26 3.569-2.342 5.8-2.342v-1c-2.548 0-4.821 1.228-6.439 2.573a11.736 11.736 0 00-1.938 2.026c-.232.317-.42.62-.551.893-.126.26-.226.542-.226.803h1zm8.154-5.295c2.231 0 4.285 1.083 5.8 2.342a10.736 10.736 0 011.77 1.848c.206.282.359.532.458.737.105.218.126.336.126.369h1c0-.262-.1-.545-.226-.804a5.896 5.896 0 00-.55-.893 11.734 11.734 0 00-1.94-2.026c-1.617-1.345-3.89-2.573-6.438-2.573v1zm3.308 3.25c0 1.788-1.474 3.25-3.308 3.25v1c2.372 0 4.308-1.896 4.308-4.25h-1zm-3.308 3.25c-1.834 0-3.308-1.462-3.308-3.25h-1c0 2.354 1.936 4.25 4.308 4.25v-1zm-3.308-3.25c0-1.788 1.474-3.25 3.308-3.25v-1c-2.372 0-4.308 1.896-4.308 4.25h1zm3.308-3.25c1.834 0 3.308 1.462 3.308 3.25h1c0-2.354-1.936-4.25-4.308-4.25v1zM16 9c3.155 0 6.123 1.192 8.683 3.295l.634-.772C22.606 9.295 19.42 8 16 8v1zm-8.683 3.295C9.877 10.192 12.845 9 16 9V8c-3.419 0-6.606 1.295-9.317 3.523l.634.772z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ControlsEye =
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
export default ControlsEye;
