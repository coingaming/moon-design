import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import SvgProps from './private/SvgProps';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="100%" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.3637 22.4523C18.5637 22.4523 23.5898 17.4262 23.5898 11.2262C23.5898 5.02612 18.5637 0 12.3637 0C6.16365 0 1.13753 5.02612 1.13753 11.2262C1.13753 17.4262 6.16365 22.4523 12.3637 22.4523ZM12.3638 20.1522C17.2935 20.1522 21.2898 16.1559 21.2898 11.2262C21.2898 6.29649 17.2935 2.3002 12.3638 2.3002C7.43411 2.3002 3.43781 6.29649 3.43781 11.2262C3.43781 16.1559 7.43411 20.1522 12.3638 20.1522Z" fill="currentColor" /><path d="M6.22233 10.8552C9.2198 10.8552 11.6497 8.42531 11.6497 5.42783C11.6497 2.43036 9.2198 0.000427246 6.22233 0.000427246C3.22485 0.000427246 0.794922 2.43036 0.794922 5.42783C0.794922 8.42531 3.22485 10.8552 6.22233 10.8552Z" fill="#0CD664" /></svg>;

const LogoSportsbetShort = styled(Svg)<SvgProps>(({
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

LogoSportsbetShort.defaultProps = {
    
  };
export default LogoSportsbetShort;