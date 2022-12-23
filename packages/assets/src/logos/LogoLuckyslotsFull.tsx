import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="100%" viewBox="0 0 132 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M9.86236 14.934C9.86236 17.2076 11.7412 19.0506 14.059 19.0506C16.3768 19.0506 18.2556 17.2076 18.2556 14.934C18.2556 12.6605 16.3768 10.8173 14.059 10.8173C11.7412 10.8173 9.86236 12.6605 9.86236 14.934ZM4.13464 1.00965C6.39098 1.00965 8.22015 2.85947 8.22015 5.14114V14.5838C8.22015 18.0992 10.7701 20.5998 14.059 20.5998C14.3624 20.5998 14.66 20.5767 14.9509 20.5327C13.3757 21.8159 11.3517 22.5877 9.1439 22.5877C4.121 22.5877 0.0491333 18.5934 0.0491333 13.6664V5.14114C0.0491333 2.85947 1.87828 1.00965 4.13464 1.00965Z" fill="#D82E2E" /><path d="M27.0439 19.1021H37.3792V16.4013H30.4015V5.78553H27.0439V19.1021Z" fill="currentColor" /><path d="M42.1026 19.3834C43.8472 19.3834 45.2916 18.5769 45.9106 17.1702V19.1021H49.0054V9.72421H45.798V14.5444C45.798 15.8948 44.9913 17.0202 43.3596 17.0202C42.1777 17.0202 41.3338 16.3825 41.3338 14.732V9.72421H38.1261V15.3697C38.1261 17.9392 39.4391 19.3834 42.1026 19.3834Z" fill="currentColor" /><path d="M55.9521 19.3834C58.8971 19.3834 61.0168 18.0518 61.4856 15.9323L58.3345 15.3322C58.053 16.4763 57.2276 17.0765 55.9333 17.0765C54.3391 17.0765 53.3636 16.0636 53.3636 14.3381C53.3636 12.6876 54.3204 11.7123 55.9146 11.7123C57.2088 11.7123 58.053 12.3125 58.3157 13.4378L61.4856 12.8939C60.998 10.6808 59.0285 9.44288 56.0084 9.44288C52.3509 9.44288 50.0811 11.3185 50.0811 14.3944C50.0811 17.4328 52.3881 19.3834 55.9521 19.3834Z" fill="currentColor" /><path d="M70.3519 19.1021H73.9534L69.9769 13.2878L73.822 9.72421H69.883L65.8314 13.5316V5.50419H62.6237V19.1021H65.8314V16.5513L67.6133 15.0321L70.3519 19.1021Z" fill="currentColor" /><path d="M75.7871 22.947C78.4882 22.947 80.0451 21.9717 81.0954 19.5334L85.3347 9.72421H82.0146L79.8575 15.4822C79.7073 15.9323 79.6323 16.1762 79.576 16.5138H79.52C79.4449 16.1199 79.3886 15.8761 79.2197 15.4635L76.9687 9.72421H73.4238L77.8879 19.0833L77.8129 19.3646C77.4379 20.1524 76.5937 20.5463 75.4684 20.5463C75.093 20.5463 74.7368 20.5275 74.1926 20.4337V22.8157C74.718 22.9095 75.3745 22.947 75.7871 22.947Z" fill="currentColor" /><path d="M90.5545 19.3834C93.8183 19.3834 95.4879 18.183 95.4879 16.1949C95.4879 14.5444 94.5686 13.5879 92.2616 13.3253L89.5043 13.044C88.6413 12.9502 88.3039 12.7251 88.3039 12.275C88.3039 11.7311 88.8853 11.4873 90.1232 11.4873C91.8113 11.4873 92.9932 11.8999 93.9497 12.7626L95.4503 11.2247C94.4 10.0806 92.5616 9.44288 90.2921 9.44288C87.1407 9.44288 85.3776 10.5495 85.3776 12.4626C85.3776 14.113 86.4654 15.0696 88.7539 15.3509L91.2486 15.5947C92.3179 15.7073 92.5991 15.9136 92.5991 16.4388C92.5991 17.0202 92.0177 17.3015 90.7047 17.3015C88.7539 17.3015 87.4222 16.7389 86.5405 15.6885L84.8149 17.1515C85.9778 18.6144 87.9473 19.3834 90.5545 19.3834Z" fill="currentColor" /><path d="M99.8737 5.50419H96.6663V19.1021H99.8737V5.50419Z" fill="currentColor" /><path d="M106.901 19.3834C110.315 19.3834 112.772 17.5641 112.772 14.3944C112.772 11.2247 110.315 9.44288 106.901 9.44288C103.487 9.44288 101.048 11.2247 101.048 14.3944C101.048 17.5641 103.487 19.3834 106.901 19.3834ZM106.901 17.2265C105.306 17.2265 104.294 16.2324 104.294 14.3944C104.294 12.5563 105.306 11.5998 106.901 11.5998C108.495 11.5998 109.508 12.5563 109.508 14.3944C109.508 16.2324 108.495 17.2265 106.901 17.2265Z" fill="currentColor" /><path d="M112.551 11.8249H114.671V15.8198C114.671 18.0893 115.927 19.3084 118.797 19.3084C119.623 19.3084 120.317 19.2146 120.973 19.0458V16.6076C120.617 16.6826 120.186 16.7576 119.642 16.7576C118.46 16.7576 117.878 16.2137 117.878 15.1071V11.8249H120.973V9.72422H117.878V6.29193L114.671 7.4923V9.72422H112.551V11.8249Z" fill="currentColor" /><path d="M126.767 19.3834C130.031 19.3834 131.701 18.183 131.701 16.1949C131.701 14.5444 130.781 13.5879 128.474 13.3253L125.717 13.044C124.854 12.9502 124.516 12.7251 124.516 12.275C124.516 11.7311 125.098 11.4873 126.336 11.4873C128.024 11.4873 129.206 11.8999 130.162 12.7626L131.663 11.2247C130.613 10.0806 128.774 9.44288 126.505 9.44288C123.354 9.44288 121.59 10.5495 121.59 12.4626C121.59 14.113 122.678 15.0696 124.967 15.3509L127.461 15.5947C128.531 15.7073 128.812 15.9136 128.812 16.4388C128.812 17.0202 128.231 17.3015 126.918 17.3015C124.967 17.3015 123.635 16.7389 122.753 15.6885L121.028 17.1515C122.191 18.6144 124.16 19.3834 126.767 19.3834Z" fill="currentColor" /></svg>;
type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoLuckyslotsFull = styled(Svg)<SvgProps>(({
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
LogoLuckyslotsFull.defaultProps = {
    
  };
export default LogoLuckyslotsFull;