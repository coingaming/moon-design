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
      d="M7.875 10.228l.347.36.003-.003-.35-.357zM12.42 5.77l-.347-.36-.003.003.35.357zM21.538 26.5H10.462v1h11.076v-1zm-11.076 0c-1.623 0-2.962-1.355-2.962-3.055h-1c0 2.227 1.762 4.055 3.962 4.055v-1zM7.5 23.445V12.302h-1v11.143h1zm0-11.143c0-.652.263-1.272.722-1.714l-.694-.72A3.38 3.38 0 006.5 12.302h1zm.725-1.717l4.545-4.459-.7-.714-4.545 4.46.7.713zm4.542-4.456a2.23 2.23 0 011.548-.629v-1a3.23 3.23 0 00-2.242.91l.694.72zm1.548-.629h7.223v-1h-7.223v1zm7.223 0c1.623 0 2.962 1.355 2.962 3.055h1c0-2.227-1.762-4.055-3.962-4.055v1zM24.5 8.555v14.89h1V8.555h-1zm0 14.89c0 1.7-1.338 3.055-2.962 3.055v1c2.201 0 3.962-1.828 3.962-4.055h-1zM13.688 5.01v4.781h1v-4.78h-1zm0 4.781c0 .914-.718 1.633-1.577 1.633v1c1.437 0 2.577-1.192 2.577-2.633h-1zm-1.577 1.633H7.025v1h5.086v-1zM13.742 19.772a.5.5 0 10-.628-.779l.628.779zm-.627-3.565a.5.5 0 00.627-.78l-.627.78zm4.087-.129a.5.5 0 10.294-.955l-.294.955zm-1.923 2.814a.5.5 0 00-.494.869l.494-.87zm6.147-2.814a.5.5 0 10.294-.955l-.294.955zm-1.923 2.814a.5.5 0 00-.494.869l.494-.87zm-6.389.101c-.133.108-.25.179-.38.226-.13.048-.3.081-.547.081v1c.338 0 .628-.045.89-.141.263-.096.475-.234.665-.387l-.628-.779zm-.927.307c-.98 0-1.687-.72-1.687-1.7h-1c0 1.521 1.144 2.7 2.687 2.7v-1zM10.5 17.6c0-.98.708-1.7 1.688-1.7v-1c-1.543 0-2.688 1.178-2.688 2.7h1zm1.688-1.7c.462 0 .686.113.927.307l.627-.78c-.406-.326-.848-.527-1.554-.527v1zm5.308-.777c-.688-.212-1.338-.236-1.85-.04-.541.207-.909.664-.909 1.276h1c0-.15.065-.265.267-.342.232-.09.638-.111 1.198.061l.294-.955zm-2.758 1.236c0 .523.27.886.59 1.134.298.23.679.392.982.522.334.143.589.255.768.39.158.119.198.21.198.32h1c0-.52-.277-.878-.595-1.118-.297-.224-.677-.382-.977-.511-.332-.143-.586-.256-.764-.394-.155-.12-.202-.219-.202-.343h-1zm2.538 2.365c0 .163-.05.26-.111.325-.069.072-.187.142-.374.178-.382.075-.947-.014-1.512-.335l-.494.869c.72.41 1.528.578 2.197.448.338-.066.664-.214.91-.474a1.44 1.44 0 00.384-1.01h-1zm4.444-3.601c-.688-.212-1.338-.236-1.85-.04-.541.207-.909.664-.909 1.276h1c0-.15.065-.265.267-.342.232-.09.638-.111 1.198.061l.294-.955zm-2.758 1.236c0 .523.27.886.59 1.134.298.23.679.392.982.522.334.143.589.255.768.39.158.119.198.21.198.32h1c0-.52-.277-.878-.596-1.118-.296-.224-.676-.382-.976-.511-.332-.143-.586-.256-.764-.394-.155-.12-.203-.219-.203-.343h-1zm2.538 2.365c0 .163-.05.26-.111.325-.069.072-.188.142-.374.178-.382.075-.947-.014-1.512-.335l-.494.869c.72.41 1.528.578 2.197.448.338-.066.664-.214.91-.474a1.44 1.44 0 00.384-1.01h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaCss =
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
export default MediaCss;
