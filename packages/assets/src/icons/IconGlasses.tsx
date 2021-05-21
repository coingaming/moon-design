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
    <circle cx={8} cy={24} r={5} stroke="currentColor" strokeWidth={2} />
    <circle cx={24} cy={24} r={5} stroke="currentColor" strokeWidth={2} />
    <path d="M19 24h-6" stroke="currentColor" strokeWidth={2} />
    <path
      d="M7 7l.972.236.005-.02.004-.02L7 7zm4-3a1 1 0 100-2v2zM2.028 23.265a1 1 0 001.944.47l-1.944-.47zM7.981 7.196c.227-1.14.615-1.937 1.099-2.44C9.538 4.279 10.146 4 11 4V2c-1.355 0-2.498.471-3.362 1.37C6.8 4.24 6.292 5.442 6.02 6.803l1.962.392zm-1.953-.432l-4 16.5 1.944.472 4-16.5-1.944-.472zM25 7l-.972.236-.005-.02-.004-.02L25 7zm-4-3a1 1 0 110-2v2zm8.972 19.265a1 1 0 01-1.944.47l1.944-.47zM24.019 7.196c-.227-1.14-.615-1.937-1.099-2.44C22.461 4.279 21.854 4 21 4V2c1.355 0 2.498.471 3.362 1.37.839.871 1.346 2.073 1.619 3.434l-1.962.392zm1.953-.432l4 16.5-1.944.472-4-16.5 1.944-.472z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconGlasses =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
  ]);
export default IconGlasses;
