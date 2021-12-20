import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.816 16.91v-3.272h.6c.27 0 .535.06.778.175l5.56 2.634a1.09 1.09 0 001.552-.873c.156-1.504.234-3.602.234-6.298s-.078-4.794-.234-6.298a1.09 1.09 0 00-1.552-.873l-5.56 2.634a1.817 1.817 0 01-.778.175H7.004a3.999 3.999 0 00-3.997 3.884c-.003.11-.005.268-.007.475.002.213.004.371.007.481.04 1.375.77 2.57 1.851 3.26l.972 4.06c.08.531.538.926 1.078.926h.817a1.09 1.09 0 001.091-1.09zm1.69-3.754a2.543 2.543 0 00-.963-.242V5.638c.333-.017.66-.099.963-.242l5.56-2.634a.363.363 0 01.517.291c.153 1.475.23 3.55.23 6.223s-.077 4.748-.23 6.223a.364.364 0 01-.517.29l-5.56-2.633zm-1.69-.245H7.004a3.271 3.271 0 01-3.27-3.178 23.55 23.55 0 01-.007-.46c.002-.197.004-.35.007-.454a3.271 3.271 0 013.27-3.178h1.812v7.27zm-.727 3.998v-3.271H7.004c-.455 0-.893-.076-1.3-.216l.837 3.499.007.036c.024.181.178.316.36.316h.818c.2 0 .363-.163.363-.364z"
      fill="currentColor"
    />
    <path
      d="M8.816 13.638v-.1h-.1v.1h.1zm1.378.175l.043-.09-.043.09zm5.56 2.634l.043-.09-.043.09zm.354.099l-.01.1.01-.1zm1.198-.972l-.1-.01.1.01zm0-12.596l.1-.01-.1.01zm-.1-.354l.091-.043-.09.043zm-1.452-.519l.043.09-.043-.09zm-5.56 2.634l-.043-.09.043.09zM3.007 8.798l-.1-.003.1.003zM3 9.273h-.1v.001H3zm.007.481l-.1.003.1-.003zm1.851 3.26l.098-.023-.01-.04-.034-.021-.054.084zm.972 4.06l.1-.015-.003-.008-.097.023zm3.713-4.16h-.1v.095l.095.005.005-.1zm.963.242l-.043.09.043-.09zm-.963-.245h.1-.1zm0-7.268h.1-.1zm0-.005l-.005-.1-.095.005v.095h.1zm.963-.242l-.043-.09.043.09zm5.56-2.634l-.043-.09.043.09zm.484.173l-.09.043.09-.043zm.033.118l-.1.01.1-.01zm0 12.446l-.1-.01.1.01zm-.4.324l.011-.1-.01.1zm-.117-.033l-.043.09.043-.09zm-7.25-2.879v.1h.1v-.1h-.1zm-1.812 0v-.1.1zm-3.27-3.178l-.1.003.1-.003zm-.007-.46h-.1v.001h.1zm.007-.454l.1.003-.1-.003zM8.816 5.64h.1v-.1h-.1v.1zm0 .002h-.1.1zm-.727 7.995h.1v-.1h-.1v.1zm-2.386-.216l.033-.095-.172-.06.042.178.097-.024zm.838 3.499l.098-.018v-.005l-.098.023zm.007.036l.099-.013v-.005l-.1.018zm2.168-3.319v3.272h.2v-3.272h-.2zm.7-.1h-.6v.2h.6v-.2zm.82.185a1.917 1.917 0 00-.82-.185v.2c.254 0 .505.056.735.165l.086-.18zm5.561 2.633l-5.56-2.633-.086.18 5.56 2.634.086-.18zm.322.09a.988.988 0 01-.322-.09l-.085.181c.121.058.252.094.386.108l.02-.199zm1.087-.882a.99.99 0 01-1.087.882l-.02.2a1.19 1.19 0 001.306-1.062l-.199-.02zm.234-6.288c0 2.694-.078 4.789-.234 6.288l.2.02c.156-1.509.234-3.611.234-6.308h-.2zm-.234-6.288c.156 1.5.234 3.594.234 6.288h.2c0-2.697-.078-4.8-.235-6.308l-.199.02zm-.09-.321a.99.99 0 01.09.321l.2-.02a1.19 1.19 0 00-.109-.387l-.18.086zm-1.319-.471a.99.99 0 011.32.47l.18-.085a1.19 1.19 0 00-1.585-.566l.085.18zm-5.56 2.633l5.56-2.633-.085-.181-5.56 2.634.085.18zm-.82.185c.283 0 .563-.063.82-.185l-.086-.18c-.23.109-.48.165-.735.165v.2zm-2.413 0h2.412v-.2H7.004v.2zM3.107 8.801a3.898 3.898 0 013.897-3.787v-.2a4.098 4.098 0 00-4.097 3.98l.2.007zm-.007.473c.002-.207.004-.364.007-.473l-.2-.006c-.003.111-.005.27-.007.478l.2.001zm.007.477c-.003-.109-.005-.266-.007-.478l-.2.001c.002.213.004.372.007.483l.2-.006zm1.805 3.179A3.895 3.895 0 013.107 9.75l-.2.006a4.095 4.095 0 001.898 3.341l.107-.168zm1.015 4.12l-.971-4.06-.195.047.972 4.06.194-.046zm.981.85a.99.99 0 01-.98-.841l-.197.03A1.19 1.19 0 006.908 18.1v-.2zm.817 0h-.817v.2h.817v-.2zm.991-.99a.99.99 0 01-.99.99v.2a1.19 1.19 0 001.19-1.19h-.2zm.822-3.896c.32.016.634.095.925.232l.085-.18a2.645 2.645 0 00-1-.252l-.01.2zm-.095-.103v.003h.2v-.003h-.2zm0-7.268v7.268h.2V5.643h-.2zm0-.005v.005h.2v-.006l-.2.001zm1.02-.332c-.29.137-.605.216-.925.232l.01.2a2.645 2.645 0 001-.252l-.085-.18zm5.56-2.634l-5.56 2.634.085.18 5.56-2.633-.085-.181zm.617.22a.463.463 0 00-.617-.22l.086.18a.264.264 0 01.35.126l.181-.086zm.043.15a.465.465 0 00-.043-.15l-.18.086c.012.027.02.056.023.086l.2-.021zm.23 6.234c0-2.674-.077-4.753-.23-6.233l-.2.02c.153 1.47.23 3.541.23 6.213h.2zm-.23 6.233c.153-1.48.23-3.559.23-6.233h-.2c0 2.672-.077 4.743-.23 6.213l.2.02zm-.51.413a.464.464 0 00.51-.413l-.2-.02a.263.263 0 01-.289.234l-.02.2zm-.15-.042a.464.464 0 00.15.042l.021-.199a.264.264 0 01-.085-.024l-.086.181zm-5.56-2.634l5.56 2.634.086-.18-5.56-2.634-.086.18zm-1.547-.335h-.2.2zm-1.912.1h1.812v-.2H7.004v.2zm-3.37-3.275a3.371 3.371 0 003.37 3.275v-.2a3.171 3.171 0 01-3.17-3.08l-.2.005zm-.007-.462c.002.203.004.357.007.462l.2-.005a23.467 23.467 0 01-.007-.458l-.2.001zm.007-.458c-.003.105-.005.26-.007.457l.2.001c.002-.197.004-.35.007-.452l-.2-.006zm3.37-3.275a3.371 3.371 0 00-3.37 3.275l.2.006a3.171 3.171 0 013.17-3.081v-.2zm1.812 0H7.004v.2h1.812v-.2zm.1.102V5.64h-.2v.002h.2zm0 7.268V5.643h-.2v7.268h.2zm-.927.727v3.271h.2v-3.271h-.2zm-.985.1h1.085v-.2H7.004v.2zm-1.333-.222c.418.144.867.222 1.333.222v-.2c-.444 0-.87-.074-1.268-.211l-.065.189zm.967 3.382l-.837-3.5-.195.047.838 3.5.194-.047zm.008.041l-.007-.036-.196.036.006.037.197-.037zm.262.234a.264.264 0 01-.261-.229l-.198.027c.03.23.227.402.46.402v-.2zm.818 0h-.818v.2h.818v-.2zm.263-.264a.264.264 0 01-.263.264v.2a.463.463 0 00.463-.464h-.2z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconPromotions =
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
export default IconPromotions;
