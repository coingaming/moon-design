import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import SvgProps from './private/SvgProps';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.5 28C17.1944 28 21 24.1944 21 19.5C21 14.8056 17.1944 11 12.5 11C7.80558 11 4 14.8056 4 19.5C4 24.1944 7.80558 28 12.5 28Z" fill="currentColor" /><path d="M23 11C25.2091 11 27 9.20914 27 7C27 4.79086 25.2091 3 23 3C20.7909 3 19 4.79086 19 7C19 9.20914 20.7909 11 23 11Z" fill="#de0d3e" /></svg>;

const LogoLivecasinoShort = styled(Svg)<SvgProps>(({
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

LogoLivecasinoShort.defaultProps = {
    
  };
export default LogoLivecasinoShort;