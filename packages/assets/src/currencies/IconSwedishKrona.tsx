import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#274DD4" /><path d="M7.50001 5.39999H6.20001V6.69999H7.50001V5.39999Z" fill="#FFC522" /><path d="M8.80005 17.5998V9.2998H10.4V13.6998L12.3 11.5998H14.3L12.2 13.7998L14.4 17.5998H12.7L11.2 14.8998L10.5 15.6998V17.5998H8.80005Z" fill="#F9F7F7" /><path d="M16.9 17.5998H15.3V11.5998H16.8V12.4998C17.1 12.0998 17.3 11.7998 17.5 11.6998C17.7 11.5998 17.9 11.4998 18.2 11.4998C18.6 11.4998 18.9 11.5998 19.3 11.7998L18.8 13.1998C18.5 12.9998 18.3 12.8998 18 12.8998C17.8 12.8998 17.6 12.9998 17.4 13.0998C17.2 13.1998 17.1 13.3998 17 13.7998C16.9 14.0998 16.9 14.7998 16.9 15.7998V17.5998Z" fill="#F9F7F7" /><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#274DD4" /></mask><g mask="url(#mask0)"><path d="M0 5H24V7H0V5Z" fill="#FFC522" /><path d="M7 -1L7 25H5L5 -1L7 -1Z" fill="#FFC522" /></g></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const IconSwedishKrona = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  verticalAlign,
  theme
}) => ({ ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize,
  verticalAlign
}));
IconSwedishKrona.defaultProps = {
    verticalAlign: "middle",
  };
export default IconSwedishKrona;