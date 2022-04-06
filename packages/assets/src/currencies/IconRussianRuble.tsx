import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#274DD4" /><path d="M9.01319 6.09961V10.9996H8.11319V12.9996H9.01319V17.8996H11.7132V12.9996H13.8132C15.4132 12.9996 17.1132 11.7996 17.1132 9.59961C17.1132 7.39961 15.6132 6.09961 13.7132 6.09961H9.01319ZM11.6132 8.09961H13.4132C14.4132 8.19961 14.9132 8.69961 14.9132 9.49961C14.9132 10.3996 14.3132 10.8996 13.4132 10.8996H11.6132V8.09961Z" fill="#FCFAFA" /><path d="M8.11319 14.1996H14.8132V15.8996H8.11319V14.1996Z" fill="#E52931" /></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconRussianRuble = styled(Svg)<SvgProps>(({
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
IconRussianRuble.defaultProps = {
    
  };
export default IconRussianRuble;