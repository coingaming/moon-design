import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.623 2c1.928 0 3.346.368 4.252 1.105.923.737 1.385 1.908 1.385 3.514 0 1.075-.24 1.937-.717 2.585a4.62 4.62 0 01-1.83 1.481l3.585 7.094H7.44l-2.867-6.055H3.486v6.055H0V2h4.623zm-.321 2.74h-.816v4.266h.865c.857 0 1.467-.185 1.83-.553.379-.368.568-.913.568-1.635 0-.752-.198-1.282-.593-1.591-.396-.325-1.014-.487-1.854-.487zm11.594.752a9.05 9.05 0 012.027.22 8.37 8.37 0 011.953.73l-.89 2.365c-.527-.25-1.03-.457-1.508-.62a4.109 4.109 0 00-1.434-.264c-.873 0-1.31.28-1.31.84a1 1 0 00.149.53c.115.147.337.31.667.486.33.177.808.412 1.434.707.61.28 1.137.567 1.582.862a3.1 3.1 0 011.063 1.105c.247.442.371 1.024.371 1.746 0 1.223-.412 2.166-1.236 2.829-.808.648-2.003.972-3.585.972-.79 0-1.467-.059-2.027-.177a7.852 7.852 0 01-1.706-.53v-2.718c.577.294 1.195.537 1.854.729.676.191 1.27.287 1.78.287.577 0 .99-.096 1.236-.287.264-.192.396-.442.396-.752 0-.206-.05-.39-.148-.552-.1-.177-.314-.368-.643-.575-.33-.22-.84-.493-1.533-.817-1.022-.472-1.772-.965-2.25-1.48-.477-.517-.716-1.239-.716-2.167 0-1.12.403-1.974 1.21-2.563.825-.604 1.913-.906 3.264-.906z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCurrencyPkr = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
    {
      verticalAlign: 'middle',
    },
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
  ]
);
export default IconCurrencyPkr;
