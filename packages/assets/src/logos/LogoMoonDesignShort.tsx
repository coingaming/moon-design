import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M8.64668 19.2933C12.3175 19.2933 15.2933 16.3175 15.2933 12.6466C15.2933 8.97581 12.3175 6 8.64668 6C4.97582 6 2 8.97581 2 12.6466C2 16.3175 4.97582 19.2933 8.64668 19.2933Z" fill="currentColor" /><path d="M22 8.2523C22 9.49622 20.9916 10.5046 19.7477 10.5046C18.5038 10.5046 17.4954 9.49622 17.4954 8.2523C17.4954 7.00839 18.5038 6 19.7477 6C20.9916 6 22 7.00839 22 8.2523Z" fill="currentColor" /></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoMoonDesignShort = styled(Svg)<SvgProps>(({
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
LogoMoonDesignShort.defaultProps = {
    
  };
export default LogoMoonDesignShort;