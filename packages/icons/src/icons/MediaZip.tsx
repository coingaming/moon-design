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
      d="M7.875 10.228l.347.36.003-.003-.35-.357zM12.42 5.77l-.347-.36-.003.003.35.357zM21.538 26.5H10.462v1h11.076v-1zm-11.076 0c-1.623 0-2.962-1.355-2.962-3.055h-1c0 2.227 1.762 4.055 3.962 4.055v-1zM7.5 23.445V12.302h-1v11.143h1zm0-11.143c0-.652.263-1.272.722-1.714l-.694-.72A3.38 3.38 0 006.5 12.302h1zm.725-1.717l4.545-4.459-.7-.714-4.545 4.46.7.713zm4.542-4.456a2.23 2.23 0 011.548-.629v-1a3.23 3.23 0 00-2.242.91l.694.72zm1.548-.629h7.223v-1h-7.223v1zm7.223 0c1.623 0 2.962 1.355 2.962 3.055h1c0-2.227-1.762-4.055-3.962-4.055v1zM24.5 8.555v14.89h1V8.555h-1zm0 14.89c0 1.7-1.338 3.055-2.962 3.055v1c2.201 0 3.962-1.828 3.962-4.055h-1zM13.688 5.01v4.781h1v-4.78h-1zm0 4.781c0 .914-.718 1.633-1.577 1.633v1c1.437 0 2.577-1.192 2.577-2.633h-1zm-1.577 1.633H7.025v1h5.086v-1zM17.933 20.4a.5.5 0 001 0h-1zm1-4.4a.5.5 0 00-1 0h1zm-.5 1.95a.5.5 0 000 1v-1zm0-2.45a.5.5 0 100 1v-1zm-2.002.5a.5.5 0 00-1 0h1zm-1 4.4a.5.5 0 001 0h-1zm-4.789-4.9a.5.5 0 100 1v-1zm2.88.5l.41.287a.5.5 0 00-.41-.787v.5zM10.5 20.323l-.41-.287a.5.5 0 00.41.787v-.5zm3.071.5a.5.5 0 000-1v1zm5.362-.423V16h-1v4.4h1zm-.5-1.45h1.692v-1h-1.692v1zm1.692 0c.599 0 1.079-.204 1.408-.548.322-.337.467-.771.467-1.176h-1a.702.702 0 01-.189.484c-.118.124-.326.24-.686.24v1zM22 17.227c0-.405-.145-.84-.467-1.176-.33-.344-.81-.55-1.408-.55v1c.36 0 .568.118.686.241.126.132.189.31.189.485h1zM20.125 15.5h-1.692v1h1.692v-1zM15.43 16v4.4h1V16h-1zm-4.788.5h2.88v-1h-2.88v1zm2.47-.787l-3.023 4.324.82.573 3.022-4.323-.82-.573zm-2.613 5.11h3.071v-1H10.5v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaZip =
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
export default MediaZip;
