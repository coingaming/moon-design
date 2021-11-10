import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 5.958v3.164a65.756 65.756 0 00-8.515.295 2.492 2.492 0 00-2.23 2.172c-.17 1.4-.255 3.06-.255 4.982 0 .689.01 1.3.033 1.834a3.486 3.486 0 003.192 3.32C5.332 21.91 7.257 22 9 22c1.742 0 3.666-.091 5.772-.274a3.486 3.486 0 003.193-3.315c.023-.548.035-1.178.035-1.889 0-1.908-.084-3.552-.253-4.934a2.492 2.492 0 00-2.23-2.171 64.33 64.33 0 00-.517-.05v-3.41C15 2.668 12.314 0 9 0S3 2.314 3 5.604v.993c0 1.097.895 1.986 2 1.986s2-.889 2-1.986v-.993c0-1.097.895-1.632 2-1.632s2 .89 2 1.986zM9 10.11c2.155 0 4.294.107 6.417.32.698.07 1.253.612 1.338 1.303.163 1.338.245 2.944.245 4.815 0 .698-.011 1.313-.034 1.846a2.49 2.49 0 01-2.28 2.368c-2.079.18-3.974.27-5.686.27a66.3 66.3 0 01-5.688-.27 2.49 2.49 0 01-2.28-2.372A44.392 44.392 0 011 16.597c0-1.884.083-3.505.248-4.862a1.495 1.495 0 011.338-1.304c2.122-.213 4.26-.32 6.414-.32zm3-.946c.668.03 1.335.071 2 .122v-3.31c0-2.742-2.239-4.965-5-4.965S4 2.847 4 5.589v.993c0 .549.448.993 1 .993s1-.444 1-.993V5.59c0-1.645 1.343-2.591 3-2.591s3 1.333 3 2.979v3.188zM9 11.72a2.515 2.515 0 00-2.522 2.508c0 .797.376 1.53 1 2v1.972c0 .84.685 1.515 1.522 1.515s1.522-.675 1.522-1.515V16.23c.624-.47 1-1.203 1-2A2.515 2.515 0 009 11.721zM7.522 14.23c0-.805.658-1.464 1.478-1.464s1.478.659 1.478 1.464c0 .466-.22.895-.59 1.171-.257.192-.41.494-.41.815v1.986c0 .257-.21.471-.478.471a.475.475 0 01-.478-.47v-1.987c0-.321-.153-.623-.41-.815a1.455 1.455 0 01-.59-1.17z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconLock =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconLock;
