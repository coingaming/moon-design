import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      fill="#E52931"
    />
    <path
      d="M15.7 8.6002H11.9V11.0002H15.4V13.0002H11.9V14.4002H13.9V15.6002H11.9V17.6002H9.50005V15.6002H8.30005V14.4002H9.50005V6.7002H15.8L15.7 8.6002Z"
      fill="white"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const IconSwissFranc = styled(Svg)<SvgProps>(
  ({
    color, height, width, fontSize, verticalAlign, theme,
  }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  }),
);
IconSwissFranc.defaultProps = {
  verticalAlign: 'middle',
};
export default IconSwissFranc;
