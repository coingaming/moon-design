import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.0139 19.8849C14.0139 23.1316 16.697 25.7636 20.007 25.7636C23.3169 25.7636 26 23.1316 26 19.8849C26 16.6381 23.3169 14.006 20.007 14.006C16.697 14.006 14.0139 16.6381 14.0139 19.8849ZM5.83436 0C9.05656 0 11.6687 2.64165 11.6687 5.90003V19.3848C11.6687 24.4049 15.3102 27.9759 20.007 27.9759C20.4402 27.9759 20.8653 27.943 21.2807 27.8801C19.0312 29.7126 16.1407 30.8148 12.9879 30.8148C5.81487 30.8148 0 25.1107 0 18.0746V5.90003C0 2.64165 2.61214 0 5.83436 0Z" fill="#D82E2E" /></svg>;
type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoLuckyslotsShort = styled(Svg)<SvgProps>(({
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
LogoLuckyslotsShort.defaultProps = {
    
  };
export default LogoLuckyslotsShort;