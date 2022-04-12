import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#E52931" /><path d="M12.8 16.1998H6.5V15.2998L10 10.7998H6.8V9.1998H12.7V10.2998L9.4 14.6998H12.8V16.1998Z" fill="#FCFCFC" /><path d="M17.2 10.9998L16.3 11.5998V16.1998H14.1V12.9998L13.2 13.5998V11.7998L14.1 11.1998V5.7998H16.3V9.7998L17.2 9.1998V10.9998Z" fill="#FCFCFC" /></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconPolandZloty = styled(Svg)<SvgProps>(({
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
IconPolandZloty.defaultProps = {
    
  };
export default IconPolandZloty;