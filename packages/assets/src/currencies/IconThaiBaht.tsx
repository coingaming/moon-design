import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.7007 14.4192C20.3649 19.7764 14.9384 23.0367 9.58001 21.7008C4.22382 20.3652 0.963159 14.9389 2.29955 9.58206C3.63469 4.22425 9.06121 0.963624 14.418 2.29925C19.7761 3.63487 23.0364 9.06175 21.7007 14.4192Z" fill="#F7931A" /><path d="M16.4098 10.5754C16.6089 9.24478 15.5957 8.52947 14.2102 8.05228L14.6596 6.24978L13.5623 5.97634L13.1248 7.73134C12.8363 7.65947 12.54 7.59166 12.2456 7.52447L12.6863 5.7579L11.5896 5.48447L11.1399 7.28634C10.9011 7.23196 10.6667 7.17822 10.4392 7.12166L10.4404 7.11603L8.92717 6.73821L8.63526 7.91009C8.63526 7.91009 9.44941 8.09665 9.43222 8.10822C9.87664 8.21915 9.95696 8.51321 9.94352 8.74634L9.43159 10.7998C9.46222 10.8076 9.50191 10.8188 9.54567 10.8363C9.5091 10.8273 9.47004 10.8173 9.42972 10.8076L8.71214 13.6842C8.65776 13.8192 8.51994 14.0217 8.20928 13.9448C8.22022 13.9607 7.41169 13.7457 7.41169 13.7457L6.86694 15.0017L8.29491 15.3576C8.56056 15.4242 8.8209 15.4938 9.07717 15.5595L8.62307 17.3826L9.71912 17.656L10.1689 15.8523C10.4683 15.9335 10.7589 16.0085 11.0433 16.0792L10.5952 17.8745L11.6925 18.1479L12.1466 16.3282C14.0177 16.6823 15.4247 16.5395 16.017 14.8473C16.4942 13.4848 15.9932 12.6988 15.0087 12.1863C15.7257 12.021 16.2658 11.5495 16.4098 10.5754ZM13.9027 14.0907C13.5636 15.4532 11.2693 14.7167 10.5255 14.532L11.128 12.1167C11.8719 12.3023 14.2571 12.6698 13.9027 14.0907ZM14.2421 10.5557C13.9327 11.7951 12.0231 11.1654 11.4037 11.011L11.95 8.82041C12.5694 8.97478 14.5643 9.2629 14.2421 10.5557Z" fill="white" /><circle cx={12} cy={12} r={12} fill="url(#paint0_linear)" /><path d="M12.8994 19.0579H11.35V17.4101H8.31372V6.8942H11.35V4.94235H12.8994V6.90834C13.7378 6.9272 14.4395 7.03799 15.0047 7.24072C15.4493 7.3963 15.806 7.67918 16.0746 8.08935C16.1904 8.28264 16.2785 8.47594 16.3387 8.66924C16.4035 8.85782 16.4359 9.05819 16.4359 9.27035C16.4359 10.1614 16.026 10.8875 15.2061 11.4485C15.0996 11.5098 14.9954 11.5711 14.8935 11.6324C14.7962 11.6937 14.6804 11.762 14.5461 11.8374C14.9213 11.9506 15.264 12.0991 15.5744 12.283C15.8847 12.4668 16.1557 12.6861 16.3873 12.9407C16.7393 13.3273 16.9154 13.827 16.9154 14.4399C16.9154 14.9727 16.7509 15.47 16.422 15.9321C16.1071 16.3752 15.6693 16.7265 15.1089 16.9858C14.5391 17.2498 13.8026 17.3912 12.8994 17.4101V19.0579ZM12.8994 11.0383C13.6359 10.9393 14.062 10.7696 14.1778 10.5291C14.2936 10.284 14.3353 9.9964 14.3029 9.66638C14.2705 9.33636 14.1686 9.08177 13.9972 8.90261C13.8304 8.71874 13.4645 8.59381 12.8994 8.5278V11.0383ZM11.35 8.49952H10.3286V11.1515H11.35V8.49952ZM12.8994 15.7977C13.761 15.6987 14.2774 15.4064 14.4488 14.9208C14.6202 14.4352 14.6109 13.9755 14.421 13.5418C14.2357 13.1033 13.7285 12.8723 12.8994 12.8487V15.7977ZM10.3286 12.7497V15.8048H11.35V12.7497H10.3286Z" fill="white" /><defs><linearGradient id="paint0_linear" x1={5.14568} y1={1.82868} x2={17.527} y2={22.9497} gradientUnits="userSpaceOnUse"><stop stopColor="#FF3D44" /><stop offset={0.515525} stopColor="#FF3D44" /><stop offset={0.515625} stopColor="#3356D2" /></linearGradient></defs></svg>;
type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconThaiBaht = styled(Svg)<SvgProps>(({
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
IconThaiBaht.defaultProps = {
    
  };
export default IconThaiBaht;