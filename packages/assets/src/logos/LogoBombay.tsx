import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="auto"
    viewBox="0 0 99 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d)">
      <path
        d="M22.1457 15.4166C22.1457 11.9583 20.2291 8.9479 17.3958 7.3854C17.7187 6.7604 17.8958 6.06248 17.8958 5.31248C17.8958 3.86457 17.2187 2.61456 16.1562 1.80206C15.1249 0.999981 14.0937 0.499982 12.1562 0.624982C10.1978 0.749982 9.08325 1.9479 9.08325 1.9479C9.03117 1.99998 8.97908 2.05206 8.93742 2.10415C8.44783 2.67706 8.19784 3.37498 8.19784 4.0729C8.18742 4.93748 8.552 5.79165 9.24992 6.40623C9.38533 6.52082 9.52075 6.62498 9.66658 6.70831C9.8645 6.8229 10.1145 6.72915 10.1978 6.52081L10.4687 5.78123L10.4999 5.68748V5.67707C10.4478 5.65623 10.4062 5.6354 10.3645 5.61456C9.6145 5.14581 9.16659 4.27082 9.29159 3.33332C9.33325 3.04165 9.427 2.7604 9.56242 2.52081C9.65617 2.35415 10.4791 1.11456 12.7499 1.31248C13.0937 1.35415 13.4687 1.43748 13.8541 1.59373C14.0312 1.65623 14.1978 1.73956 14.3645 1.83331C14.3749 1.83331 14.3749 1.84373 14.3853 1.84373C15.4062 2.42706 16.0833 3.52081 16.0833 4.77081C16.0833 5.78123 15.7395 6.79165 15.0416 7.40623L15.0312 7.41665C14.927 7.5104 14.8228 7.60415 14.6978 7.6979C14.2916 7.93748 13.802 8.09373 13.3228 8.17707V5.60415C13.3228 5.59373 13.3228 5.58332 13.3228 5.5729V4.34373C13.3228 4.15623 13.1978 3.97915 13.0103 3.92706L11.8749 3.58331V8.2604H10.8853C10.6353 8.2604 10.4062 8.41665 10.3124 8.65623L10.0208 9.4479L11.7395 9.46873C12.8228 9.52081 13.8541 9.73956 14.7812 10.0937C15.0728 10.1979 15.3541 10.3229 15.6249 10.4687C17.0103 11.1979 18.0937 12.4166 18.6562 13.8958C18.927 14.6146 19.0728 15.3854 19.0728 16.1979C19.0728 16.5521 19.0416 16.8854 18.9895 17.2187C18.8957 17.9271 18.6874 18.6146 18.3957 19.2396C17.2707 21.6354 14.8437 23.2916 12.0208 23.2916C10.5208 23.2916 9.12492 22.8229 7.97908 22.0208C7.802 21.8958 7.62492 21.7604 7.45825 21.6146C7.22908 21.4271 7.02075 21.2187 6.82284 21C6.07284 20.1458 5.59367 19.0521 5.59367 17.8646C5.59367 15.2396 7.71867 13.2812 10.3437 13.2812C10.9687 13.2812 11.5624 13.3958 12.1041 13.6146C12.6145 13.8333 13.052 14.1458 13.3957 14.5312C13.7603 15 13.9895 15.5937 13.9895 16.2396C13.9895 16.8646 13.7812 17.4479 13.427 17.9062C12.9687 18.4375 12.3124 18.5104 12.0103 18.5208C11.6145 18.5104 11.2708 18.4271 11.0312 18.3437C10.8333 18.2708 10.6041 18.3854 10.5312 18.5833L10.3541 19.0625C10.7499 19.2708 11.1978 19.3958 11.6666 19.4375C11.677 19.4375 11.6874 19.4375 11.6978 19.4375C11.7395 19.4375 11.7812 19.4375 11.8332 19.4479C11.8541 19.4479 11.8853 19.4479 11.9062 19.4479C11.9166 19.4479 11.927 19.4479 11.9374 19.4479C11.9895 19.4479 12.0416 19.4479 12.0833 19.4479C12.0937 19.4479 12.0937 19.4479 12.1041 19.4479C12.1666 19.4479 12.2291 19.4375 12.2916 19.4375C14.3541 19.2396 16.0208 17.3229 16.0208 15.1354C16.0208 13.3021 14.8853 11.7291 13.2708 11.0937C13.2083 11.0625 13.1457 11.0416 13.0832 11.0208C12.3749 10.75 11.6041 10.6041 10.7916 10.6041C8.81242 10.6041 7.04159 11.4896 5.85409 12.8854C4.88534 14.0208 4.302 15.4791 4.302 17.0833C4.302 17.1354 4.302 17.1771 4.302 17.2291C4.302 17.2396 4.302 17.2604 4.302 17.2708C4.302 17.3229 4.30201 17.375 4.31242 17.4271C4.31242 17.4271 4.31242 17.4271 4.31242 17.4375C4.32284 17.5625 4.33325 17.6875 4.34367 17.8125C4.7395 21.6562 7.97909 24.6458 11.8749 24.6666V26.2916L13.052 25.9896C13.2083 25.9479 13.3228 25.8021 13.3228 25.6458V24.9166C13.3228 24.8958 13.3228 24.875 13.3228 24.8541V24.75C18.2187 24.5833 22.1457 20.5625 22.1457 15.625C22.1457 15.6041 22.1457 15.5833 22.1457 15.5729C22.1457 15.4791 22.1457 15.4479 22.1457 15.4166Z"
        fill="url(#paint0_linear)"
      />
    </g>
    <g filter="url(#filter1_d)">
      <path
        d="M34.9375 16.0625C34.9375 16.5938 34.5417 18.5417 31.2396 18.5417H27.7604V9.01044H31.2396C34.1667 9.01044 34.5209 11.0833 34.5209 11.5C34.5209 12.8125 33.6459 13.4167 32.8646 13.6875C33.8125 13.8958 34.9375 14.4792 34.9375 16.0625ZM31.0313 9.45835H29.1979V13.3959H31.3125C32.0938 13.3959 33.1146 12.8125 33.1146 11.5625C33.1042 10.2084 32.2292 9.45835 31.0313 9.45835ZM33.3646 15.9896C33.3646 14.0209 31.2917 13.8438 30.8854 13.8438H29.1875V18.0209H31.2292C31.2396 18.0313 33.3646 17.9792 33.3646 15.9896Z"
        fill="currentColor"
      />
      <path
        d="M47.7812 13.7396C47.7812 17.1875 45.7187 18.698 43.1875 18.698C40.6562 18.698 38.5938 17.1875 38.5938 13.7396C38.5938 10.4063 40.6562 8.79169 43.1875 8.79169C45.7187 8.79169 47.7812 10.375 47.7812 13.7396ZM46.2188 13.7396C46.2188 10.6771 44.8646 9.21877 43.1875 9.21877C41.5208 9.21877 40.1562 10.7084 40.1562 13.7396C40.1562 16.8959 41.5208 18.2605 43.1875 18.2605C44.8646 18.2605 46.2188 16.8959 46.2188 13.7396Z"
        fill="currentColor"
      />
      <path
        d="M61.7813 18.5313H60.3855L59.25 11.9896L55.7084 18.5313L52.4688 12.4167L51.7605 18.5313H51.1771L52.2709 9L56.1667 16.3959L60.1875 9L61.8334 18.5209L61.7813 18.5313Z"
        fill="currentColor"
      />
      <path
        d="M72.6563 16.0625C72.6563 16.5938 72.2604 18.5417 68.9584 18.5417H65.4792V9.01044H68.9584C71.8854 9.01044 72.2396 11.0833 72.2396 11.5C72.2396 12.8125 71.3646 13.4167 70.5834 13.6875C71.5209 13.8958 72.6563 14.4792 72.6563 16.0625ZM68.75 9.45835H66.9167V13.3959H69.0313C69.8125 13.3959 70.8334 12.8125 70.8334 11.5625C70.8125 10.2084 69.9479 9.45835 68.75 9.45835ZM71.073 15.9896C71.073 14.0209 69 13.8438 68.5938 13.8438H66.8959V18.0209H68.9375C68.9584 18.0313 71.073 17.9792 71.073 15.9896Z"
        fill="currentColor"
      />
      <path
        d="M75.6459 18.5313L79.9167 9L84.2917 18.5313H82.7188L81.8959 16.7292H77.0938L76.2813 18.5313H75.6459ZM77.3125 16.2396H81.6667L79.4688 11.4479L77.3125 16.2396Z"
        fill="currentColor"
      />
      <path
        d="M94.2292 9L90.7813 14.4167V18.5313H89.3438V14.5833L85.6042 9H87.3333L90.5 13.75L93.5208 9H94.2292Z"
        fill="currentColor"
      />
    </g>
    <g filter="url(#filter2_d)">
      <path
        d="M27.7604 24.5208C27.7604 23.5625 28.5313 22.8021 29.4792 22.8021C30.1042 22.8021 30.6563 23.1458 30.9584 23.6458L30.625 23.8437C30.3959 23.4375 29.9792 23.1562 29.4792 23.1562C28.7188 23.1562 28.1459 23.7708 28.1459 24.5104C28.1459 25.25 28.7188 25.8542 29.4792 25.8542C30.0313 25.8542 30.4479 25.5521 30.6667 25.125L31.0104 25.3021C30.7188 25.8542 30.1667 26.2292 29.4896 26.2292C28.5104 26.2396 27.7604 25.4687 27.7604 24.5208Z"
        fill="currentColor"
      />
      <path
        d="M35.2709 22.8438H35.6563V25.8229H37.3855V26.1979H35.2709V22.8438Z"
        fill="currentColor"
      />
      <path
        d="M41.4792 24.9375V22.8333H41.8646V24.9479C41.8646 25.4687 42.2084 25.8646 42.7604 25.8646C43.3021 25.8646 43.6667 25.5 43.6667 24.9479V22.8333H44.0521V24.9375C44.0521 25.7292 43.5104 26.2292 42.7604 26.2292C41.9896 26.2396 41.4792 25.7187 41.4792 24.9375Z"
        fill="currentColor"
      />
      <path
        d="M48.4792 22.8438H49.9063C50.5313 22.8438 50.9479 23.1875 50.9479 23.7292C50.9479 24.0521 50.7917 24.3125 50.5 24.4583C50.8229 24.5938 51.0104 24.875 51.0104 25.25C51.0104 25.8333 50.5833 26.1979 49.9479 26.1979H48.4688V22.8438H48.4792ZM48.8646 23.1875V24.2917H49.9375C50.3438 24.2917 50.5625 24.0521 50.5625 23.7292C50.5625 23.4063 50.3125 23.1875 49.9063 23.1875H48.8646ZM48.8646 24.6458V25.8333H49.9583C50.375 25.8333 50.6354 25.5833 50.6354 25.2396C50.6354 24.8854 50.3958 24.6458 49.9375 24.6458H48.8646Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x={0.302002}
        y={0.605896}
        width={25.8437}
        height={33.6857}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d"
        x={23.7604}
        y={8.79169}
        width={74.4687}
        height={17.9063}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d"
        x={23.7604}
        y={22.8021}
        width={31.25}
        height={11.4272}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1={5.41375}
        y1={2.46143}
        x2={19.5513}
        y2={25.1521}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CDAE81" />
        <stop offset={1} stopColor="#B29265" />
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
const LogoBombay = styled(Svg)<SvgProps>(
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
LogoBombay.defaultProps = {
  verticalAlign: 'middle',
};
export default LogoBombay;
