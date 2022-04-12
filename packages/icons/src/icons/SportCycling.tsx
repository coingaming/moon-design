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
      d="M6.645 8.895a.5.5 0 000 1v-1zm2.573 7.977a.5.5 0 00.773.635l-.773-.635zm-1.978.005a.5.5 0 00.988-.155l-.988.155zm-.689-10.88a.5.5 0 00-.988.154l.988-.155zM19.966 9.37a.5.5 0 10.003 1l-.003-1zm1.929-1.427l-.5-.004v.002l.5.002zM19.968 6l.002-.5h-.002V6zm-3.96 0v-.5a.5.5 0 00-.5.5h.5zm2.742 13.381a.5.5 0 10.95-.31l-.95.31zM6.057 5.5a.5.5 0 100 1v-1zm1.738 1a.5.5 0 000-1v1zm-.037 16.597a.5.5 0 001 0h-1zm1-3.871a.5.5 0 00-1 0h1zm-1.79 3.895a.5.5 0 000 1v-1zm2.58 1a.5.5 0 000-1v1zm8.293-9.84a.5.5 0 10.269.963l-.27-.963zm1.56.314l-.02.5.02-.5zm4.456 4.805l-.5-.019.5.019zm-4.805 4.457l.019-.5-.02.5zm-4.457-4.805l.5.018-.5-.018zm1.902-2.933a.5.5 0 00-.66-.75l.66.75zM6.645 9.895h9.363v-1H6.645v1zm8.976-.817l-6.403 7.794.773.635 6.403-7.794-.772-.635zm-7.393 7.644L6.551 5.996l-.988.155L7.24 16.877l.988-.155zm11.742-6.351a2.433 2.433 0 002.425-2.426l-1-.003a1.433 1.433 0 01-1.43 1.429l.005 1zm2.425-2.424A2.43 2.43 0 0019.97 5.5l-.004 1a1.43 1.43 0 011.429 1.44l1 .007zM19.968 5.5h-3.96v1h3.96v-1zm-4.46.5v3.395h1V6h-1zm.025 3.55l3.217 9.831.95-.31-3.217-9.831-.95.31zM6.057 6.5h1.738v-1H6.057v1zm3.96 12.774c0 .971-.788 1.758-1.759 1.758v1a2.758 2.758 0 002.758-2.758h-1zm-1.759 1.758c-.97 0-1.758-.787-1.758-1.758h-1a2.758 2.758 0 002.758 2.758v-1zM6.5 19.274c0-.97.787-1.758 1.758-1.758v-1A2.758 2.758 0 005.5 19.274h1zm1.758-1.758c.971 0 1.758.787 1.758 1.758h1a2.758 2.758 0 00-2.758-2.758v1zm.5 5.58v-3.87h-1v3.87h1zm-1.79 1.024h2.58v-1h-2.58v1zM25.5 19.227a6.274 6.274 0 01-6.274 6.274v1a7.274 7.274 0 007.274-7.274h-1zM19.226 25.5a6.274 6.274 0 01-6.274-6.274h-1a7.274 7.274 0 007.274 7.274v-1zm-6.274-6.274a6.274 6.274 0 016.274-6.274v-1a7.274 7.274 0 00-7.274 7.274h1zm6.274-6.274a6.274 6.274 0 016.274 6.274h1a7.274 7.274 0 00-7.274-7.274v1zm-1.116 2.292c.403-.112.83-.166 1.271-.15l.038-.999a5.14 5.14 0 00-1.578.186l.269.963zm1.271-.15a4.135 4.135 0 013.977 4.287l.999.038a5.135 5.135 0 00-4.938-5.324l-.038 1zm3.977 4.287a4.135 4.135 0 01-4.287 3.976l-.038 1a5.135 5.135 0 005.324-4.938l-1-.038zm-4.287 3.976a4.135 4.135 0 01-3.976-4.287l-1-.037a5.135 5.135 0 004.938 5.324l.038-1zm-3.976-4.287a4.124 4.124 0 011.402-2.951l-.66-.75a5.124 5.124 0 00-1.742 3.664l1 .037z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportCycling =
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
export default SportCycling;
