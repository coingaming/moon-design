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
      d="M6.5 16.524H7h-.5zm0 7.52H6h.5zM24.038 25.5V25v.5zm-16.076 0v.5-.5zM25.5 16.524H25h.5zm0 7.52h.5-.5zm-.773-9.494l-.367.34.367-.34zM18.15 7.44l-.367.34.367-.34zm-4.3 0l.367.34-.367-.34zM7.273 14.55l-.367-.34.367.34zm5.804 3.67h.5-.5zm0 6.552h-.5.5zm5.115.728V25v.5zm-4.384 0v.5-.5zm5.115-7.28h.5-.5zm0 6.552h-.5.5zm-.73-7.28v.5-.5zm-4.385 0v.5-.5zM6 16.523v7.52h1v-7.52H6zM24.038 25H7.962v1h16.076v-1zM25 16.524v7.52h1v-7.52h-1zm.094-2.313l-6.577-7.112-.734.68 6.576 7.11.735-.678zm-11.61-7.112l-6.578 7.112.734.679 6.577-7.112-.734-.679zm5.033 0a3.43 3.43 0 00-5.034 0l.734.68a2.43 2.43 0 013.566 0l.734-.68zM26 16.524c0-.858-.324-1.683-.906-2.313l-.735.679c.412.445.641 1.029.641 1.634h1zm-19 0c0-.605.228-1.189.64-1.634l-.734-.68A3.406 3.406 0 006 16.525h1zm-1 7.52C6 25.126 6.88 26 7.962 26v-1A.959.959 0 017 24.044H6zM24.038 26A1.959 1.959 0 0026 24.044h-1a.959.959 0 01-.962.956v1zm-11.461-7.78v6.552h1v-6.553h-1zM18.192 25h-4.384v1h4.384v-1zm.231-6.78v6.552h1V18.22h-1zm-.23-1.229h-4.385v1h4.384v-1zm1.23 1.229a1.23 1.23 0 00-1.23-1.229v1c.128 0 .23.104.23.229h1zm-5.846 0a.23.23 0 01.23-.229v-1a1.23 1.23 0 00-1.23 1.228h1zm-1 6.552c0 .68.553 1.228 1.23 1.228v-1a.23.23 0 01-.23-.228h-1zM18.192 26a1.23 1.23 0 001.231-1.228h-1a.23.23 0 01-.23.228v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const GenericHome = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default GenericHome;
