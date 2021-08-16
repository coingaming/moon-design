import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.8601 15.3904C15.0067 15.5367 15.2441 15.5365 15.3904 15.3899C15.5367 15.2433 15.5365 15.0059 15.3899 14.8596L14.8601 15.3904ZM11.6315 11.6379L11.3665 11.3726L11.6315 11.6379ZM7.17788 13.1058C3.904 13.1058 1.25 10.4518 1.25 7.17788H0.5C0.5 10.866 3.48979 13.8558 7.17788 13.8558V13.1058ZM1.25 7.17788C1.25 3.904 3.904 1.25 7.17788 1.25V0.5C3.48979 0.5 0.5 3.48979 0.5 7.17788H1.25ZM7.17788 1.25C10.4518 1.25 13.1058 3.904 13.1058 7.17788H13.8558C13.8558 3.48979 10.866 0.5 7.17788 0.5V1.25ZM13.1058 7.17788C13.1058 8.81646 12.4414 10.2992 11.3665 11.3726L11.8965 11.9033C13.1065 10.6949 13.8558 9.02356 13.8558 7.17788H13.1058ZM11.3665 11.3726C10.2936 12.4439 8.81339 13.1058 7.17788 13.1058V13.8558C9.02009 13.8558 10.6887 13.1093 11.8965 11.9033L11.3665 11.3726ZM11.3666 11.9033L14.8601 15.3904L15.3899 14.8596L11.8964 11.3725L11.3666 11.9033Z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSearch = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
  ],
);
export default IconSearch;
