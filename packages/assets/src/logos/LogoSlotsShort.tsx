import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M13.0817 14.1682L10.5442 13.1532C8.68331 12.4765 7.55552 11.9126 7.04801 11.4615C6.5405 11.0667 6.31494 10.3901 6.31494 9.54422C6.31494 7.62697 7.89385 6.27362 10.2058 6.27362C11.7284 6.27362 13.0253 7.00668 14.2095 8.47281L18.7771 7.06307C16.8598 3.51052 14.0403 1.70605 10.375 1.70605C7.95024 1.70605 5.86383 2.49551 4.05936 3.96164C2.36767 5.42777 1.52182 7.34502 1.52182 9.657C1.52182 12.8712 3.43907 15.2396 7.21718 16.6493L10.0367 17.7207C11.7847 18.3974 12.9689 18.9613 13.5328 19.4688C14.0403 19.9199 14.3223 20.5966 14.3223 21.4988C14.3223 22.4575 13.9839 23.3033 13.3073 24.0364C12.5742 24.9386 11.5028 25.3333 10.0367 25.3333C7.72468 25.3333 6.37133 24.2619 4.79242 21.2169L0.28125 22.6266C2.14211 27.5325 5.41271 29.9573 9.92388 29.9573C12.5742 29.9573 14.7734 29.1678 16.5779 27.5325C18.4951 25.8408 19.4537 23.7544 19.4537 21.2169C19.341 18.0027 17.4801 15.8599 13.0817 14.1682Z" fill="currentColor" /><path d="M6.82314 3.3968C6.82314 5.31405 5.30062 6.78018 3.38338 6.78018C1.46613 6.78018 0 5.25766 0 3.34041C0 2.43818 0.338337 1.64872 1.01501 0.972045C1.69169 0.295369 2.48114 -0.0429688 3.38338 -0.0429688C5.30062 -0.0429688 6.82314 1.47955 6.82314 3.3968Z" fill="#F7CD00" /></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoSlotsShort = styled(Svg)<SvgProps>(({
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
LogoSlotsShort.defaultProps = {
    
  };
export default LogoSlotsShort;