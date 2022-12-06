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
      d="M7.875 10.228l.347.36.003-.003-.35-.357zM12.42 5.77l-.347-.36-.003.003.35.357zM21.538 26.5H10.462v1h11.076v-1zm-11.076 0c-1.623 0-2.962-1.355-2.962-3.055h-1c0 2.227 1.762 4.055 3.962 4.055v-1zM7.5 23.445V12.302h-1v11.143h1zm0-11.143c0-.652.263-1.272.722-1.714l-.694-.72A3.38 3.38 0 006.5 12.302h1zm.725-1.717l4.545-4.459-.7-.714-4.545 4.46.7.713zm4.542-4.456a2.23 2.23 0 011.548-.629v-1a3.23 3.23 0 00-2.242.91l.694.72zm1.548-.629h7.223v-1h-7.223v1zm7.223 0c1.623 0 2.962 1.355 2.962 3.055h1c0-2.227-1.762-4.055-3.962-4.055v1zM24.5 8.555v14.89h1V8.555h-1zm0 14.89c0 1.7-1.338 3.055-2.962 3.055v1c2.201 0 3.962-1.828 3.962-4.055h-1zM13.688 5.01v4.781h1v-4.78h-1zm0 4.781c0 .914-.718 1.633-1.577 1.633v1c1.437 0 2.577-1.192 2.577-2.633h-1zm-1.577 1.633H7.025v1h5.086v-1zM21.321 15.938a.5.5 0 10-1 0h1zm-.5 3.052h-.5a.5.5 0 00.5.5v-.5zm1.868.5a.5.5 0 000-1v1zm-3.888-.5a.5.5 0 001 0h-1zm.5-3.052h.5a.5.5 0 00-.9-.3l.4.3zm-1.48 1.981l-.401.3a.5.5 0 00.8 0l-.4-.3zm-1.482-1.981l.4-.3a.5.5 0 00-.9.3h.5zm-.5 3.052a.5.5 0 101 0h-1zm-6.05-3.052a.5.5 0 10-1 0h1zm-1 3.052a.5.5 0 001 0h-1zm.5-2.09a.5.5 0 000 1v-1zm2.283 1a.5.5 0 100-1v1zm.5-1.962a.5.5 0 10-1 0h1zm-1 3.052a.5.5 0 001 0h-1zm2.314 0a.5.5 0 101 0h-1zm1-2.983a.5.5 0 00-1 0h1zm.605.431a.5.5 0 100-1v1zm-2.21-1a.5.5 0 100 1v-1zm7.54.5v3.052h1v-3.052h-1zm.5 3.552h1.868v-1H20.82v1zm-1.02-.5v-3.052h-1v3.052h1zm-.9-3.351l-1.481 1.98.8.6 1.482-1.982-.801-.598zm-.68 1.98l-1.481-1.98-.801.598 1.48 1.982.802-.6zm-2.382-1.681v3.052h1v-3.052h-1zm-7.05 0v3.052h1v-3.052h-1zm.5 1.962h2.283v-1H9.29v1zm1.783-1.962v3.052h1v-3.052h-1zm3.314 3.052v-2.983h-1v2.983h1zm.605-3.552h-2.21v1h2.21v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaHtml =
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
export default MediaHtml;
