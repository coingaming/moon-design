import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 37 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.42 27.552c8.577 0 14.849-3.712 14.849-13.568 0-7.936-4.544-13.952-15.36-13.952H4.845v21.504H.557v6.016h4.288v3.2H.557v5.504h4.288V44h10.368v-7.744H29.1v-5.504H15.213v-3.2h6.208zM15.086 9.504h4.48c3.648 0 5.632 2.048 5.632 5.248 0 3.328-1.856 5.504-5.632 5.504h-4.48V9.504z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyRub = styled(Svg)<IconProps>(
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
