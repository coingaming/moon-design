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
      d="M8.00259 4.78872V22.6429C8.00259 22.6429 7.71461 26.9137 14.315 26.7685C14.315 26.7685 20.2522 27.4838 21 22.7854V11.4378C21 11.4378 20.5402 9.11763 16.4949 9.11763C16.4949 9.11763 13.7126 9.05958 13.5699 9.9491L13.5408 5.47764C13.5408 5.47764 14.4313 4.4746 15.578 5.50667L15.549 8.17265H21V4.78872C21 4.78872 20.9867 0.261833 14.5819 0.517855C14.5792 0.517855 8.49141 0.00313705 8.00259 4.78872Z"
      fill="#FDDC01"
    />
    <path
      d="M12.2778 15.3075V23.5034H12.1113V23.9442H12.5473V24.1052H13.8552V23.9257H14.0296V19.6627C14.0296 19.6627 14.5026 19.0424 15.5965 19.1797V16.9519C15.5965 16.9519 16.5477 16.4636 18.3101 16.4636V14.4258C18.3101 14.4258 17.6548 13.4941 16.1329 14.5341C16.1329 14.5341 14.3943 15.4843 14.027 14.4179H12.5922V14.5605H12.2699V14.8614H12.114V15.194H12.2725L12.2778 15.3075Z"
      fill="black"
      stroke="black"
      strokeWidth="0.223706"
      strokeMiterlimit="10"
    />
    <path
      d="M14.167 17.7464V19.0003H15.4485V17.2634L15.2688 16.9493H14.9729L14.9809 17.2449C14.9809 17.2449 15.2847 17.2977 15.3217 17.4877L15.2081 17.596C15.2107 17.5933 14.883 17.1024 14.167 17.7464Z"
      fill="#FDDC01"
      stroke="black"
      strokeWidth="0.223706"
      strokeMiterlimit="10"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
};
const IconESportsRainbow = styled(Svg)<IconProps>(
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
export default IconESportsRainbow;
