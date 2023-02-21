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
      d="M7.875 10.228l.347.36.003-.003-.35-.357zM12.42 5.77l-.347-.36-.003.003.35.357zM21.538 26.5H10.462v1h11.076v-1zm-11.076 0c-1.623 0-2.962-1.355-2.962-3.055h-1c0 2.227 1.762 4.055 3.962 4.055v-1zM7.5 23.445V12.302h-1v11.143h1zm0-11.143c0-.652.263-1.272.722-1.714l-.694-.72A3.38 3.38 0 006.5 12.302h1zm.725-1.717l4.545-4.459-.7-.714-4.545 4.46.7.713zm4.542-4.456a2.23 2.23 0 011.548-.629v-1a3.23 3.23 0 00-2.242.91l.694.72zm1.548-.629h7.223v-1h-7.223v1zm7.223 0c1.623 0 2.962 1.355 2.962 3.055h1c0-2.227-1.762-4.055-3.962-4.055v1zM24.5 8.555v14.89h1V8.555h-1zm0 14.89c0 1.7-1.338 3.055-2.962 3.055v1c2.201 0 3.962-1.828 3.962-4.055h-1zM13.688 5.01v4.781h1v-4.78h-1zm0 4.781c0 .914-.718 1.633-1.577 1.633v1c1.437 0 2.577-1.192 2.577-2.633h-1zm-1.577 1.633H7.025v1h5.086v-1zM9.5 20a.5.5 0 001 0h-1zm.5-4v-.5a.5.5 0 00-.5.5h.5zm0 1.659a.5.5 0 000 1v-1zM17.9 16a.5.5 0 00-1 0h1zm-.5 4l-.395.306A.5.5 0 0017.9 20h-.5zm-3.1-4l.395-.306A.5.5 0 0013.8 16h.5zm-.5 4a.5.5 0 001 0h-1zm7.88-3.236a.5.5 0 00.64-.77l-.64.77zM22 19.62l.32.385a.5.5 0 00.18-.385H22zm0-1.408h.5a.5.5 0 00-.5-.5v.5zm-.563-.5a.5.5 0 000 1v-1zM10.5 20v-4h-1v4h1zm-.5-1.341h1.483v-1H10v1zm1.483 0c.54 0 .978-.187 1.28-.503.294-.31.425-.707.425-1.077h-1a.562.562 0 01-.149.387c-.09.095-.256.193-.556.193v1zm1.705-1.58c0-.37-.131-.767-.425-1.076-.302-.316-.74-.503-1.28-.503v1c.3 0 .465.098.556.193.098.103.15.245.15.386h1zM11.483 15.5H10v1h1.483v-1zm5.417.5v4h1v-4h-1zm.895 3.694l-3.1-4-.79.612 3.1 4 .79-.612zM13.8 16v4h1v-4h-1zm8.52-.005a2.074 2.074 0 00-.606-.362 2.268 2.268 0 00-.81-.133v1c.211 0 .352.029.459.069.106.04.203.1.318.195l.638-.77zm-1.416-.495c-1.409 0-2.43 1.106-2.43 2.5h1c0-.88.611-1.5 1.43-1.5v-1zm-2.43 2.5c0 1.394 1.022 2.5 2.43 2.5v-1c-.818 0-1.43-.62-1.43-1.5h-1zm2.43 2.5c.306 0 .57-.042.811-.133.241-.09.434-.22.604-.362l-.638-.77a1.09 1.09 0 01-.318.196c-.107.04-.248.069-.459.069v1zm1.596-.88v-1.408h-1v1.408h1zm-.5-1.908h-.563v1H22v-1z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaPng =
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
export default MediaPng;
