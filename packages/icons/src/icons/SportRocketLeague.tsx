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
      d="M26.876 23.1v-3.838c0-.386-.068-.767-.204-1.127l-2.146-5.454c-.378-.961-1.325-1.595-2.379-1.595h-5.064m9.793 12.013a.842.842 0 01-.85.829H8.183a.842.842 0 01-.85-.829m19.543 0v2.072a.842.842 0 01-.85.829h-1.274a.842.842 0 01-.85-.829v-1.243M7.875 17.209l-.338.926c-.136.36-.204.741-.204 1.127v3.837m0 0v2.072c0 .456.383.829.85.829h1.275c.467 0 .85-.373.85-.829v-1.243m1.359-6.63h12.396c.455 0 .91-.07 1.343-.211l.62-.203m-5.523 5.387h-6.797M8.734 7.779s-.744 1.641-.857 2.683c0 0 1.035 1.357 1.99 2.162M8.734 7.779c1.57-.568 2.927-.63 2.927-.63m-2.927.63c-.852-.846-1.952-1.194-1.952-1.194m3.085 6.039l2.894-.616s.712-1.215.827-2.707m-3.721 3.323c-.27.558-.648 2.42-.648 2.42m4.37-5.743s-.763-1.364-1.928-2.153m1.927 2.153l1.949-.488M11.66 7.148l.794-1.736m3.082 3.4s-.008-1.506-.55-2.35c0 0-.462-.718-2.532-1.05m3.082 3.4s.888.748 1.103 2.276c0 0-.4 2.798-2.88 3.155m-1.305-8.83c-.701-1.132-2.028-1.403-2.028-1.403m-2.422.282s-.953 1.094-1.223 2.293m0 0s-1.584.813-2.058 1.875c0 0-.077 1.126.591 2.407l2.562-.406m-2.562.408s-.722 1.25-.517 2.375c0 0 .625 1.61 1.897 2.21m0 0s1.208.073 2.524-.41m-2.524.41s-.194.602-.069 1.423m2.593-1.834s1.489.957 2.352 1.02M3.52 8.274s.434-.037 1.2.058m-1.284 4.92l1.325-.089m6.81 2.9s1.693-.715 2.189-1.82m-2.19 1.82s.033 1.058-.08 1.529m2.27-3.349s-.55-1.63-.997-2.235m2.678 1.43s.365.602.161 1.645m-4.02 5.944h-1.7c-.705 0-1.274-.555-1.274-1.243 0-.228.191-.414.425-.414h1.7c.705 0 1.274.555 1.274 1.243a.421.421 0 01-.425.414zm12.744 0h-1.699a.42.42 0 01-.425-.414c0-.688.57-1.243 1.275-1.243h1.7a.42.42 0 01.424.414c0 .688-.57 1.243-1.274 1.243zm2.125-4.558h1.487A1.05 1.05 0 0029 15.433a.629.629 0 00-.637-.621h-1.275a.629.629 0 00-.637.621v1.036zm-9.368-5.6c0 3.793-3.152 6.868-7.041 6.868C6.152 17.737 3 14.662 3 10.87 3 7.075 6.153 4 10.042 4s7.041 3.075 7.041 6.869z"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportRocketLeague =
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
export default SportRocketLeague;
