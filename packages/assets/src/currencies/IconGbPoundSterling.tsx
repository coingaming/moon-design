import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#274DD4" /><path d="M15.8 17.5002H7.89999V15.8002C8.89999 15.5002 9.39999 15.0002 9.39999 13.9002V12.8002H7.89999V11.5002H9.39999V10.0002C9.39999 9.0002 9.69999 8.2002 10.3 7.6002C10.9 7.0002 11.5 6.7002 12.8 6.7002C14.1 6.7002 15.2 7.1002 16.1 9.0002L14.6 9.9002C14.2 8.9002 13.8 8.6002 13.1 8.6002C12.4 8.6002 11.7 9.2002 11.7 10.3002V11.6002H13.7V12.8002H11.7V13.6002C11.7 14.5002 11.6 15.1002 10.9 15.7002H15.9L15.8 17.5002Z" fill="#F9F7F7" stroke="#E52931" strokeWidth={0.25} strokeMiterlimit={10} /></svg>;
type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconGbPoundSterling = styled(Svg)<SvgProps>(({
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
IconGbPoundSterling.defaultProps = {
    
  };
export default IconGbPoundSterling;