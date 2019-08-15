import * as React from 'react';
import styled from '@emotion/styled';

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
      d="M5.921 6c.548 0 1.028.127 1.439.381.418.248.74.623.966 1.126.232.502.349 1.118.349 1.85v1.63H4V9.824h3.298V9.48c0-.826-.168-1.414-.503-1.764-.336-.356-.737-.534-1.202-.534H4.555l-.103-1c.212-.045.452-.087.72-.125.273-.038.523-.057.75-.057zM9.284 9.404h1.479v1.583h-1.48V9.404zM14.11 12.856a14.594 14.594 0 001.726-.153l.143.992c-.342.082-.712.152-1.11.21a6.682 6.682 0 01-1.037.095c-.753 0-1.336-.207-1.747-.62-.41-.407-.616-.966-.616-1.678 0-.896.332-1.497.997-1.802a2.896 2.896 0 01-.38-1.44c0-.56.126-1.014.38-1.363.26-.356.578-.61.955-.763.377-.153.75-.23 1.12-.23.205 0 .438.023.699.068.267.044.52.108.76.19l-.062 1.192c-.527-.19-.952-.286-1.274-.286a1.34 1.34 0 00-.842.286c-.24.19-.36.512-.36.963 0 .47.15.862.452 1.173.26.006.528.032.802.076.274.039.48.08.616.124v1.097a5.035 5.035 0 00-.678-.124 4.82 4.82 0 00-.709-.067c-.342 0-.613.083-.812.248-.191.172-.287.42-.287.744s.102.582.308.772c.212.197.53.296.956.296z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyIqd = styled(Svg)<IconProps>(
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
