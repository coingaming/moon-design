import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <path
        d="M14.636 4.583c-.003 2.53-2.11 4.58-4.711 4.583-2.602 0-4.712-2.052-4.712-4.583S7.323 0 9.925 0s4.711 2.052 4.711 4.583zM9.925 7.369c1.582 0 2.864-1.247 2.864-2.786s-1.282-2.786-2.864-2.786c-1.582 0-2.865 1.247-2.865 2.786.002 1.538 1.284 2.784 2.865 2.786zM2.425 20a.913.913 0 0 1-.925-.898c0-4.56 3.814-8.268 8.5-8.268 4.687 0 8.5 3.708 8.5 8.268a.912.912 0 0 1-.923.898H2.425zm14.163-1.796c-.459-3.15-3.283-5.57-6.588-5.574-3.304.004-6.128 2.424-6.587 5.574h13.175z"
        id="icon-profile_svg__a"
      />
    </defs>
    <use
      fill="currentColor"
      fillRule="nonzero"
      xlinkHref="#icon-profile_svg__a"
      transform="translate(-1)"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconProfile = styled(Svg)<IconProps>(
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
