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
      d="M18.556 12.078l.439.24-.44-.24zM15.189 13.5a.5.5 0 000 1v-1zm-1.731-6.658a.5.5 0 00.384.924l-.384-.924zm-.697 3.823a.5.5 0 10.694-.72l-.694.72zm-.221-1.757l-.5-.024.5.024zm1.346-1.16a.5.5 0 10-.415-.91l.415.91zm-.47 11.044a.5.5 0 00-1 0h1zm4.43-1.633a.5.5 0 10-.796.605l.796-.605zM22.5 18.25c0 3.417-2.996 6.25-6.772 6.25v1c4.257 0 7.772-3.212 7.772-7.25h-1zm-6.772 6.25c-2.308 0-4.336-1.065-5.556-2.677l-.797.604c1.411 1.865 3.736 3.073 6.353 3.073v-1zm2.646-12.005l.02.008.367-.93-.022-.009-.365.93zm.02.008c2.432.962 4.106 3.187 4.106 5.747h1c0-3.019-1.971-5.582-4.739-6.677l-.368.93zM15.188 7.5c1.842 0 3.27 1.378 3.27 3h1c0-2.244-1.947-4-4.27-4v1zm3.27 3c0 .467-.115.91-.324 1.304l.885.467c.281-.533.44-1.135.44-1.771h-1zm-.324 1.304l-.018.035.878.478.025-.046-.885-.467zm-.018.035c-.531.974-1.633 1.661-2.928 1.661v1c1.648 0 3.094-.876 3.806-2.183l-.878-.478zm-4.275-4.073c.41-.17.865-.266 1.347-.266v-1c-.614 0-1.2.122-1.731.342l.384.924zM9.5 19.75c0-2.037 1.79-3.75 4.079-3.75v-1c-2.77 0-5.079 2.092-5.079 4.75h1zm.861 2.304A3.544 3.544 0 019.5 19.75h-1c0 1.119.414 2.144 1.099 2.952l.762-.648zM13.578 16c1.672 0 3.09.921 3.722 2.213l.898-.44C17.391 16.125 15.615 15 13.578 15v1zm3.722 2.213l.002.004.898-.44-.002-.003-.898.439zm-3.845-8.268c-.28-.27-.434-.63-.416-1.013l-.999-.048a2.313 2.313 0 00.72 1.78l.695-.719zm-.416-1.013c.025-.507.35-.957.847-1.184l-.415-.91c-.796.364-1.386 1.122-1.43 2.046l.998.048zm4.363 9.86c0 .968-.857 1.814-1.993 1.814v1c1.617 0 2.993-1.225 2.993-2.814h-1zm-1.993 1.814c-1.137 0-1.993-.846-1.993-1.814h-1c0 1.589 1.375 2.814 2.993 2.814v-1zm1.64-2.843c.098.129.177.268.235.415l.93-.369a2.754 2.754 0 00-.368-.65l-.796.605zm.235.415c.076.191.118.398.118.614h1c0-.345-.067-.677-.188-.983l-.93.369z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportBombay =
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
export default SportBombay;
