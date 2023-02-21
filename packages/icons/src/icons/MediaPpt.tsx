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
      d="M7.875 10.228l.347.36.003-.003-.35-.357zM12.42 5.77l-.347-.36-.003.003.35.357zM21.538 26.5H10.462v1h11.076v-1zm-11.076 0c-1.623 0-2.962-1.355-2.962-3.055h-1c0 2.227 1.762 4.055 3.962 4.055v-1zM7.5 23.445V12.302h-1v11.143h1zm0-11.143c0-.652.263-1.272.722-1.714l-.694-.72A3.38 3.38 0 006.5 12.302h1zm.725-1.717l4.545-4.459-.7-.714-4.545 4.46.7.713zm4.542-4.456a2.23 2.23 0 011.548-.629v-1a3.23 3.23 0 00-2.242.91l.694.72zm1.548-.629h7.223v-1h-7.223v1zm7.223 0c1.623 0 2.962 1.355 2.962 3.055h1c0-2.227-1.762-4.055-3.962-4.055v1zM24.5 8.555v14.89h1V8.555h-1zm0 14.89c0 1.7-1.338 3.055-2.962 3.055v1c2.201 0 3.962-1.828 3.962-4.055h-1zM13.688 5.01v4.781h1v-4.78h-1zm0 4.781c0 .914-.718 1.633-1.577 1.633v1c1.437 0 2.577-1.192 2.577-2.633h-1zm-1.577 1.633H7.025v1h5.086v-1zM9.5 20a.5.5 0 001 0h-1zm.5-4v-.5a.5.5 0 00-.5.5h.5zm0 1.659a.5.5 0 100 1v-1zM13.976 20a.5.5 0 101 0h-1zm.5-4v-.5a.5.5 0 00-.5.5h.5zm0 1.659a.5.5 0 100 1v-1zM19.697 20a.5.5 0 001 0h-1zm1-3.889a.5.5 0 10-1 0h1zM22 16.5a.5.5 0 000-1v1zm-3.605-1a.5.5 0 100 1v-1zM10.5 20v-4h-1v4h1zm-.5-1.341h1.514v-1H10v1zm1.514 0c.546 0 .99-.184 1.296-.5.3-.308.435-.707.435-1.08h-1a.55.55 0 01-.152.383c-.094.097-.266.197-.579.197v1zm1.73-1.58A1.55 1.55 0 0012.81 16c-.306-.315-.75-.499-1.295-.499v1c.312 0 .485.1.579.197a.55.55 0 01.152.382h1zm-1.73-1.579H10v1h1.514v-1zm3.463 4.5v-4h-1v4h1zm-.5-1.341h1.514v-1h-1.514v1zm1.514 0c.546 0 .989-.184 1.295-.5.3-.308.435-.707.435-1.08h-1a.55.55 0 01-.151.383c-.095.097-.267.197-.58.197v1zm1.73-1.58a1.55 1.55 0 00-.435-1.08c-.306-.315-.75-.499-1.295-.499v1c.312 0 .484.1.579.197a.55.55 0 01.151.382h1zm-1.73-1.579h-1.514v1h1.514v-1zm4.706 4.5v-3.889h-1V20h1zM22 15.5h-3.605v1H22v-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaPpt =
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
export default MediaPpt;
