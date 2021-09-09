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
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      fill="#274DD4"
    />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#274DD4"
      />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M5.14996 4.97023L6.64996 4.47023V2.97023L7.54996 4.17023L9.04996 3.67023L8.04996 4.97023L8.94996 6.17023L7.54996 5.77023L6.64996 6.97023V5.47023L5.14996 4.97023Z"
        fill="#FF3E44"
      />
      <path
        d="M0.249969 4.97023L1.74997 4.47023V2.97023L2.64997 4.17023L4.14997 3.67023L3.14997 4.97023L4.04997 6.17023L2.64997 5.77023L1.74997 6.97023V5.47023L0.249969 4.97023Z"
        fill="#FF3E44"
      />
      <path
        d="M10.05 4.97023L11.55 4.47023V2.97023L12.45 4.17023L13.95 3.67023L13.05 4.87023L13.95 6.07023L12.45 5.57023L11.55 6.77023V5.47023L10.05 4.97023Z"
        fill="#FF3E44"
      />
      <path
        d="M14.9501 4.97023L16.4501 4.47023V2.97023L17.3501 4.17023L18.8501 3.67023L17.9501 4.87023L18.8501 6.07023L17.3501 5.57023L16.4501 6.77023V5.47023L14.9501 4.97023Z"
        fill="#FF3E44"
      />
      <path
        d="M19.85 4.97023L21.35 4.47023V2.97023L22.25 4.17023L23.75 3.67023L22.85 4.87023L23.75 6.07023L22.25 5.57023L21.35 6.77023V5.47023L19.85 4.97023Z"
        fill="#FF3E44"
      />
      <path
        d="M5.14996 19.0264L6.64996 18.5264V17.0264L7.54996 18.2264L9.04996 17.7264L8.04996 19.0264L8.94996 20.2264L7.54996 19.8264L6.64996 21.0264V19.5264L5.14996 19.0264Z"
        fill="#FF3E44"
      />
      <path
        d="M0.249969 19.0264L1.74997 18.5264V17.0264L2.64997 18.2264L4.14997 17.7264L3.14997 19.0264L4.04997 20.2264L2.64997 19.8264L1.74997 21.0264V19.5264L0.249969 19.0264Z"
        fill="#FF3E44"
      />
      <path
        d="M10.05 19.0264L11.55 18.5264V17.0264L12.45 18.2264L13.95 17.7264L13.05 18.9264L13.95 20.1264L12.45 19.6264L11.55 20.8264V19.5264L10.05 19.0264Z"
        fill="#FF3E44"
      />
      <path
        d="M14.9501 19.0264L16.4501 18.5264V17.0264L17.3501 18.2264L18.8501 17.7264L17.9501 18.9264L18.8501 20.1264L17.3501 19.6264L16.4501 20.8264V19.5264L14.9501 19.0264Z"
        fill="#FF3E44"
      />
      <path
        d="M19.85 19.0264L21.35 18.5264V17.0264L22.25 18.2264L23.75 17.7264L22.85 18.9264L23.75 20.1264L22.25 19.6264L21.35 20.8264V19.5264L19.85 19.0264Z"
        fill="#FF3E44"
      />
      <path
        d="M20.1 12.7998C20.1 11.4998 19.3 11.1998 17.9 10.7998C17.2 10.5998 17 10.4998 17 10.1998C17 9.9998 17.2 9.7998 17.6 9.7998C18 9.8998 18.5 9.9998 19 10.3998L19.9 9.2998C19.4 8.8998 18.8 8.5998 18.1 8.4998V7.2998H17.1V8.3998C16 8.5998 15.3 9.2998 15.3 10.2998C15.3 11.4998 16.3 11.8998 17.4 12.1998C18.1 12.3998 18.3 12.5998 18.3 12.8998C18.3 13.0998 18.1 13.2998 17.7 13.2998C17.2 13.2998 16.6 13.0998 16.1 12.5998L15.2 13.6998C15.8 14.2998 16.4 14.5998 17.2 14.6998V15.7998H18.2V14.6998C19.3 14.5998 20.1 13.8998 20.1 12.7998Z"
        fill="white"
      />
      <path
        d="M9.3 14.6998H8L5.4 10.9998V14.5998H4V8.6998H5.4L8 12.3998V8.6998H9.4V14.6998H9.3Z"
        fill="#F9F7F7"
      />
      <path
        d="M14.8 8.6998L12.3 13.2998H14.5V14.5998H10L12.5 9.9998H10.4V8.6998H14.8Z"
        fill="#F9F7F7"
      />
    </g>
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const IconNewZealandDollar = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
  })
);
IconNewZealandDollar.defaultProps = {};
export default IconNewZealandDollar;
