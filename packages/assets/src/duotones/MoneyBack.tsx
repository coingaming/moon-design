import React from 'react';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = ({ secondaryColor, ...rest }: any) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 174 174"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      opacity={0.1}
      d="M132.798 77.8364L125.344 71.9519C128.613 67.7674 127.959 61.7522 123.775 58.3523C119.59 55.0832 113.575 55.737 110.175 59.9215L102.852 54.0371C101.022 52.5986 98.2755 52.8602 96.837 54.6909L57.9997 103.466C56.5612 105.297 56.8228 108.043 58.6535 109.482L66.1071 115.366C62.838 119.551 63.4918 125.566 67.6763 128.966C71.8608 132.235 77.876 131.581 81.2759 127.397L88.7296 133.281C90.5603 134.719 93.3064 134.458 94.7448 132.627L133.582 83.8516C134.89 82.0209 134.628 79.2748 132.798 77.8364Z"
      fill="currentColor"
    />
    <path
      d="M65.6606 69.6187L66.2018 68.9395"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M70.2607 63.6422L82.7077 47.886C83.1136 47.3427 83.7901 47.3427 84.1959 47.7502L110.984 69.0753C111.525 69.4828 111.525 70.1619 111.119 70.5694L76.0783 115.257C75.6725 115.8 74.996 115.8 74.5901 115.393L47.8021 93.932C47.2609 93.5245 47.2609 92.8453 47.6668 92.4378L61.7373 74.6443"
      stroke={secondaryColor}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M117.343 65.6796L109.631 59.5673C113.013 55.2208 112.337 48.9726 108.007 45.4411C103.678 42.0454 97.4546 42.7245 93.9369 47.071L86.3605 40.9587C84.4664 39.4646 81.6253 39.7363 80.137 41.6379L39.955 92.302C38.4667 94.2036 38.7373 97.056 40.6314 98.5501L48.3431 104.662C44.9608 109.009 45.6373 115.257 49.9667 118.789C54.296 122.184 60.5195 121.505 64.0371 117.159L71.7489 123.271C73.643 124.765 76.4841 124.493 77.9723 122.592L118.154 71.9277C119.507 70.0261 119.237 67.1737 117.343 65.6796Z"
      stroke={secondaryColor}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="M102.596 55.6282C104.389 55.6282 105.843 54.1687 105.843 52.3683C105.843 50.5679 104.389 49.1084 102.596 49.1084C100.802 49.1084 99.3486 50.5679 99.3486 52.3683C99.3486 54.1687 100.802 55.6282 102.596 55.6282Z"
      stroke={secondaryColor}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="M55.6489 114.85C57.4422 114.85 58.8959 113.39 58.8959 111.59C58.8959 109.789 57.4422 108.33 55.6489 108.33C53.8556 108.33 52.4019 109.789 52.4019 111.59C52.4019 113.39 53.8556 114.85 55.6489 114.85Z"
      stroke={secondaryColor}
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="M75.8076 76.41C78.0492 76.41 79.8664 74.5857 79.8664 72.3352C79.8664 70.0847 78.0492 68.2603 75.8076 68.2603C73.566 68.2603 71.7488 70.0847 71.7488 72.3352C71.7488 74.5857 73.566 76.41 75.8076 76.41Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="M80.8134 97.1918C83.055 97.1918 84.8722 95.3674 84.8722 93.1169C84.8722 90.8664 83.055 89.0421 80.8134 89.0421C78.5718 89.0421 76.7546 90.8664 76.7546 93.1169C76.7546 95.3674 78.5718 97.1918 80.8134 97.1918Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="M65.1194 86.5971L90.0133 78.8549"
      stroke="currentColor"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};

const Component = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);

const MoneyBack: React.FC<any> = (props) => {
  const theme = useTheme();
  return <Component secondaryColor={theme.color.bulma[100]} {...props} />;
};

MoneyBack.defaultProps = {
  verticalAlign: 'middle',
};
export default MoneyBack;
