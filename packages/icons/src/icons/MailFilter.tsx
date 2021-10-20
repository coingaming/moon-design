import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.077 17.5l-.364-.343-.136.144v.199h.5zm-4.154 0h.5v-.199l-.136-.144-.364.343zm1.286 6.62l.217-.451-.217.45zM7.521 10.717l-.364.343.364-.343zm16.958 0l-.363-.343.363.343zM23.092 7H8.908v1h14.184V7zm1.024 3.375l-6.403 6.782.727.686 6.403-6.782-.727-.686zm-9.83 6.782l-6.402-6.782-.727.686 6.402 6.782.728-.686zm3.29.343v4.817h1V17.5h-1zm-3.153 4.743V17.5h-1v4.743h1zm1.003 1.426l-.154-.074-.434.9.154.075.434-.901zm-2.003-1.426a2.5 2.5 0 001.415 2.253l.434-.901a1.5 1.5 0 01-.849-1.352h-1zM25.5 9.408A2.408 2.408 0 0023.092 7v1c.777 0 1.408.63 1.408 1.408h1zm-18 0C7.5 8.63 8.13 8 8.908 8V7A2.408 2.408 0 006.5 9.408h1zm10.077 12.91a1.5 1.5 0 01-2.15 1.35l-.435.902c1.66.799 3.585-.41 3.585-2.253h-1zM6.5 9.407c0 .615.235 1.206.657 1.653l.727-.686a1.408 1.408 0 01-.384-.967h-1zm18 0c0 .36-.137.706-.384.967l.727.686a2.408 2.408 0 00.657-1.653h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MailFilter =
  styled(Svg) <
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
export default MailFilter;
