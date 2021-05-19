import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 66 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.201 51.576c7.552 0 16.704-3.84 16.704-14.528 0-8.768-6.144-10.816-14.144-13.888-4.928-1.92-6.592-3.072-6.528-5.248 0-2.176 1.6-3.52 4.224-3.52 2.56 0 5.376 1.216 9.28 4.288l6.016-7.808C28.401 7.16 22.961 4.856 17.01 4.984 8.561 5.112 2.097 10.808 2.097 18.36c0 8.96 6.912 12.224 13.824 14.592 5.12 1.728 6.72 2.816 6.72 5.312 0 2.048-1.536 3.84-5.12 3.84-3.136 0-7.296-1.6-10.752-5.376L.497 44.344c4.864 4.992 10.88 7.232 16.704 7.232zM40.78 58.104L65.038 3.448 58.06.248 33.74 54.904l7.04 3.2z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCurrencyPen = styled(Svg)<IconProps>(
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
export default IconCurrencyPen;
