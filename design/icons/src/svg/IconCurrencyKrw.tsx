import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.336 64l-3.66-22.14H0v-6.633h6.605l-1.07-6.454H0V22.14h4.463L.803 0H10.89l3.392 22.14h8.212L26.332 0h11.336l3.749 22.14h8.301L53.021 0h10.086l-3.66 22.14H64v6.633h-5.623l-1.072 6.454H64v6.633h-7.766L52.574 64H40.079l-4.017-22.14H27.85L23.922 64H11.336zm19.727-41.86h1.785l-.893-8.246-.892 8.246zM16.246 35.227h4.016l1.071-6.454h-6.07l.982 6.454zm12.853 0h5.713l-1.16-6.454h-3.393l-1.16 6.454zm14.639 0h4.106l.892-6.454h-6.159l1.16 6.454zM18.12 50.824l1.071-8.964h-2.053l.982 8.964zm27.76 0l.982-8.964H44.72l1.16 8.964z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyKrw = styled(Svg)<IconProps>(
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
