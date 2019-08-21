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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.032 8.233c-.436 2.177-1.697 4.399-3.553 6.255-2.717 2.72-6.1 4.03-8.712 3.647 2.244-.407 5.087-2.06 7.692-4.668 2.597-2.599 4.253-5.435 4.665-7.677a7.243 7.243 0 01-.092 2.443zM5.508 5.513C7.915 3.1 10.85 1.791 13.305 1.791c.31 0 .607.029.9.07-2.242.413-5.08 2.068-7.677 4.669-2.597 2.6-4.253 5.439-4.666 7.681-.374-2.611.936-5.989 3.646-8.7zm7.38 7.383c-3.725 3.728-8.195 5.553-9.766 3.979-1.57-1.57.252-6.046 3.976-9.773 2.814-2.815 6.053-4.543 8.147-4.543.678 0 1.236.181 1.62.566 1.569 1.57-.252 6.044-3.976 9.771zm4.547-10.343C14.647-.237 9.04.835 4.938 4.94.835 9.047-.236 14.656 2.552 17.446 3.602 18.496 5.051 19 6.668 19c2.68 0 5.823-1.38 8.381-3.94 1.968-1.969 3.307-4.338 3.773-6.67.478-2.39-.014-4.463-1.387-5.837z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconSportsRugby = styled(Svg)<IconProps>(
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
