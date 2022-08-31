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
      d="M7.875 10.228l.347.36.003-.003-.35-.357zM12.42 5.77l-.347-.36-.003.003.35.357zM21.538 26.5H10.462v1h11.076v-1zm-11.076 0c-1.623 0-2.962-1.355-2.962-3.055h-1c0 2.227 1.762 4.055 3.962 4.055v-1zM7.5 23.445V12.302h-1v11.143h1zm0-11.143c0-.652.263-1.272.722-1.714l-.694-.72A3.38 3.38 0 006.5 12.302h1zm.725-1.717l4.545-4.459-.7-.714-4.545 4.46.7.713zm4.542-4.456a2.23 2.23 0 011.548-.629v-1a3.23 3.23 0 00-2.242.91l.694.72zm1.548-.629h7.223v-1h-7.223v1zm7.223 0c1.623 0 2.962 1.355 2.962 3.055h1c0-2.227-1.762-4.055-3.962-4.055v1zM24.5 8.555v14.89h1V8.555h-1zm0 14.89c0 1.7-1.338 3.055-2.962 3.055v1c2.201 0 3.962-1.828 3.962-4.055h-1zM13.688 5.01v4.781h1v-4.78h-1zm0 4.781c0 .914-.718 1.633-1.577 1.633v1c1.437 0 2.577-1.192 2.577-2.633h-1zm-1.577 1.633H7.025v1h5.086v-1zM12.385 19.224a.5.5 0 00-.77.638l.77-.638zm2.462-3.824h.5a.5.5 0 00-.5-.5v.5zm-.833-.5a.5.5 0 000 1v-1zm5.356 1.15a.5.5 0 10.298-.954l-.298.955zm-2.215 3.354a.5.5 0 10-.5.866l.5-.866zm-5.54.458c.425.513 1.063 1.038 1.937 1.038v-1c-.439 0-.822-.26-1.167-.676l-.77.638zm1.937 1.038c.353 0 .803-.118 1.171-.45.381-.344.624-.872.624-1.59h-1c0 .48-.154.721-.294.848a.768.768 0 01-.5.192v1zm1.795-2.04V15.4h-1v3.46h1zm-.5-3.96h-.833v1h.833v-1zm4.821.196c-.768-.24-1.488-.264-2.049-.046-.59.23-.982.728-.982 1.391h1c0-.208.097-.363.345-.46.278-.107.75-.13 1.388.07l.298-.955zm-3.03 1.345c0 .566.287.963.638 1.239.328.258.75.44 1.093.589.375.163.67.293.88.454.187.144.251.267.251.425h1c0-.562-.294-.951-.643-1.219-.327-.25-.748-.429-1.089-.577-.372-.162-.666-.295-.875-.459-.185-.146-.256-.278-.256-.452h-1zm2.862 2.707c0 .204-.063.334-.146.423-.089.096-.236.18-.455.224-.447.088-1.098-.018-1.744-.391l-.5.866c.803.464 1.7.652 2.438.506.374-.074.729-.239.993-.523.27-.29.414-.671.414-1.105h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaJs =
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
export default MediaJs;
