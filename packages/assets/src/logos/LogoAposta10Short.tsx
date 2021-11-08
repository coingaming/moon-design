import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import SvgProps from './private/SvgProps';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg id="Layer_1" data-name="Layer 1" width="1em" height="1em" viewBox="0 0 60.53 80.29" xmlns="http://www.w3.org/2000/svg" {...props}><defs><style>{".cls-1{fill:#f5eb28;}.cls-2{fill:#d3cc26;}.cls-3{fill:#d9d226;}.cls-4{fill:#005e4c;}.cls-5{fill:#606161;}.cls-6{fill:#005847;}.cls-7{fill:#fff;}"}</style></defs><path className="cls-1" d="M161.47,18.71s-13,8.13-27,10.24c0,0,5.27,32.38,7.38,35.53s16.48,18.08,19.65,18.08S179,67.65,181.12,64.48,188.5,29,188.5,29c-14-2.11-27-10.24-27-10.24" transform="translate(-130.84 -2.26)" /><path className="cls-2" d="M161.47,18.71" transform="translate(-130.84 -2.26)" /><path className="cls-3" d="M161.47,18.71s-13,8.13-27,10.24c0,0,5.27,32.38,7.38,35.53s16.48,18.08,19.65,18.08" transform="translate(-130.84 -2.26)" /><path className="cls-4" d="M161.47,76.17a120.81,120.81,0,0,1-14.75-14.64c-1.09-2.73-3.61-15.64-5.74-28.08a90.56,90.56,0,0,0,20.49-8.15A90.45,90.45,0,0,0,182,33.45c-2.12,12.44-4.65,25.35-5.74,28.08a120.65,120.65,0,0,1-14.74,14.64" transform="translate(-130.84 -2.26)" /><polygon className="cls-5" points="30.63 0 31.94 3.31 35.5 3.54 32.76 5.82 33.64 9.27 30.63 7.36 27.61 9.27 28.5 5.82 25.75 3.54 29.31 3.31 30.63 0" /><polygon className="cls-5" points="56.94 10.87 57.91 13.32 60.53 13.49 58.51 15.16 59.16 17.71 56.94 16.3 54.72 17.71 55.37 15.16 53.34 13.49 55.97 13.32 56.94 10.87" /><polygon className="cls-5" points="3.6 10.87 4.57 13.32 7.19 13.49 5.17 15.16 5.82 17.71 3.6 16.3 1.38 17.71 2.03 15.16 0 13.49 2.63 13.32 3.6 10.87" /><path className="cls-6" d="M161.47,76.17a120.81,120.81,0,0,1-14.75-14.64c-1.09-2.73-3.61-15.64-5.74-28.08a90.56,90.56,0,0,0,20.49-8.15" transform="translate(-130.84 -2.26)" /><path className="cls-7" d="M156,58.82h-5.91V42.2h-2.36V37H156Z" transform="translate(-130.84 -2.26)" /><path className="cls-7" d="M175.85,48a13.52,13.52,0,0,1-2,7.87,6.36,6.36,0,0,1-5.48,2.91,6.8,6.8,0,0,1-5.83-2.93c-1.4-2-2.1-4.68-2.1-8.18a13.1,13.1,0,0,1,2.1-7.85,6.69,6.69,0,0,1,5.69-2.9,6.47,6.47,0,0,1,5.64,2.94Q175.86,42.84,175.85,48ZM170,48q0-5.8-1.91-5.8t-1.9,5.19q0,6.2,1.85,6.2c.67,0,1.17-.46,1.48-1.36A13.63,13.63,0,0,0,170,48Z" transform="translate(-130.84 -2.26)" /></svg>;

const LogoAposta10Short = styled(Svg)<SvgProps>(({
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

LogoAposta10Short.defaultProps = {
    
  };
export default LogoAposta10Short;