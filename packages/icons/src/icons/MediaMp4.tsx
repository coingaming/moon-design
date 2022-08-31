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
      d="M7.875 10.228l.347.36.003-.003-.35-.357zM12.42 5.77l-.347-.36-.003.003.35.357zM21.538 26.5H10.462v1h11.076v-1zm-11.076 0c-1.623 0-2.962-1.355-2.962-3.055h-1c0 2.227 1.762 4.055 3.962 4.055v-1zM7.5 23.445V12.302h-1v11.143h1zm0-11.143c0-.652.263-1.272.722-1.714l-.694-.72A3.38 3.38 0 006.5 12.302h1zm.725-1.717l4.545-4.459-.7-.714-4.545 4.46.7.713zm4.542-4.456a2.23 2.23 0 011.548-.629v-1a3.23 3.23 0 00-2.242.91l.694.72zm1.548-.629h7.223v-1h-7.223v1zm7.223 0c1.623 0 2.962 1.355 2.962 3.055h1c0-2.227-1.762-4.055-3.962-4.055v1zM24.5 8.555v14.89h1V8.555h-1zm0 14.89c0 1.7-1.338 3.055-2.962 3.055v1c2.201 0 3.962-1.828 3.962-4.055h-1zM13.688 5.01v4.781h1v-4.78h-1zm0 4.781c0 .914-.718 1.633-1.577 1.633v1c1.437 0 2.577-1.192 2.577-2.633h-1zm-1.577 1.633H7.025v1h5.086v-1zM15.167 20a.5.5 0 001 0h-1zm.5-4v-.5a.5.5 0 00-.5.5h.5zm0 1.659a.5.5 0 000 1v-1zM13.301 20a.5.5 0 101 0h-1zm.5-4h.5a.5.5 0 00-.904-.295l.404.295zM11.9 18.596l-.404.295a.5.5 0 00.807 0l-.403-.295zM10 16l.403-.295A.5.5 0 009.5 16h.5zm-.5 4a.5.5 0 001 0h-1zm11.382 0a.5.5 0 001 0h-1zm.5-4h.5a.5.5 0 00-.891-.311l.391.311zm-2.268 2.853l-.391-.311a.5.5 0 00.391.81v-.5zm2.886.5a.5.5 0 000-1v1zM16.167 20v-4h-1v4h1zm-.5-1.341h1.471v-1h-1.47v1zm1.471 0c.538 0 .974-.188 1.274-.505.292-.309.421-.706.421-1.075h-1a.567.567 0 01-.148.388c-.09.095-.251.192-.547.192v1zm1.695-1.58c0-.368-.13-.765-.421-1.074-.3-.318-.736-.505-1.274-.505v1c.296 0 .457.097.547.191a.567.567 0 01.148.388h1zM17.138 15.5h-1.47v1h1.47v-1zM14.301 20v-4h-1v4h1zm-.904-4.295l-1.9 2.596.806.59 1.901-2.596-.807-.59zM12.303 18.3l-1.9-2.596-.806.59 1.9 2.596.806-.59zM9.5 16v4h1v-4h-1zm12.382 4v-4h-1v4h1zm-.891-4.311l-2.268 2.853.782.622 2.268-2.853-.782-.622zm-1.877 3.664H22v-1h-2.886v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaMp4 =
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
export default MediaMp4;
