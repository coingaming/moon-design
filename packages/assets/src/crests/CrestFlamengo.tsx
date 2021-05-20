import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="auto"
    height="1em"
    viewBox="0 0 260 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M130 306.659C59.5225 275.957 12.2331 206.876 12.2331 129.754V12.2444H247.584V129.754C247.584 206.876 200.295 275.957 130 306.659ZM260 129.754V0H0V129.754C0 214.734 52.4017 287.105 130 320C207.416 287.287 260 214.917 260 129.754Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M130 312.874C166.699 297.34 198.104 272.12 220.196 238.676C241.376 206.694 253.609 168.681 253.609 129.572V6.03027H130H6.39053V129.572C6.39053 168.681 18.6237 206.694 39.8034 238.676C61.8961 272.302 93.3005 297.34 130 312.874Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M242.105 154.972H17.7095C16.4314 146.566 15.8837 137.976 15.8837 129.387V117.874H243.931V129.387C243.931 137.976 243.383 146.566 242.105 154.972ZM45.0971 229.353H214.9C222.203 217.657 228.228 205.23 232.976 192.071H27.0213C31.7685 205.047 37.7937 217.657 45.0971 229.353ZM129.998 302.82C109.732 294.048 91.1081 281.621 75.2234 266.635H129.998H184.773C168.889 281.621 150.265 294.048 129.998 302.82ZM129.998 80.5918H243.931V43.3101H129.998V80.5918ZM15.8837 108.736H121.052V15.1661H15.8837V108.736Z"
      fill="#C3281E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.8446 90.8244C49.8446 96.6725 48.3839 99.4138 46.0103 101.241C49.1143 104.531 57.3305 105.993 63.9035 103.983C59.5215 101.241 58.2434 97.038 58.2434 91.7382C55.3221 91.7382 52.5833 91.3727 49.8446 90.8244ZM79.7881 91.921V86.6211C77.4146 83.1488 74.6758 79.1283 71.5719 76.5697V91.1899C71.5719 96.4898 70.1113 99.7793 67.7377 101.424C70.8416 104.714 79.0578 106.176 85.6308 104.165C81.2488 101.241 79.7881 96.307 79.7881 91.921ZM105.532 50.0705C114.844 45.5017 113.018 33.8055 111.923 30.8815C110.462 33.6228 107.541 35.2676 102.428 35.2676H96.4032C97.6812 37.2778 98.9593 39.4709 100.055 41.8467C104.802 42.0294 106.263 47.1465 105.532 50.0705ZM90.1954 71.2699C95.3077 71.2699 97.3161 74.7422 96.9509 79.4938C105.897 74.7422 104.437 64.3253 103.159 61.4012C101.698 63.2287 99.6897 64.8735 94.7599 64.8735H79.9707V42.0294H84.5353C83.9875 39.4709 82.892 37.2778 81.4314 35.4503H79.423C75.5887 35.4503 72.1197 34.9021 68.2854 33.44L71.5719 42.0294V64.6908C75.5887 65.97 78.3275 68.3458 81.0662 71.2699H90.1954ZM81.614 62.8632H88.3695C95.8554 55.1876 94.5773 45.6845 99.6896 45.6845C92.5689 28.1402 82.7095 19.5508 60.7995 20.0991C54.2266 20.2818 50.9401 20.2818 45.6452 18.2715L49.662 28.6885C53.4962 27.2264 58.2434 26.3127 62.9905 26.3127C77.232 26.3127 87.0914 34.171 87.0914 48.4258C86.9089 53.9084 85.2656 59.0254 81.614 62.8632ZM35.6031 59.3909C35.6031 71.8181 43.6368 81.8695 56.0524 83.5143C60.617 84.0626 65.5467 83.5143 69.7461 81.504V87.9004C65.1815 89.3624 60.7995 90.0934 56.4176 89.7279C38.3419 88.9969 26.2914 74.9249 22.4572 57.9289C25.9263 57.9289 27.2043 53.1773 30.1257 47.6948C34.5076 39.8364 41.8109 33.0745 50.3923 30.1505C54.044 28.8712 58.426 27.9574 62.9905 27.9574C64.086 27.9574 65.1815 27.9574 66.277 28.1402C67.7377 31.978 67.5551 40.7501 65.7293 44.7707C63.7209 39.4709 59.3389 37.0951 54.5917 37.0951C42.9064 37.2778 35.6031 48.0603 35.6031 59.3909ZM58.0608 39.6536V64.1425C64.086 64.1425 71.2068 65.0563 76.5017 69.4423C84.1701 75.8387 88.3695 84.0626 92.7515 88.8142C97.4987 94.114 103.524 93.5657 108.636 89.9107C107.906 97.5863 99.6897 103.434 95.8554 104.348C89.465 99.7793 82.5269 86.6211 77.232 79.8593C72.3023 73.4629 67.7377 70.9044 58.0608 70.9044V81.8695C55.1395 81.6868 52.4007 81.1385 49.8446 80.042V39.6536C52.5833 38.9226 55.3221 38.7399 58.0608 39.6536Z"
      fill="white"
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
const CrestFlamengo = styled(Svg)<SvgProps>(
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
CrestFlamengo.defaultProps = {
  verticalAlign: 'middle',
};
export default CrestFlamengo;
