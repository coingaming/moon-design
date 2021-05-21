import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <path
        d="M.702 6.742C.323 6.742 0 6.469 0 6.087c0-.383.323-.655.702-.655H9.05C9.313 3.984 10.526 3 12.016 3c1.484 0 2.682.979 2.963 2.432h4.319c.379 0 .702.272.702.655 0 .382-.323.655-.702.655h-4.363c-.363 1.284-1.552 2.235-2.919 2.235-1.366 0-2.555-.951-2.918-2.235H.702zm11.314-2.407a1.63 1.63 0 000 3.258 1.63 1.63 0 000-3.258zm7.282 10.43h-8.396C10.54 16.049 9.35 17 7.984 17c-1.367 0-2.556-.95-2.919-2.235H.702c-.379 0-.702-.272-.702-.655s.323-.655.702-.655h4.319c.281-1.453 1.479-2.432 2.963-2.432 1.49 0 2.703.985 2.966 2.432h8.348c.379 0 .702.272.702.655s-.323.655-.702.655zM7.984 12.358a1.63 1.63 0 000 3.258 1.63 1.63 0 000-3.258z"
        id="icon-filter_svg__a"
      />
    </defs>
    <use
      fill="currentColor"
      fillRule="nonzero"
      xlinkHref="#icon-filter_svg__a"
      transform="translate(0 -3)"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconFilter =
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
export default IconFilter;
