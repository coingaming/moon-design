import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.225 3.503l-.557.615h2.814l.129.475.988-.099 1.06-.108.775-.078.224-.747v-.05c.584.027 1.814.114 2.82.187l.584.971 1.027-.735.093-.067 1.097.181-.1.105-.42.458.143.607.584 2.44v1.785l-.035.02-.584.34v.582a2.415 2.415 0 00-.54.829l-.224.6.388.511c.113.157.216.32.31.49.04.365.078 1.406.075 1.954-.32.244-.534.6-.6.997l-.222 1.791 1.44-.446v6.29a7.697 7.697 0 00-1.367-.14h-2.818l.292.292a1.103 1.103 0 00-.166-.116l-.782-.47-.647.66-.269.268h-2.84a2.946 2.946 0 00-1.459.466l-1.1-.396-.749-.274-.154.175c-.073-.09-.12-.152-.123-.152l-.813-1.01-.934.922-.079.08-.907-.345-.793-.37-.516.711a.429.429 0 01-.213.12 5.556 5.556 0 00-.356.05 1.488 1.488 0 01-.192.026H5.176c-.776 0-.93-.067-1.27-.213-.113-.05-.244-.105-.402-.167v-2.137c0-.508 0-.514.123-.584l.49-.35v-3.791l-.548-.344-.065-.041v-1.167l.272-.27.34-.342v-1.916l-.466-.35-.023-.018.262-.367.356-.499-.207-.583-.536-1.496V4.118H7.54a2.167 2.167 0 001.569.612h1.377a1.51 1.51 0 001.23-.612h.548l.348-.563.037-.061h.584l-.009.009zm2.526-1.167h-3.695c-.059.105-.269.344-.435.615a1.15 1.15 0 00-.566.158c-.242.163-.242.455-.566.455H9.11c-.81 0-.941-.613-.941-.613h-5.22a.942.942 0 00-.613.998v5.524l.607 1.688-.607.846v.691l.612.461v.843l-.612.615v2.301l.612.385v2.532c-.641.455-.612.997-.612 1.621v2.917c1.435.359 1.196.688 2.838.688h2.38c.221 0 .396-.058.615-.081a1.616 1.616 0 001-.54l1.61.612.615-.612s.803.997.983 1.228l.537-.616 1.7.616s.627-.6 1.307-.616h3.298l.616-.612c.256.155.029.612 2.377.612a5.44 5.44 0 001.228-.151c-.1-.333-.108-.266-.307-.461 0 0 1.537 0 2.535.612v-9.51l-1.228.379c.023-.195.583-.452.612-.846.021-.855-.012-1.71-.099-2.56a4.08 4.08 0 00-.513-.893c.134-.284.346-.524.612-.691v-.46l.616-.357V7.522L25.05 4.96l.616-.665v-.75l-.65-.562-2.106-.356-.487.347-.242-.406s-3.182-.233-3.76-.233c-.738 0-.633.055-.875.875l-1.061.108-.102-.382h-1.091l.178-.196c.186-.177.122-.107.268-.42l.012.015z"
      fill="#D74343"
    />
    <path
      d="M18.86 6.673h.003l1.904 1.047-.636 3.462-4.444-2.9 3.173-1.61zM7.713 21.331l-2.17-1.878 1.86-3.76 4.34 4.7-4.03.938zM20.948 21.331h-2.19L5.543 7.376c.145-.057.285-.127.417-.21.324-.204.735-.493 1.056-.493a.875.875 0 01.636.21c.353.291 1.65 1.201 1.65 1.201l.237.42c.428.02.44.062.982.458l11.932 8.093c-.088.202-1.505 4.276-1.505 4.276z"
      fill="#D74343"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconESportsDota2 =
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
export default IconESportsDota2;
