import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="icon-google_svg__a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={21}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.767 8.538h-9.534v4.031h5.488c-.512 2.561-2.651 4.032-5.488 4.032-3.35 0-6.047-2.751-6.047-6.166 0-3.415 2.698-6.166 6.047-6.166 1.441 0 2.744.522 3.767 1.375l2.977-3.035C15.163.996 12.837 0 10.233 0 4.558 0 0 4.648 0 10.435 0 16.22 4.558 20.87 10.233 20.87c5.116 0 9.767-3.795 9.767-10.435 0-.617-.093-1.28-.233-1.897z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#icon-google_svg__a)">
      <path d="M-.87 16.522V4.348l7.826 6.087-7.826 6.087z" fill="#FBBC05" />
    </g>
    <mask
      id="icon-google_svg__b"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={21}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.767 8.538h-9.534v4.031h5.488c-.512 2.561-2.651 4.032-5.488 4.032-3.35 0-6.047-2.751-6.047-6.166 0-3.415 2.698-6.166 6.047-6.166 1.441 0 2.744.522 3.767 1.375l2.977-3.035C15.163.996 12.837 0 10.233 0 4.558 0 0 4.648 0 10.435 0 16.22 4.558 20.87 10.233 20.87c5.116 0 9.767-3.795 9.767-10.435 0-.617-.093-1.28-.233-1.897z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#icon-google_svg__b)">
      <path
        d="M-.87 4.312l8.008 6.123 3.297-2.873 11.304-1.837V-.87H-.87v5.182z"
        fill="#EA4335"
      />
    </g>
    <mask
      id="icon-google_svg__c"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={21}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.767 8.538h-9.534v4.031h5.488c-.512 2.561-2.651 4.032-5.488 4.032-3.35 0-6.047-2.751-6.047-6.166 0-3.415 2.698-6.166 6.047-6.166 1.441 0 2.744.522 3.767 1.375l2.977-3.035C15.163.996 12.837 0 10.233 0 4.558 0 0 4.648 0 10.435 0 16.22 4.558 20.87 10.233 20.87c5.116 0 9.767-3.795 9.767-10.435 0-.617-.093-1.28-.233-1.897z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#icon-google_svg__c)">
      <path
        d="M-.87 16.558L13.26 5.725l3.722.47L21.739-.87v22.61H-.87v-5.182z"
        fill="#34A853"
      />
    </g>
    <mask
      id="icon-google_svg__d"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={21}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.767 8.538h-9.534v4.031h5.488c-.512 2.561-2.651 4.032-5.488 4.032-3.35 0-6.047-2.751-6.047-6.166 0-3.415 2.698-6.166 6.047-6.166 1.441 0 2.744.522 3.767 1.375l2.977-3.035C15.163.996 12.837 0 10.233 0 4.558 0 0 4.648 0 10.435 0 16.22 4.558 20.87 10.233 20.87c5.116 0 9.767-3.795 9.767-10.435 0-.617-.093-1.28-.233-1.897z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#icon-google_svg__d)">
      <path
        d="M21.74 21.74L7.105 10.457l-1.889-1.41 16.522-4.7v17.391z"
        fill="#4285F4"
      />
    </g>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconGoogle = styled(Svg)<IconProps>(
  ({
    backgroundColor, circleColor, color, theme,
  }) => [
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
  ],
);
export default IconGoogle;
