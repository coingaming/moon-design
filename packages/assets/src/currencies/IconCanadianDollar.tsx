import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white" /><path d="M16.1 14.1998C16.1 12.0998 14.7 11.4998 12.5 10.7998C11.4 10.3998 11 10.1998 11 9.7998C11 9.3998 11.3 9.1998 12 9.1998C12.7 9.1998 13.4 9.39981 14.4 10.0998L15.9 8.1998C15.1 7.4998 14 6.9998 12.9 6.7998V4.7998H11.2V6.6998C9.3 6.9998 8.2 8.2998 8.2 9.9998C8.2 12.0998 9.8 12.7998 11.7 13.2998C12.9 13.6998 13.2 13.8998 13.2 14.3998C13.2 14.7998 12.8 15.0998 12.2 15.0998C11.4 15.0998 10.4 14.6998 9.5 13.8998L8 15.7998C9 16.7998 10.1 17.2998 11.3 17.4998V19.3998H13V17.5998C14.8 17.1998 16.1 15.9998 16.1 14.1998Z" fill="#E52931" /><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white" /></mask><g mask="url(#mask0)"><rect width={6.5} height={24} fill="#E52931" /><rect x={17.5} width={6.5} height={24} fill="#E52931" /></g></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconCanadianDollar = styled(Svg)<SvgProps>(({
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
IconCanadianDollar.defaultProps = {
    
  };
export default IconCanadianDollar;