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
      d="M20.146 22.925c-.78.83-.59.75-2.303 1.64-.484.155-1.056.229-1.716.223-1.012-.01-1.803-.256-2.373-.7-.57-.444-.832-1.004-.829-1.72.002-.28.003-.558.048-.837.045-.278.09-.596.223-.954l1.07-3.335c.089-.318.178-.636.223-.914.045-.279.09-.557.091-.796.002-.438-.085-.718-.304-.88-.176-.16-.571-.244-1.1-.249a3.271 3.271 0 00-.835.112c-.265.077-.423.085-.643.123l.152-.18c.514-.632 1.332-1.25 1.992-1.403a5.789 5.789 0 011.76-.262c1.012.01 1.76.256 2.33.7.525.443.831 1.003.828 1.72 0 .16-.001.399-.047.757-.045.358-.09.716-.224.993L17.42 20.3a4.8 4.8 0 00-.223.914c-.09.358-.09.597-.091.796-.002.438.085.757.304.919.22.161.615.245 1.143.25.264.002.528-.035.88-.111.308-.077.529-.155.705-.193l.008.05zM20.414 8.32c.182 1.148-.585 2.224-1.714 2.403-1.128.18-2.191-.606-2.373-1.755-.183-1.148.584-2.224 1.713-2.403 1.129-.18 2.191.606 2.374 1.754z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericAbout =
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
export default GenericAbout;
