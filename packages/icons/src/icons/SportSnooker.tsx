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
      d="M12.154 20.664c0 1.063-.86 1.925-1.92 1.925s-1.92-.862-1.92-1.925c0-1.064.86-1.926 1.92-1.926s1.92.863 1.92 1.926zm0 0c0 1.063.86 1.925 1.921 1.925 1.06 0 1.92-.862 1.92-1.925m-3.84 0c0-1.064.86-1.926 1.92-1.926s1.92.863 1.92 1.926m-1.92-3.398c0 1.063-.86 1.926-1.92 1.926-1.061 0-1.92-.863-1.92-1.926s.859-1.925 1.92-1.925c1.06 0 1.92.862 1.92 1.925zm0 0c0 1.063.86 1.926 1.92 1.926s1.92-.863 1.92-1.926m-3.84 0c0-1.063.86-1.925 1.92-1.925s1.92.862 1.92 1.925m0 0c0 1.063.86 1.926 1.921 1.926 1.06 0 1.92-.863 1.92-1.926s-.86-1.925-1.92-1.925-1.92.862-1.92 1.925zm-1.92-3.375c0 1.063-.86 1.925-1.92 1.925s-1.92-.862-1.92-1.925c0-1.064.86-1.926 1.92-1.926s1.92.862 1.92 1.926zm0 0c0 1.063.86 1.925 1.92 1.925 1.061 0 1.921-.862 1.921-1.925 0-1.064-.86-1.926-1.92-1.926s-1.92.862-1.92 1.926zm0 6.773c0 1.063.86 1.925 1.92 1.925 1.061 0 1.921-.862 1.921-1.925m-3.84 0c0-1.064.86-1.926 1.92-1.926s1.92.863 1.92 1.926m0 0c0 1.063.86 1.925 1.92 1.925 1.061 0 1.92-.862 1.92-1.925 0-1.064-.859-1.926-1.92-1.926-1.06 0-1.92.863-1.92 1.926zM8.5 24.14h14.993c.9 0 1.724-.477 2.174-1.278.45-.802.45-1.729-.025-2.506L17.92 7.102A2.181 2.181 0 0015.994 6c-.8 0-1.524.4-1.924 1.102l-7.72 13.254a2.541 2.541 0 00-.026 2.53A2.506 2.506 0 008.5 24.14zm9.417-13.625c0 1.064-.86 1.926-1.92 1.926-1.061 0-1.921-.862-1.921-1.926 0-1.063.86-1.925 1.92-1.925s1.92.862 1.92 1.925z"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeMiterlimit={10}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportSnooker =
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
export default SportSnooker;
