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
      d="M20.901 24.983l-.353-.353.353.353zM25.5 9.423H25h.5zm0 10.23h.5-.5zm-5.846 0v-.5a.5.5 0 00-.5.5h.5zm-2.55-8.602a.5.5 0 10-1 0h1zm-1 5.949a.5.5 0 001 0h-1zm2.775 0a.5.5 0 001 0h-1zM23 11.55a.5.5 0 000-1v1zm-.483 2.975a.5.5 0 100-1v1zm-3.138-1a.5.5 0 100 1v-1zm-7.241.248a.5.5 0 000 1v-1zm-.845-2.722l-.072-.495a.526.526 0 00-.022.004l.094.49zm2.204.87a.5.5 0 00.66-.75l-.66.75zm11.133 8.627l-4.082 4.082.707.707 4.082-4.082-.707-.707zM22.577 6H9.423v1h13.154V6zM7 22.577V9.423H6v13.154h1zM22.577 7A2.423 2.423 0 0125 9.423h1A3.423 3.423 0 0022.577 6v1zM9.423 6A3.423 3.423 0 006 9.423h1A2.423 2.423 0 019.423 7V6zm0 19A2.423 2.423 0 017 22.577H6A3.423 3.423 0 009.423 26v-1zm10.23 0H9.424v1h10.23v-1zM26 19.654V9.424h-1v10.23h1zM20.154 25.5v-5.846h-1V25.5h1zm-.5-5.346H25.5v-1h-5.846v1zm.894 4.476c-.237.237-.559.37-.894.37v1c.6 0 1.176-.238 1.6-.663l-.706-.707zm4.789-3.375c.424-.425.663-1 .663-1.601h-1c0 .335-.133.657-.37.894l.707.707zM16.103 11.05V17h1v-5.95h-1zM19.88 17v-5.578h-1V17h1zm0-5.578c0-.05.013.005-.051.07-.066.068-.127.059-.087.059v-1a.858.858 0 00-.63.244.88.88 0 00-.232.627h1zm-.138.129H23v-1h-3.259v1zm2.776 1.974H19.38v1h3.138v-1zm-10.38 1.248h1.57v-1h-1.57v1zm1.57 0c.04 0-.02.01-.087-.058-.063-.065-.051-.12-.051-.07h1a.88.88 0 00-.232-.628.858.858 0 00-.63-.244v1zm-.138-.128v1.116h1v-1.116h-1zm0 1.116a.432.432 0 01-.265.394l.323.946c.582-.199.942-.773.942-1.34h-1zm-.265.394c-.308.105-.736.221-1.649.221v1c1.018 0 1.556-.132 1.972-.275l-.323-.946zm-1.649.221c-.836 0-1.354-.29-1.671-.66-.328-.386-.484-.913-.484-1.443h-1c0 .71.206 1.484.723 2.09.528.62 1.338 1.013 2.432 1.013v-1zM9.5 14.273c0-.581.087-1.197.36-1.696.261-.474.709-.878 1.528-1.035l-.19-.982c-1.112.214-1.81.801-2.214 1.536-.39.71-.484 1.52-.484 2.177h1zm1.866-2.728c.758-.11 1.307.002 1.656.13a2.09 2.09 0 01.466.24c.007.005.012.01.014.01 0 .001 0 .001 0 0H13.5l-.001-.002h-.001v-.001l.33-.376.33-.375-.002-.002-.002-.002a.81.81 0 00-.065-.052 2.138 2.138 0 00-.155-.105 3.074 3.074 0 00-.568-.274c-.496-.182-1.214-.317-2.146-.18l.146.99z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MediaGif =
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
export default MediaGif;
