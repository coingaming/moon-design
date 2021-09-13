import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#274DD4" /><g clipPath="url(#clip0)"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={-1} y={-1} width={26} height={26}><path d="M12 24.25C18.7655 24.25 24.25 18.7655 24.25 12C24.25 5.23451 18.7655 -0.25 12 -0.25C5.23451 -0.25 -0.25 5.23451 -0.25 12C-0.25 18.7655 5.23451 24.25 12 24.25Z" fill="#274DD4" stroke="white" strokeWidth={0.5} /></mask><g mask="url(#mask0)"><path d="M0 4.75H-0.25V5V7V7.25H0H4.75L4.75 25V25.25H5H7H7.25V25L7.25 7.25H24H24.25V7V5V4.75H24H7.25V-1V-1.25L7 -1.25L5 -1.25H4.75V-1V4.75H0Z" fill="#E52931" stroke="white" strokeWidth={0.5} /></g></g><path d="M9.5 17.5996V9.59961H11V13.7996L12.8 11.7996H14.7L12.7 13.8996L14.8 17.5996H13.2L11.7 14.9996L11 15.6996V17.5996H9.5Z" fill="#F9F7F7" /><path d="M17.2 17.5996H15.7V11.7996H17.1V12.5996C17.3 12.1996 17.6 11.9996 17.8 11.7996C18 11.6996 18.2 11.5996 18.5 11.5996C18.8 11.5996 19.2 11.6996 19.5 11.8996L19 13.1996C18.7 12.9996 18.5 12.8996 18.3 12.8996C18.1 12.8996 17.9 12.9996 17.8 13.0996C17.7 13.1996 17.5 13.3996 17.4 13.6996C17.3 13.9996 17.3 14.6996 17.3 15.5996V17.5996H17.2Z" fill="#F9F7F7" /><defs><clipPath id="clip0"><rect width={24} height={24} rx={12} fill="white" /></clipPath></defs></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconIcelandicKrona = styled(Svg)<SvgProps>(({
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
IconIcelandicKrona.defaultProps = {
    
  };
export default IconIcelandicKrona;