import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#E52931" /><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#E52931" /></mask><g mask="url(#mask0)"><path d="M12.1941 23.8059C18.7143 23.6989 23.9133 18.3265 23.8063 11.8063C23.6993 5.28607 18.3269 0.087135 11.8067 0.194136C5.28644 0.301137 0.0875044 5.67355 0.194505 12.1938C0.301506 18.714 5.67392 23.9129 12.1941 23.8059Z" fill="#E52931" /><path d="M23.1676 15.3294C23.1676 11.9344 20.5001 9.26692 17.1051 9.26692C15.0439 9.26692 13.1039 10.3582 12.0126 11.9344C6.92015 8.17567 3.04016 3.44693 1.94891 5.14443C0.615163 7.08442 -0.112335 9.38817 -0.112335 11.9344C-0.112335 18.6031 5.3439 24.0594 12.0126 24.0594C16.1351 24.0594 19.6514 21.9981 21.8339 18.9669C22.6826 17.9969 23.1676 16.6632 23.1676 15.3294Z" fill="#274DD4" /><path d="M7.0703 14.5976C10.3307 14.5814 12.9607 11.9251 12.9445 8.66468C12.9282 5.40425 10.272 2.7743 7.01157 2.79052C3.75113 2.80674 1.12118 5.46299 1.1374 8.72342C1.15362 11.9839 3.80987 14.6138 7.0703 14.5976Z" fill="#E52931" /></g><path d="M5.50037 6.2002L7.70037 17.7002H10.2004L12.0004 11.0002L13.8004 17.7002H16.3004L18.5004 6.2002H16.2004L15.0004 13.6002L13.0004 6.2002H11.0004L9.00037 13.6002L7.80037 6.2002H5.50037Z" fill="#F9F9F9" /><path d="M18.3004 9.90021H5.50037V11.7002H18.3004V9.90021Z" fill="#F9F9F9" /><path d="M18.3004 13.2002H5.50037V15.0002H18.3004V13.2002Z" fill="#F9F9F9" /></svg>;
type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconSouthKoreanWon = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  theme
}) => ({
  ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize
}));
IconSouthKoreanWon.defaultProps = {
    
  };
export default IconSouthKoreanWon;