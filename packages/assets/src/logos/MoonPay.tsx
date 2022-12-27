import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="100%" viewBox="0 0 56 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M0.000589371 9.49415C0.000589371 13.6396 3.38073 17.0001 7.55034 17.0001C11.72 17.0001 15.1001 13.6396 15.1001 9.49415C15.1001 5.34871 11.72 1.98816 7.55034 1.98816C3.38073 1.98816 0.000589371 5.34871 0.000589371 9.49415Z" fill="currentColor" /><path d="M14.0005 2.03786C14.0005 3.16335 14.9183 4.07573 16.0503 4.07573C17.1824 4.07573 18.1001 3.16335 18.1001 2.03786C18.1001 0.912383 17.1824 0 16.0503 0C14.9183 0 14.0005 0.912383 14.0005 2.03786Z" fill="currentColor" /><path d="M18.5908 13.2295H19.8242L20.5676 9.39165C20.6712 8.84872 20.7841 7.98752 20.7841 7.98752H20.803C20.803 7.98752 20.8124 8.78314 20.8502 9.27926L21.1705 13.2295H22.451L24.3058 9.27011C24.5694 8.70853 24.8613 7.98775 24.8613 7.98775H24.8802C24.8802 7.98775 24.6637 8.81153 24.5506 9.39189L23.8072 13.2297H25.0596L26.3583 6.53669H24.4187L22.7994 10.0092C22.4134 10.8421 22.1121 11.7409 22.1121 11.7409H22.1026C22.1026 11.7409 22.0932 10.7768 22.0179 9.84038L21.7637 6.53669H19.8901L18.5908 13.2295ZM28.2413 13.3702C29.889 13.3702 30.9247 12.0223 30.9247 10.4872C30.9247 9.06446 29.9266 8.29688 28.6933 8.29688C27.0456 8.29688 25.9723 9.61666 25.9723 11.1331C25.9723 12.6018 26.9797 13.3699 28.2413 13.3699V13.3702ZM27.2338 11.2076C27.2338 10.2808 27.6575 9.24184 28.6273 9.24184C29.3707 9.24184 29.663 9.82219 29.663 10.4494C29.663 11.3666 29.2487 12.4245 28.2695 12.4245C27.5258 12.4245 27.2338 11.8628 27.2338 11.2076ZM33.2406 13.3699C34.8883 13.3699 35.924 12.022 35.924 10.4869C35.924 9.06411 34.9259 8.29652 33.6926 8.29652C32.0452 8.29641 30.9714 9.61631 30.9714 11.1327C30.9714 12.6018 31.9791 13.3699 33.2408 13.3699H33.2406ZM32.2333 11.2076C32.2333 10.2808 32.6569 9.24184 33.6267 9.24184C34.3701 9.24184 34.6624 9.82219 34.6624 10.4494C34.6624 11.3666 34.2481 12.4245 33.269 12.4245C32.5252 12.4245 32.2333 11.8628 32.2333 11.2076ZM37.9106 8.42721H36.6773L35.7451 13.2291H37.0067L37.5152 10.6082C37.647 9.90619 38.0707 9.36326 38.6638 9.36326C39.2005 9.36326 39.4453 9.70957 39.3228 10.3461L38.758 13.2295H40.0196L40.6034 10.1969C40.8199 9.07361 40.2645 8.29641 39.3041 8.29641C38.6167 8.29641 38.2119 8.59591 37.7977 9.18565H37.7695L37.9106 8.42721ZM40.6128 13.2291H42.0063L42.4764 10.8051H44.1146C45.621 10.8051 46.6472 9.94385 46.6472 8.51168C46.6472 7.25735 45.7904 6.53658 44.5006 6.53658H41.912L40.6128 13.2291ZM43.079 7.70643H44.3218C44.9337 7.70643 45.254 8.03409 45.254 8.5769C45.254 9.37253 44.6797 9.70957 44.0488 9.70957H42.6935L43.079 7.70643ZM49.0675 13.2295H50.2632V13.1825C50.1879 13.0703 50.1596 12.8456 50.2256 12.518L50.6774 10.2154C50.941 8.82068 50.0371 8.30591 48.8414 8.30591C47.5986 8.30591 46.8354 8.90503 46.676 9.88789H47.8058C47.9188 9.41054 48.2672 9.20454 48.7945 9.20454C49.2746 9.20454 49.5476 9.39224 49.5476 9.73808C49.5476 10.2154 49.1993 10.2529 48.2954 10.3278C47.1185 10.4217 46.1017 10.6555 46.1017 11.9285C46.1017 12.9207 46.8923 13.3419 47.6364 13.3419C48.3326 13.3419 48.6909 13.0142 48.9828 12.7053H49.0017C48.9831 12.8827 49.0056 13.062 49.0675 13.2295ZM47.3163 11.8158C47.3163 11.1606 47.9847 11.1887 48.4461 11.1044C48.7628 11.0626 49.0729 10.9808 49.3688 10.861L49.2181 11.6192C49.1237 12.0591 48.7003 12.471 48.0411 12.471C47.6176 12.4713 47.3163 12.2466 47.3163 11.8158ZM50.2726 14.8021H51.0632C51.9954 14.8021 52.4096 14.4276 52.8898 13.4635L55.3856 8.42756H54.1046L53.1065 10.6086C52.8994 11.0579 52.664 11.6944 52.664 11.6944H52.6451C52.6451 11.6944 52.5699 11.0485 52.5035 10.6086L52.174 8.42756H50.8559L51.5521 11.8441C51.6387 12.1973 51.6923 12.5576 51.7121 12.9206C51.7121 13.5197 51.4109 13.8098 50.8743 13.8098H50.4695L50.2726 14.8021Z" fill="currentColor" /></svg>;
type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const MoonPay = styled(Svg)<SvgProps>(({
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
MoonPay.defaultProps = {
    
  };
export default MoonPay;