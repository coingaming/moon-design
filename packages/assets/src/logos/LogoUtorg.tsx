import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="auto"
    viewBox="0 0 80 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={80} height={56} rx={8} fill="#0F161F" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.2483 33.912C14.4159 33.1867 14 32.214 14 30.9943V23.2308H16.2804V30.8131C16.2804 32.0163 16.963 32.7745 18.4445 32.7745C19.926 32.7745 20.6082 32.0163 20.6082 30.8131V23.2308H22.9052V30.9943C22.9052 32.214 22.4893 33.1867 21.6569 33.912C20.8245 34.6373 19.7592 34.9998 18.4445 34.9998C17.1456 34.9998 16.0804 34.6373 15.2483 33.912ZM32.6769 23.2307V25.4063H29.5309V34.7691H27.2335V25.4063H24.1041V23.2307H32.6769ZM38.8025 32.7747C39.8678 32.7747 40.7667 32.4286 41.4825 31.7197C42.1983 31.0109 42.5644 30.1044 42.5644 28.9998C42.5644 27.8956 42.1983 26.9887 41.4825 26.2801C40.7667 25.5713 39.8678 25.2084 38.8025 25.2084C37.7373 25.2084 36.8384 25.5713 36.1225 26.2801C35.4067 26.9887 35.0407 27.8956 35.0407 28.9998C35.0407 30.1044 35.4067 31.0109 36.1225 31.7197C36.8384 32.4286 37.7373 32.7747 38.8025 32.7747ZM38.8025 34.9999C37.1214 34.9999 35.6898 34.4229 34.5079 33.2691C33.3426 32.0987 32.76 30.6813 32.76 28.9998C32.76 27.3186 33.3426 25.9009 34.5079 24.747C35.6898 23.577 37.1214 23 38.8025 23C40.4837 23 41.9153 23.577 43.0972 24.747C44.2791 25.9009 44.8617 27.3186 44.8617 28.9998C44.8617 30.6813 44.2791 32.0987 43.0972 33.2691C41.9153 34.4229 40.4837 34.9999 38.8025 34.9999ZM48.7738 25.357V28.769H51.1375C52.0032 28.769 52.719 27.9944 52.719 27.055C52.719 26.1152 52.0032 25.357 51.1375 25.357H48.7738ZM52.8684 34.7691L50.5216 30.7637H48.7738V34.7691H46.4764V23.2307H51.1375C52.2194 23.2307 53.1348 23.6096 53.8839 24.3514C54.633 25.0932 55.0159 25.9997 55.0159 27.055C55.0159 28.4888 54.1171 29.8075 52.7688 30.4177L55.3488 34.7691H52.8684ZM68 28.5713V29.4613C68 31.11 67.4671 32.4448 66.4018 33.4668C65.3365 34.4892 63.9551 35 62.2737 35C60.4759 35 58.9779 34.423 57.796 33.2691C56.6141 32.0988 56.0315 30.6811 56.0315 29.0163C56.0315 27.3351 56.6141 25.9174 57.7794 24.747C58.9612 23.5767 60.4095 23.0001 62.1408 23.0001C64.3212 23.0001 66.2188 24.055 67.2177 25.6868L65.2539 26.8075C64.7042 25.8681 63.5058 25.2085 62.1243 25.2085C61.0087 25.2085 60.0933 25.5714 59.3775 26.2967C58.6616 27.0055 58.3122 27.9121 58.3122 29.0163C58.3122 30.1044 58.6782 31.011 59.3941 31.7199C60.1265 32.4287 61.0918 32.7747 62.2906 32.7747C64.0717 32.7747 65.2701 31.9504 65.6859 30.5824H62.157V28.5713H68Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={14}
        y1={23}
        x2={65}
        y2={35}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E9D0FC" />
        <stop offset={0.34375} stopColor="#C7C0FC" />
        <stop offset={0.567708} stopColor="#C8EBFD" />
        <stop offset={0.739583} stopColor="#D6BFE4" />
        <stop offset={0.880208} stopColor="#FAE0D3" />
        <stop offset={1} stopColor="#FBCCD0" />
      </linearGradient>
    </defs>
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const LogoUtorg = styled(Svg)<SvgProps>(
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
LogoUtorg.defaultProps = {
  verticalAlign: 'middle',
};
export default LogoUtorg;
