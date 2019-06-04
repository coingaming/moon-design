import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M60.794 36l3.896-6.744c.51 2.167.808 4.419.808 6.744a29.39 29.39 0 0 1-.808 6.746L60.794 36zM48.441 57.552h7.63c-3.239 3.021-7.135 5.335-11.471 6.658l3.841-6.658zm-24.882 0L27.4 64.21c-4.336-1.323-8.236-3.637-11.474-6.658h7.633zm0-43.105h-7.633c3.238-3.021 7.138-5.335 11.474-6.661l-3.841 6.661zm24.882 0l-3.845-6.661c4.34 1.326 8.236 3.64 11.474 6.661h-7.629zm9.842 20.102h-9.842l-4.963-8.6 4.963-8.6h9.842l4.964 8.6-4.964 8.6zm-27.25 12.956h9.841l5.01 8.677-4.917 8.523h-9.935l-4.963-8.604 4.963-8.596zM13.522 37.45h9.93l4.964 8.604-4.964 8.596h-9.93l-4.964-8.596 4.964-8.604zm9.93-20.101l4.964 8.6-4.964 8.6h-9.93l-4.964-8.6 4.964-8.6h9.93zm17.421 7.15h-9.842l-4.963-8.6 4.963-8.6h9.935l4.917 8.518-5.01 8.681zm-9.842 20.104L26.07 36l4.963-8.6h9.842l4.963 8.6-4.963 8.603h-9.842zm17.41 10.047l-4.964-8.596 4.963-8.604h9.842l4.964 8.604-4.964 8.596h-9.842zM6.501 36c0-2.24.275-4.415.747-6.515L11.009 36l-3.756 6.514A29.4 29.4 0 0 1 6.503 36zM36 3.6C18.135 3.6 3.6 18.134 3.6 36c0 17.865 14.535 32.4 32.4 32.4 17.866 0 32.4-14.535 32.4-32.4C68.4 18.134 53.866 3.6 36 3.6z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconSoccer = styled(Svg)<IconProps>(
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
