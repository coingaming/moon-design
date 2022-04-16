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
      d="M23.021 5.328l.043-.499-.043.499zm-14.02-.033l.052.498-.052-.498zM7.113 7.171l.496.06-.496-.06zm.12 20.352l-.494.075.494-.075zM25.007 7.319l-.498.044.498-.044zm-.08 20.193l-.496-.068.496.068zm-.618.232l.326-.379-.326.379zm-1.679-1.446l.326-.38-.326.38zm-.951-.031l.3.399-.3-.4zm-2.097 1.58l-.301-.4.3.4zm-.913 0l.301-.4-.3.4zm-2.129-1.604l-.3.4.3-.4zm-.912 0l.3.4-.3-.4zm-2.13 1.604l-.3-.4.3.4zm-.912 0l.301-.4-.3.4zm-2.097-1.58l-.301.399.301-.4zm-.951.03l.326.38-.326-.38zM7.85 27.75l.327.38-.327-.38zm2.15-17.632a.5.5 0 000 1v-1zm5.703 1a.5.5 0 100-1v1zM10 14.703a.5.5 0 100 1v-1zm12.166 1a.5.5 0 000-1v1zm-12.166 3.584a.5.5 0 000 1v-1zm12.166 1a.5.5 0 100-1v1zm.897-15.458c-3.507-.298-9.216-.546-14.115-.03l.104.994c4.809-.506 10.447-.264 13.926.033l.085-.997zM6.617 7.111c-.568 4.708-1.096 12.493.122 20.487l.989-.15c-1.2-7.87-.68-15.555-.119-20.217l-.992-.12zm17.892.252c.45 5.1.866 13.175-.078 20.081l.991.135c.96-7.02.534-15.185.083-20.303l-.996.087zm.126 20.002l-1.679-1.446-.652.758 1.679 1.446.652-.758zm-3.257-1.498l-2.097 1.58.602.8 2.097-1.581-.602-.799zm-2.408 1.58l-2.129-1.604-.602.8 2.13 1.604.601-.8zm-3.643-1.604l-2.13 1.605.603.799 2.129-1.605-.602-.799zm-2.44 1.605l-2.097-1.58-.602.798 2.097 1.58.602-.798zm-3.675-1.53l-1.687 1.454.653.757 1.686-1.452-.652-.758zm1.578-.05a1.258 1.258 0 00-1.578.05l.652.759a.257.257 0 01.324-.011l.602-.799zm2.408 1.58a.257.257 0 01-.31 0l-.603.799a1.257 1.257 0 001.515 0l-.602-.8zm3.643-1.605a1.257 1.257 0 00-1.514 0l.602.8a.257.257 0 01.31 0l.602-.8zm2.44 1.605a.257.257 0 01-.31 0l-.603.799a1.257 1.257 0 001.515 0l-.602-.8zm3.675-1.53a1.258 1.258 0 00-1.578-.05l.602.798a.258.258 0 01.324.01l.652-.757zm1.475 1.526a.125.125 0 01.204-.079l-.652.758a.875.875 0 001.439-.544l-.99-.135zm-17.692.154a.876.876 0 001.439.531l-.653-.758a.124.124 0 01.203.076l-.989.151zm2.21-22.8a2.628 2.628 0 00-2.332 2.313l.992.12a1.628 1.628 0 011.444-1.438l-.104-.995zm14.03 1.028a1.68 1.68 0 011.53 1.537l.996-.087a2.68 2.68 0 00-2.441-2.447l-.085.997zm-12.978 5.292h5.703v-1H10v1zm0 4.585h12.166v-1H10.001v1zm0 4.584h12.166v-1H10.001v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericBet =
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
export default GenericBet;
