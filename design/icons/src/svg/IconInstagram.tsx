import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 1.802c2.672 0 2.985.012 4.041.06.977.044 1.505.206 1.858.345.469.183.802.397 1.151.747.35.349.568.682.747 1.15.135.354.302.882.345 1.859.048 1.056.06 1.37.06 4.041 0 2.672-.012 2.985-.06 4.041-.043.977-.206 1.505-.345 1.858a3.104 3.104 0 0 1-.747 1.151c-.349.35-.682.568-1.15.747-.354.135-.882.301-1.859.345-1.056.048-1.37.06-4.041.06-2.672 0-2.985-.012-4.041-.06-.977-.044-1.505-.206-1.858-.345a3.104 3.104 0 0 1-1.151-.747 3.055 3.055 0 0 1-.747-1.15c-.135-.354-.301-.882-.345-1.859-.048-1.056-.06-1.37-.06-4.041 0-2.672.012-2.985.06-4.041.044-.977.206-1.505.345-1.858.183-.469.397-.802.747-1.151.349-.35.682-.568 1.15-.747.354-.135.882-.301 1.859-.345 1.056-.052 1.373-.06 4.041-.06zM10 0C7.285 0 6.943.012 5.875.06 4.811.107 4.085.278 3.45.524c-.66.254-1.215.6-1.77 1.155A4.96 4.96 0 0 0 .523 3.45C.278 4.086.107 4.812.06 5.88.012 6.943 0 7.285 0 10c0 2.715.012 3.057.06 4.125.047 1.064.218 1.79.464 2.43.254.658.6 1.214 1.155 1.77a4.961 4.961 0 0 0 1.77 1.155c.636.246 1.362.417 2.43.464 1.068.048 1.406.06 4.125.06 2.72 0 3.057-.012 4.125-.06 1.064-.047 1.79-.218 2.43-.464a4.875 4.875 0 0 0 1.77-1.155 4.959 4.959 0 0 0 1.155-1.77c.246-.636.417-1.362.464-2.43.048-1.068.06-1.406.06-4.125 0-2.72-.012-3.057-.06-4.125-.047-1.064-.218-1.79-.464-2.43a4.873 4.873 0 0 0-1.155-1.77A4.96 4.96 0 0 0 16.559.52c-.636-.246-1.363-.417-2.43-.464C13.057.012 12.715 0 10 0z"
      fill="#FFF"
    />
    <path
      d="M10 4.867a5.138 5.138 0 1 0 .002 10.275A5.138 5.138 0 0 0 10 4.867zm0 8.468a3.334 3.334 0 1 1 0-6.669 3.334 3.334 0 0 1 0 6.669zM15.339 5.86a1.199 1.199 0 1 0 0-2.398 1.199 1.199 0 0 0 0 2.398z"
      fill="#FFF"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconInstagram = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);
