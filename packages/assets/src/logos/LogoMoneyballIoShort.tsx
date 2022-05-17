import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.8635 7.40273H13.1367C9.49312 7.40273 6.53945 10.3564 6.53945 14C6.53945 17.6436 9.49312 20.5973 13.1367 20.5973H14.8635C18.5071 20.5973 21.4608 17.6436 21.4608 14C21.4608 10.3564 18.5071 7.40273 14.8635 7.40273ZM13.1367 1.21289C6.0746 1.21289 0.349609 6.93788 0.349609 14C0.349609 21.0621 6.07455 26.7871 13.1367 26.7871H14.8635C21.9256 26.7871 27.6507 21.0621 27.6507 14C27.6507 6.93788 21.9256 1.21289 14.8635 1.21289H13.1367Z" fill="#EF3124" /></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoMoneyballIoShort = styled(Svg)<SvgProps>(({
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
LogoMoneyballIoShort.defaultProps = {
    
  };
export default LogoMoneyballIoShort;