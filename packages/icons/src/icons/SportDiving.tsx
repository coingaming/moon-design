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
      d="M21.667 23.771c-.588 1.436-2.03 2.403-3.692 2.403h-.636m4.584-12.435V9.783c0-.313.505-.566 1.129-.566.623 0 1.128.253 1.128.566v13a5.647 5.647 0 01-5.641 5.652H17.21m-9.827-9.381c.105-.484.377-1.707.377-1.707.11-.46.134-.654.641-.852.33-.105.747-.239 1.151-.309M15.72 26.74c0 1.249-1.01 2.261-2.257 2.261a2.259 2.259 0 01-2.256-2.26c0-1.25 1.01-2.262 2.256-2.262a2.259 2.259 0 012.257 2.261zm5.076-19.783c0 .937-.758 1.696-1.692 1.696-.935 0-1.692-.759-1.692-1.696 0-.936.757-1.695 1.692-1.695.934 0 1.692.759 1.692 1.695zM27 5.261c0 .936-.758 1.695-1.692 1.695-.935 0-1.692-.759-1.692-1.695 0-.937.757-1.696 1.692-1.696.934 0 1.692.76 1.692 1.696zm-13.538 8.478c2.4 0 4.707.317 6.399.872.957.383 1.252 1.451 1.398 2.174.146.723.308 1.462.607 2.864.3 1.403-.62 2.902-1.996 3.141-1.256.23-1.417.34-2.68.544-1.262.204-2.003-2.246-3.729-2.246-1.725 0-2.466 2.45-3.729 2.246-1.263-.204-1.423-.315-2.68-.544-1.375-.238-2.295-1.738-1.995-3.14.3-1.403.46-2.142.607-2.865.146-.723.44-1.791 1.398-2.174 1.692-.555 3.999-.872 6.399-.872h.001z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportDiving =
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
export default SportDiving;
