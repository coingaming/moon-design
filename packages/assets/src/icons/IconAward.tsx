import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 18 20"
    fill="none"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.672 10.135c-.604 1.154-1.528 2.15-2.756 2.985a3.175 3.175 0 01-.588.315c.073 1.648.198 2.768.367 3.337.151.51.646 1 1.511 1.457.378.2.236.771-.19.771H6.168c-.427 0-.568-.573-.19-.772.864-.45 1.36-.942 1.515-1.458.173-.574.298-1.693.366-3.335a3.233 3.233 0 01-.59-.314c-1.251-.84-2.167-1.822-2.763-2.972A4.903 4.903 0 011.31 6.617L.964 5.15a2.048 2.048 0 011.995-2.514h.391l-.002-.032a1.227 1.227 0 011.066-1.3 36.01 36.01 0 019.355 0 1.227 1.227 0 011.066 1.3l-.003.031h.39a2.045 2.045 0 011.995 2.514l-.345 1.467a4.924 4.924 0 01-3.117 3.497.419.419 0 01-.083.021zm-2.98 8.047c-.393-.36-.655-.75-.781-1.177-.186-.625-.313-1.726-.39-3.323h-.853c-.073 1.593-.2 2.694-.39 3.324-.13.428-.392.819-.782 1.176h3.196zm3.277-14.995v.001c-.077.996-.226 2.901-.295 3.92-.152 2.218-1.237 3.99-3.217 5.335a2.46 2.46 0 01-2.732 0C5.713 11.09 4.683 9.38 4.51 7.104L4.353 5.08v-.002L4.3 4.37a201.37 201.37 0 01-.134-1.819.41.41 0 01.355-.433 35.193 35.193 0 019.143 0c.214.028.37.218.355.433l-.049.637zM4.052 9.052a4.096 4.096 0 01-1.946-2.623L1.76 4.963A1.23 1.23 0 012.96 3.455h.45l.074.977.054.708.156 2.028c.051.668.17 1.295.359 1.884zm10.72-5.597l-.01.084c-.08 1.044-.209 2.702-.272 3.625a7.726 7.726 0 01-.357 1.875 4.102 4.102 0 001.943-2.61l.346-1.466a1.227 1.227 0 00-1.199-1.508h-.45z"
      fill="currentColor"
    />
    <path
      d="M10.916 13.12l.056.083-.056-.083zm2.756-2.985l-.014-.099-.051.007-.024.046.089.046zm-3.344 3.3l-.037-.093-.066.027.003.07.1-.004zm.367 3.337l-.096.028.096-.028zm1.511 1.457l.047-.088-.047.088zm-6.226 0l-.046-.09.046.09zm1.514-1.459l.096.029-.096-.029zm.366-3.335l.1.004.002-.07-.065-.027-.037.093zm-.59-.314l.055-.083-.056.083zM4.506 10.15l.089-.046-.02-.04-.043-.01-.026.096zm-.028-.009l-.033.095.033-.095zm-3.17-3.523l.098-.023-.097.023zM.965 5.15l.097-.023-.097.023zM3.35 2.636v.1h.107L3.45 2.63l-.1.006zm-.002-.031l-.1.006.1-.006zm1.066-1.3l-.013-.098.013.099zm9.355 0l-.013.1.013-.1zm1.066 1.3l.1.007-.1-.007zm-.003.031l-.1-.007-.007.107h.107v-.1zm.86.055l-.023.097.023-.097zm1.526 2.46l-.097-.023.097.023zm-.346 1.466l.097.023-.097-.023zm-3.117 3.497l.034.094-.034-.094zm-3.844 6.89l.096-.028-.096.029zm.78 1.178v.1h.258l-.19-.174-.067.074zm-1.17-4.5l.1-.005-.005-.095H9.52v.1zm-.853 0v-.1h-.096l-.004.095.1.005zm-.39 3.324l.095.03-.096-.03zm-.782 1.176l-.067-.074-.19.174h.257v-.1zM13.97 3.187l.1.008-.1-.008zm0 0l-.1-.008.1.008zm0 .001l-.1-.008.1.008zm-.295 3.92l-.1-.006.1.006zm-3.217 5.335l.056.083-.056-.083zm-2.732 0l-.055.082.055-.083zM4.51 7.104l.1-.007-.1.007zM4.353 5.08l.1-.008-.1.008zm0-.002l-.1.008.1-.008zM4.3 4.37l-.1.008.1-.008zM4.165 2.55l-.1.007.1-.007zm.355-.433l-.013-.099.013.1zm9.143 0l-.013.1.013-.1zm.355.433l-.1-.006.1.006zm-.049.637l.1.007-.1-.007zM2.106 6.429l.097-.023-.097.023zm1.946 2.623l-.05.086.224.129-.079-.246-.095.03zM1.76 4.962l-.097.024.097-.023zM3.41 3.456l.1-.008-.007-.092h-.093v.1zm.074.977l-.1.007.1-.007zm.054.708l.1-.005v-.002l-.1.007zm0 0l-.1.006v.002l.1-.008zm.156 2.028l-.1.007.1-.007zm11.07-3.63l-.1-.011v.004l.1.008zm.01-.083v-.1h-.089l-.01.088.099.012zm-.283 3.71l-.1-.008.1.007zm-.357 1.874l-.095-.03-.08.247.225-.13-.05-.087zm1.943-2.61l.097.023-.097-.023zm.346-1.466l-.097-.023.097.023zm-.917-1.476l-.023.098.023-.098zm-4.533 9.716c1.24-.842 2.176-1.851 2.788-3.022l-.177-.092c-.595 1.137-1.506 2.122-2.723 2.948l.113.166zm-.606.325c.21-.086.414-.194.607-.325l-.113-.165c-.18.122-.371.224-.57.304l.076.186zm.425 3.216c-.165-.557-.29-1.665-.363-3.313l-.2.008c.073 1.647.198 2.779.371 3.361l.192-.056zm1.462 1.397c-.858-.453-1.322-.928-1.462-1.397l-.192.056c.163.549.687 1.057 1.56 1.517l.094-.176zm-.238.959c.531 0 .708-.712.238-.96l-.094.177c.286.151.179.583-.144.583v.2zm-5.846 0h5.846v-.2H6.17v.2zm-.235-.96c-.472.246-.297.96.235.96v-.2c-.323 0-.43-.433-.143-.583l-.092-.177zm1.464-1.399c-.144.477-.61.952-1.464 1.399l.092.177c.871-.455 1.396-.963 1.564-1.518l-.192-.058zm.362-3.31c-.068 1.643-.193 2.75-.362 3.31l.192.058c.177-.588.302-1.719.37-3.36l-.2-.008zm-.547-.227c.194.13.398.238.61.323l.074-.185a3.135 3.135 0 01-.572-.304l-.112.166zm-2.795-3.01c.605 1.169 1.533 2.162 2.795 3.01l.112-.166c-1.24-.832-2.143-1.802-2.73-2.935l-.177.092zm.028.04a.503.503 0 00.035.011l.052-.193a.308.308 0 01-.022-.006l-.065.189zM1.212 6.64a5.003 5.003 0 003.234 3.595l.065-.19a4.803 4.803 0 01-3.104-3.451l-.195.046zM.866 5.174l.346 1.466.195-.046-.346-1.466-.195.045zM.81 4.681c0 .165.02.33.057.491l.195-.045a1.942 1.942 0 01-.052-.446h-.2zm2.15-2.146c-1.187 0-2.15.96-2.15 2.146h.2c0-1.075.873-1.946 1.95-1.946v-.2zm.391 0H2.96v.2h.391v-.2zm-.101.075l.002.032.2-.013-.003-.032-.2.013zM4.4 1.207c-.695.09-1.2.705-1.152 1.404l.2-.013a1.127 1.127 0 01.978-1.193L4.4 1.207zM9.094.9c-1.563 0-3.127.102-4.693.307l.026.198A36.008 36.008 0 019.094 1.1V.9zm4.688.307A36.11 36.11 0 009.094.9v.2c1.554 0 3.108.102 4.662.305l.026-.198zm1.152 1.405a1.327 1.327 0 00-1.152-1.405l-.026.198c.59.077 1.019.6.979 1.193l.2.014zm-.002.032l.002-.032-.199-.014-.002.031.2.015zm.29-.108h-.39v.2h.39v-.2zm.493.057a2.154 2.154 0 00-.492-.057v.2c.15 0 .3.018.446.052l.046-.195zm1.6 2.58a2.145 2.145 0 00-1.6-2.58l-.046.195a1.945 1.945 0 011.452 2.34l.194.045zM16.97 6.64l.346-1.466-.194-.046-.346 1.466.194.046zm-3.18 3.568a5.024 5.024 0 003.18-3.568l-.194-.046a4.824 4.824 0 01-3.054 3.426l.068.188zm-.103.026a.515.515 0 00.103-.026l-.068-.188a.314.314 0 01-.063.016l.028.198zm-3.871 6.799c.133.448.406.854.81 1.223l.134-.148c-.382-.35-.632-.726-.752-1.132l-.192.057zm-.394-3.346c.077 1.597.205 2.709.394 3.346l.192-.057c-.182-.611-.31-1.701-.387-3.299l-.2.01zm-.753.095h.852v-.2h-.852v.2zm-.295 3.253c.194-.643.322-1.756.395-3.349l-.2-.009c-.073 1.593-.2 2.683-.387 3.3l.192.058zm-.81 1.22c.401-.366.675-.772.81-1.22l-.192-.057c-.122.407-.373.783-.752 1.13l.135.148zm3.129-.173H7.496v.2h3.196v-.2zm3.377-14.887l-.2-.016.2.016zm0 0l-.2-.015.2.016zm-.295 3.92c.07-1.018.217-2.923.295-3.92l-.2-.015c-.077.996-.225 2.902-.295 3.922l.2.013zm-3.261 5.411c2.003-1.36 3.107-3.16 3.26-5.41l-.199-.014c-.15 2.183-1.215 3.928-3.174 5.259l.113.165zm-2.843 0a2.56 2.56 0 002.843 0l-.113-.165a2.36 2.36 0 01-2.619-.002l-.111.166zM4.41 7.112c.176 2.308 1.224 4.044 3.26 5.412l.111-.166c-1.988-1.336-3-3.018-3.172-5.261l-.2.015zm-.156-2.026l.155 2.026.2-.015-.156-2.027-.2.016zm0-.002v.002l.199-.016V5.07l-.2.016zm-.055-.708l.054.708.2-.016-.055-.707-.2.015zm-.134-1.82c.027.41.067.952.134 1.82l.2-.015a201.86 201.86 0 01-.135-1.819l-.2.014zm.442-.539a.51.51 0 00-.442.539l.2-.014a.31.31 0 01.268-.327l-.026-.198zm4.587-.3c-1.527 0-3.056.1-4.587.3l.026.198a35.19 35.19 0 014.56-.298v-.2zm4.582.3c-1.528-.2-3.055-.3-4.582-.3v.2c1.518 0 3.037.1 4.556.298l.026-.198zm.442.539a.509.509 0 00-.442-.539l-.026.198a.31.31 0 01.269.327l.2.014zm-.049.637l.05-.637-.2-.014-.05.636.2.015zm0 .001l-.2-.016.2.016zM2.009 6.452a4.196 4.196 0 001.993 2.686l.1-.173a3.996 3.996 0 01-1.899-2.56l-.194.047zm-.346-1.466l.346 1.466.194-.046-.346-1.466-.194.046zm-.036-.304c0 .102.012.204.036.304l.194-.046a1.123 1.123 0 01-.03-.258h-.2zM2.96 3.355a1.33 1.33 0 00-1.332 1.327h.2A1.13 1.13 0 012.96 3.555v-.2zm.45 0h-.45v.2h.45v-.2zm.174 1.07l-.074-.978-.2.015.074.977.2-.015zm.054.708l-.054-.709-.2.016.055.708.2-.015zm0 .002l-.2.01.2-.01zm.156 2.025l-.156-2.027-.2.015.157 2.027.199-.015zm.354 1.861a8.101 8.101 0 01-.354-1.861l-.2.015a8.3 8.3 0 00.364 1.907l.19-.06zm10.715-5.47l.01-.085-.198-.023-.01.084.198.023zm-.272 3.62c.063-.922.191-2.58.273-3.625l-.2-.015a492.83 492.83 0 00-.272 3.626l.2.014zm-.362 1.9a7.829 7.829 0 00.362-1.9l-.2-.014a7.633 7.633 0 01-.352 1.851l.19.062zm1.75-2.665a4.002 4.002 0 01-1.895 2.547l.1.173a4.202 4.202 0 001.99-2.674l-.194-.046zm.347-1.466l-.346 1.466.194.046.346-1.466-.194-.046zm-.842-1.355c.608.142.984.75.842 1.355l.194.046a1.327 1.327 0 00-.99-1.596l-.046.195zm-.26-.03c.087 0 .174.01.26.03l.045-.195a1.336 1.336 0 00-.305-.035v.2zm-.45 0h.45v-.2h-.45v.2z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconAward =
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
export default IconAward;
