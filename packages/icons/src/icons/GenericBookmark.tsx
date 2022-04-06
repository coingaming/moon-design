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
      d="M8.842 25.202l.301.4-.301-.4zm4.085-3.084l.302.399-.302-.4zm1.761 0l.301-.4-.3.4zm4.085 3.084l.302-.399-.302.4zm2.342-12.622a.5.5 0 100 1v-1zM6 8.693v15.342h1V8.693H6zm3.143 16.908l4.086-3.084-.603-.798-4.085 3.084.602.798zm5.244-3.084l4.085 3.084.603-.798-4.086-3.084-.602.798zm7.228 1.518V8.525h-1v15.51h1zm-3.143 1.566c1.293.976 3.143.053 3.143-1.566h-1a.961.961 0 01-1.54.768l-.603.798zm-5.243-3.084a.96.96 0 011.158 0l.602-.798a1.961 1.961 0 00-2.363 0l.603.798zM6 24.035c0 1.62 1.85 2.542 3.143 1.566l-.602-.798A.961.961 0 017 24.035H6zm15.615-15.51c0-.806.72-1.525 1.693-1.525V6c-1.449 0-2.693 1.094-2.693 2.525h1zM23.308 7C24.28 7 25 7.72 25 8.525h1C26 7.094 24.756 6 23.308 6v1zM25 8.525v3.093h1V8.525h-1zm-.962 4.055h-2.923v1h2.924v-1zm.962-.962c0 .531-.43.962-.962.962v1A1.962 1.962 0 0026 11.618h-1zM7 8.693C7 7.731 7.73 7 8.574 7V6C7.127 6 6 7.232 6 8.693h1zM8.574 7h14.734V6H8.574v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericBookmark =
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
export default GenericBookmark;
