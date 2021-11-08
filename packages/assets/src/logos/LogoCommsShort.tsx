import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import SvgProps from './private/SvgProps';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.6453 21C4.76607 21 0 16.299 0 10.5C0 4.70101 4.76607 0 10.6453 0C16.5246 0 21.2906 4.70101 21.2906 10.5C21.2906 16.299 16.5246 21 10.6453 21Z" fill="#FF4E64" /><path fillRule="evenodd" clipRule="evenodd" d="M10.6453 36C4.76607 36 0 31.299 0 25.5C0 19.701 4.76607 15 10.6453 15C16.5246 15 21.2906 19.701 21.2906 25.5C21.2906 31.299 16.5246 36 10.6453 36Z" fill="#2896FE" /><path fillRule="evenodd" clipRule="evenodd" d="M25.2816 21C19.4726 21 14.7635 16.299 14.7635 10.5C14.7635 4.70101 19.4726 0 25.2816 0C31.0905 0 35.7996 4.70101 35.7996 10.5C35.7996 16.299 31.0905 21 25.2816 21Z" fill="#885ED5" /><path fillRule="evenodd" clipRule="evenodd" d="M25.2816 36C19.4726 36 14.7635 31.299 14.7635 25.5C14.7635 19.701 19.4726 15 25.2816 15C31.0905 15 35.7996 19.701 35.7996 25.5C35.7996 31.299 31.0905 36 25.2816 36Z" fill="#FBD3E0" /></svg>;

const LogoCommsShort = styled(Svg)<SvgProps>(({
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
  fontSize,
  verticalAlign
}));

const CasinoBonus: React.FC<SvgProps> = props => {
  const theme = useTheme();
  const secondaryColor = theme.color.bulma[100];
  const attributes = ({ ...props,
    secondaryColor
  } as any);
  return null;
};

LogoCommsShort.defaultProps = {
    
  };
export default LogoCommsShort;