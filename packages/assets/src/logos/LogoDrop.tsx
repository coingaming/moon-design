import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M26 18.86C26 24.4602 21.5228 29 16 29C10.4772 29 6 24.4602 6 18.86C6 11.1798 14.9216 3 16 3C17.0784 3 26 11.1798 26 18.86Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /><path d="M22 19C22 22.3137 19.3137 25 16 25" stroke="currentColor" strokeWidth={2} strokeLinecap="round" /></svg>;
type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoDrop = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  theme
}) => ({
  ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize
}));
LogoDrop.defaultProps = {
    
  };
export default LogoDrop;