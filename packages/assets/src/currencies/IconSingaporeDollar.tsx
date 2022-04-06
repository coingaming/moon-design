import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#E52931" /><path d="M9.30005 16.6004C10.8 16.4004 11.8 15.4004 11.8 13.9004C11.8 12.2004 10.7 11.7004 8.90005 11.2004C8.00005 11.0004 7.80005 10.7004 7.80005 10.4004C7.80005 10.1004 8.10005 9.90039 8.60005 9.90039C9.10005 9.90039 9.80005 10.1004 10.5 10.6004L11.7 9.10039C11 8.60039 10.2 8.20039 9.30005 8.00039C9.30005 8.00039 8.40005 7.90039 7.90005 7.90039C6.40005 8.20039 5.50005 9.20039 5.50005 10.6004C5.50005 12.3004 6.80005 12.8004 8.30005 13.3004C9.30005 13.6004 9.50005 13.8004 9.50005 14.2004C9.50005 14.5004 9.20005 14.8004 8.70005 14.8004C8.10005 14.8004 7.20005 14.5004 6.50005 13.8004L5.30005 15.3004C6.00005 16.0004 6.90005 16.4004 7.90005 16.6004C7.90005 16.6004 8.70005 16.7004 9.30005 16.6004Z" fill="#FCFCFC" /><path d="M18.7 13.9004C18.7 12.2004 17.6 11.7004 15.8 11.2004C14.9 10.9004 14.7 10.7004 14.7 10.4004C14.7 10.1004 15 9.90039 15.5 9.90039C16 9.90039 16.7 10.1004 17.4 10.6004L18.6 9.10039C17.9 8.60039 17 8.20039 16.2 8.00039V6.40039H14.8V8.00039C13.3 8.20039 12.4 9.20039 12.4 10.6004C12.4 12.3004 13.7 12.8004 15.2 13.3004C16.2 13.6004 16.4 13.8004 16.4 14.2004C16.4 14.5004 16.1 14.8004 15.6 14.8004C15 14.8004 14.1 14.5004 13.4 13.8004L12.2 15.3004C13 16.1004 13.9 16.5004 14.8 16.6004V18.1004H16.2V16.6004C17.7 16.4004 18.7 15.4004 18.7 13.9004Z" fill="#FCFCFC" /></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconSingaporeDollar = styled(Svg)<SvgProps>(({
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
IconSingaporeDollar.defaultProps = {
    
  };
export default IconSingaporeDollar;