import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><title>{"Betadda.com"}</title><circle cx={14.5} cy={14.5} r={13.5} fill="#FF9933" /><circle cx={7.5} cy={7.5} r={7.5} fill="#1CA30F" /></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoBetaddaShort = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  theme
}) => ({ ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize
}));
LogoBetaddaShort.defaultProps = {
    
  };
export default LogoBetaddaShort;