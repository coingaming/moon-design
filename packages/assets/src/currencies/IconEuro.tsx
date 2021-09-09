import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.7007 14.4192C20.3649 19.7764 14.9384 23.0367 9.58001 21.7008C4.22382 20.3652 0.963159 14.9389 2.29955 9.58206C3.63469 4.22425 9.06121 0.963624 14.418 2.29925C19.7761 3.63487 23.0364 9.06175 21.7007 14.4192Z"
      fill="#F7931A"
    />
    <path
      d="M16.4098 10.5754C16.6089 9.24478 15.5957 8.52947 14.2102 8.05228L14.6596 6.24978L13.5623 5.97634L13.1248 7.73134C12.8363 7.65947 12.54 7.59166 12.2456 7.52447L12.6863 5.7579L11.5896 5.48447L11.1399 7.28634C10.9011 7.23196 10.6667 7.17822 10.4392 7.12166L10.4404 7.11603L8.92717 6.73821L8.63526 7.91009C8.63526 7.91009 9.44941 8.09665 9.43222 8.10822C9.87664 8.21915 9.95696 8.51321 9.94352 8.74634L9.43159 10.7998C9.46222 10.8076 9.50191 10.8188 9.54567 10.8363C9.5091 10.8273 9.47004 10.8173 9.42972 10.8076L8.71214 13.6842C8.65776 13.8192 8.51994 14.0217 8.20928 13.9448C8.22022 13.9607 7.41169 13.7457 7.41169 13.7457L6.86694 15.0017L8.29491 15.3576C8.56056 15.4242 8.8209 15.4938 9.07717 15.5595L8.62307 17.3826L9.71912 17.656L10.1689 15.8523C10.4683 15.9335 10.7589 16.0085 11.0433 16.0792L10.5952 17.8745L11.6925 18.1479L12.1466 16.3282C14.0177 16.6823 15.4247 16.5395 16.017 14.8473C16.4942 13.4848 15.9932 12.6988 15.0087 12.1863C15.7257 12.021 16.2658 11.5495 16.4098 10.5754ZM13.9027 14.0907C13.5636 15.4532 11.2693 14.7167 10.5255 14.532L11.128 12.1167C11.8719 12.3023 14.2571 12.6698 13.9027 14.0907ZM14.2421 10.5557C13.9327 11.7951 12.0231 11.1654 11.4037 11.011L11.95 8.82041C12.5694 8.97478 14.5643 9.2629 14.2421 10.5557Z"
      fill="white"
    />
    <circle cx={12} cy={12} r={12} fill="#335DF4" />
    <path
      d="M16 17.2854C15.3488 17.6422 14.2411 18 12.9772 18C11.1777 18 9.5584 17.356 8.5112 16.1604C7.87871 15.5004 7.4442 14.6069 7.26602 13.4998H6.00104V12.4114H7.10764C7.10764 12.321 7.10764 12.2147 7.10764 12.1252C7.10764 11.9106 7.12744 11.678 7.14619 11.4822H6V10.3741H7.32437C7.56195 9.28574 8.09545 8.3565 8.80713 7.67864C9.87413 6.60631 11.3162 6 13.0762 6C14.262 6 15.2498 6.26738 15.9021 6.55359L15.4082 8.21434C14.8944 7.96485 14.0838 7.73231 13.195 7.73231C12.2061 7.73231 11.3371 8.05429 10.6848 8.71426C10.2701 9.1078 9.97312 9.69622 9.81473 10.375H14.9934V11.4831H9.57716C9.53756 11.679 9.53756 11.8936 9.53756 12.1073C9.53756 12.2147 9.53756 12.3041 9.53756 12.4114H14.9924V13.4998H9.75534C9.89393 14.2671 10.1899 14.8395 10.6046 15.25C11.2777 15.9099 12.2259 16.2131 13.2533 16.2131C14.2213 16.2131 15.131 15.9099 15.5853 15.6783L16 17.2854Z"
      fill="white"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconEuro = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
  })
);
IconEuro.defaultProps = {};
export default IconEuro;
