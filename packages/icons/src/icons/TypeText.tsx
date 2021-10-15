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
    <g filter="url(#TypeText_svg__filter0_d_2567:573)">
      <g filter="url(#TypeText_svg__filter1_d_2567:573)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.982 16.93v-.983h1.002v-5.125c-.119-.356-.646-1.088-.905-1.29a2.88 2.88 0 00-.9-.456 2.04 2.04 0 00-.426-.063 6.833 6.833 0 00-.63-.01l-.077.002L13 8.007l.095-.004c.232-.006.484-.004.726.012.263.018.484.051.662.108.443.14.851.343 1.21.62.23.179.53.532.781.91.26-.376.571-.725.832-.905.427-.296.815-.506 1.187-.624.179-.057.4-.09.664-.108.241-.017.493-.019.724-.013l.095.004-.046.999-.076-.003a6.835 6.835 0 00-.63.01c-.189.013-.34.036-.428.064-.262.083-.568.249-.921.494-.278.191-.758.843-.905 1.238v5.138h.998v.984h-.998v4.175c.147.394.627 1.045.907 1.237.35.245.656.41.922.493.086.027.237.05.426.063a6.8 6.8 0 00.63.01l.075-.002.046.999-.094.003a7.719 7.719 0 01-.725-.012 2.837 2.837 0 01-.66-.108c-.375-.117-.764-.327-1.189-.623-.262-.18-.575-.53-.834-.905-.252.376-.552.729-.782.91-.358.277-.767.48-1.207.617-.179.058-.4.092-.664.11a7.713 7.713 0 01-.726.012L13 23.907l.046-.999.076.003c.202.005.425.003.63-.01.19-.014.34-.037.43-.065.336-.106.64-.256.895-.454.261-.205.788-.936.893-1.295l.014-4.156h-1.002z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <filter
        id="TypeText_svg__filter0_d_2567:573"
        x={-2}
        y={0}
        width={36}
        height={36}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2567:573"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2567:573"
          result="shape"
        />
      </filter>
      <filter
        id="TypeText_svg__filter1_d_2567:573"
        x={12}
        y={7}
        width={8.976}
        height={17.914}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={0.5} />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2567:573"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2567:573"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TypeText =
  styled(Svg) <
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
export default TypeText;
