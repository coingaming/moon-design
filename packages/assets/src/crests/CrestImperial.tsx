import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="100%"
    height="1em"
    viewBox="0 0 22 22"
    xmlSpace="preserve"
    {...props}
  >
    <style type="text/css">{'\r\n\t.st0{fill:#0CD664;}\r\n'}</style>
    <g>
      <g>
        <line className="st0" x1={4} y1={12} x2={4} y2={11.9} />
        <path
          className="st0"
          d="M4,9v2.9c0,0,0,0.1,0.1,0.1l5.5,3.6c0,0,0.1,0.1,0.1,0.1v6.1C9.6,22,9.4,22,9.4,22l-8.1-8.1c0,0,0-0.1,0-0.1 V3.8c0-0.1,0.1-0.2,0.2-0.1l2.5,1.7c0.1,0,0.1,0,0.2,0L9.4,0C9.4,0,9.6,0,9.6,0.1v12c0,0.1-0.1,0.2-0.2,0.1L4.2,8.9 C4.1,8.8,4,8.9,4,9z"
        />
      </g>
      <g>
        <line className="st0" x1={18} y1={11.9} x2={18} y2={12} />
        <path
          className="st0"
          d="M18,9v2.9c0,0,0,0.1-0.1,0.1l-5.5,3.6c0,0-0.1,0.1-0.1,0.1v6.1c0,0.1,0.2,0.2,0.2,0.1l8.1-8.1 c0,0,0-0.1,0-0.1V3.8c0-0.1-0.1-0.2-0.2-0.1l-2.5,1.7c-0.1,0-0.1,0-0.2,0L12.6,0c-0.1-0.1-0.2,0-0.2,0.1v12c0,0.1,0.1,0.2,0.2,0.1 l5.2-3.4C17.9,8.8,18,8.9,18,9z"
        />
      </g>
    </g>
  </svg>
);
type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const CrestImperial = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
  })
);
CrestImperial.defaultProps = {
  color: 'bulma.100',
};
export default CrestImperial;
