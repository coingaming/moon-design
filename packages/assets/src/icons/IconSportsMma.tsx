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
    <g clipPath="url(#icon-sports-mma_svg__clip0)">
      <path
        d="M8.032 3.469a1.735 1.735 0 000-3.469 1.735 1.735 0 000 3.469zm7.632-.117c-.347 0-.695.117-1.039.347 0 0-.23.117-.347.117-.23 0-.348.118-.578.23H7.223c-1.273 0-1.734.927-1.734 1.735v5.317l-.578 3.816-1.965 3.582c-.23.461-.118 1.156.46 1.387.118.117.348.117.462.117.347 0 .695-.23.925-.578l2.2-3.93.46-3.351 2.774 2.312-.695 4.395c-.118.578.347 1.156.808 1.156h.23c.462 0 .926-.348 1.04-.926l.926-5.55-4.16-3.47V8.325l.808 1.617 2.313-.46c.117.117.347.117.46 0 .23 0 .348 0 .461.117.23.117.348.117.579.117.808 0 1.503-.578 1.503-1.387 0-.808-.695-1.387-1.504-1.387-.46 0-.925.23-1.156.579-.117.117-.23.23-.348.23-.23-.117-.347 0-.46.117l-1.157.23-1.273-2.542h5.203c.117.117.23.117.461.117.23 0 .46.117.46.117.231.117.579.23.927.23.808 0 1.504-.578 1.504-1.386.007-.703-.684-1.281-1.493-1.281z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="icon-sports-mma_svg__clip0">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsMma =
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
export default IconSportsMma;
