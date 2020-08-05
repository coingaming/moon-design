import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 3H12V21.8568H22L19.4987 25H6L7.50131 22.9045V5.0955L6 3Z"
      fill="#0090E9"
    />
    <path
      d="M14 6.09081C15.7622 6.09081 17.4848 6.61339 18.95 7.59247C20.4151 8.57154 21.557 9.96313 22.2313 11.5912C22.9055 13.2193 23.0818 15.0108 22.7378 16.7391C22.3938 18.4674 21.545 20.0548 20.2988 21.3007C19.0525 22.5466 17.4648 23.3949 15.7364 23.7383C14.008 24.0818 12.2166 23.905 10.5887 23.2302C8.96082 22.5555 7.56958 21.4132 6.59096 19.9477C5.61233 18.4822 5.09028 16.7595 5.09081 14.9973C5.0937 12.6355 6.03336 10.3714 7.70361 8.70168C9.37386 7.03194 11.6383 6.09297 14 6.09081ZM14 5C12.0221 5 10.0886 5.58656 8.44402 6.68549C6.79947 7.78443 5.51774 9.34638 4.76095 11.1738C4.00415 13.0012 3.80628 15.012 4.19235 16.9519C4.57842 18.8918 5.5311 20.6736 6.9299 22.072C8.3287 23.4704 10.1108 24.4226 12.0508 24.8082C13.9908 25.1937 16.0015 24.9953 17.8287 24.238C19.6559 23.4807 21.2175 22.1986 22.316 20.5537C23.4145 18.9089 24.0005 16.9752 24 14.9973C24 13.6842 23.7413 12.384 23.2387 11.1709C22.7362 9.95775 21.9995 8.85554 21.0709 7.92717C20.1423 6.9988 19.0399 6.26246 17.8266 5.76021C16.6134 5.25796 15.3131 4.99964 14 5Z"
      fill="#0090E9"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
};
const IconESportsLeagueOfLegends = styled(Svg)<IconProps>(
  ({ backgroundColor, theme }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
  ]
);
export default IconESportsLeagueOfLegends;
