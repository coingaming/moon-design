import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.902 22.202l-.483-.129.483.129zm1.424-6.793l-.469.174.469-.174zm.058 1.209l-.483-.128.483.128zm13.743-2.726l.218-.45-.218.45zm.111 3.54l-.246-.434.246.435zm.107-3.99L10.307 7.118l-.436.9 13.038 6.325.436-.9zM6.872 10.237l1.985 5.347.938-.348L7.81 9.888l-.938.348zm2.029 6.254l-1.482 5.583.966.257 1.482-5.584-.966-.256zm2.165 8.401l12.418-7.023-.492-.87-12.419 7.022.492.871zm-3.647-2.818c-.568 2.14 1.72 3.908 3.647 2.818l-.493-.87c-1.156.653-2.529-.407-2.188-1.691l-.966-.257zm1.438-6.49a1.5 1.5 0 01.044.907l.966.256a2.5 2.5 0 00-.072-1.511l-.938.348zm1.45-8.466c-2.027-.984-4.219 1.006-3.435 3.12l.938-.349c-.47-1.268.844-2.462 2.06-1.871l.437-.9zm12.602 7.225c1.088.528 1.136 2.06.083 2.655l.492.87c1.755-.991 1.674-3.545-.139-4.424l-.436.9z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MailSendRight =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default MailSendRight;
