import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 48 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M47.595 6.991a.86.86 0 00-.629-.79L24.213.029a.849.849 0 00-.436 0L1.023 6.2a.862.862 0 00-.63.792c-.655 13.564 1.322 24.282 6.046 32.768 3.838 6.894 9.456 12.175 17.178 16.147a.831.831 0 00.767-.001c7.749-4.011 13.372-9.277 17.19-16.101 4.74-8.47 6.71-19.204 6.021-32.815z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.392 14.537c5.983 0 10.832 4.847 10.832 10.833s-4.849 10.833-10.832 10.833c-5.984 0-10.833-4.847-10.833-10.833 0-5.976 4.85-10.833 10.833-10.833zm-.04 2.06c4.9 0 8.865 3.956 8.865 8.843 0 4.887-3.966 8.844-8.865 8.844-4.9 0-8.865-3.957-8.865-8.844s3.966-8.844 8.865-8.844z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.781 12.474a7.227 7.227 0 017.222 7.222 7.22 7.22 0 01-7.222 7.222 7.227 7.227 0 01-7.222-7.222 7.214 7.214 0 017.222-7.222z"
      fill="#fff"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconSbShield = styled(Svg)<IconProps>(
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
