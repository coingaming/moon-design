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
      d="M4.338 15.91A8.13 8.13 0 0 1 10 13.626a8.11 8.11 0 0 1 5.659 2.283A8.159 8.159 0 0 1 10 18.194a8.161 8.161 0 0 1-5.662-2.285zM3.784 4.673A8.907 8.907 0 0 0 10 7.18a8.933 8.933 0 0 0 6.216-2.503 8.151 8.151 0 0 1-.003 10.65A8.908 8.908 0 0 0 10 12.82c-2.34 0-4.532.892-6.217 2.504a8.154 8.154 0 0 1 .001-10.65zm11.877-.582A8.132 8.132 0 0 1 10 6.373c-2.14 0-4.13-.813-5.661-2.282a8.156 8.156 0 0 1 11.322 0zm.88 12.069A8.95 8.95 0 0 0 19 10c0-4.963-4.037-9-9-9a8.965 8.965 0 0 0-6.501 2.794c-.006.003-.013.002-.018.005-.006.007-.004.018-.01.024A8.961 8.961 0 0 0 1 10c0 4.963 4.036 9 9 9 2.55 0 4.85-1.07 6.49-2.781.008-.008.022-.004.032-.013.013-.012.01-.031.02-.045z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconSportsTennis = styled(Svg)<IconProps>(
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
