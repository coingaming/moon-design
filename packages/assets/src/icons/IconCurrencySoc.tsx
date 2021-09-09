import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28 56C12.526 56 0 43.474 0 28S12.526 0 28 0s28 12.526 28 28-12.567 28-28 28zm7.491-50.924v4.175l-2.996-.856-2.653-.7V4.013h-4.298v3.684l-2.568.7-2.918.815V5.158C10.602 8.433 3.807 17.438 3.807 28c0 10.561 6.795 19.567 16.252 22.842V46.34l2.91.846 2.493.669v4.216c.819.082 1.678.123 2.497.123.655 0 1.31-.04 1.965-.082v-4.216l2.728-.71 2.84-.805v4.626c9.66-3.152 16.62-12.24 16.62-22.965.04-10.725-6.96-19.813-16.62-22.965z"
      fill="currentColor"
    />
    <path
      d="M27.747 44.702c5.507 0 12.182-2.8 12.182-10.595 0-6.394-4.481-7.888-10.315-10.128-3.594-1.4-4.808-2.24-4.76-3.827 0-1.587 1.166-2.567 3.08-2.567 1.866 0 3.92.886 6.767 3.127l4.388-5.694c-3.174-2.708-7.141-4.388-11.482-4.294-6.161.093-10.875 4.247-10.875 9.754 0 6.535 5.04 8.915 10.081 10.642 3.734 1.26 4.901 2.053 4.901 3.874 0 1.493-1.12 2.8-3.734 2.8-2.287 0-5.32-1.167-7.84-3.92l-4.575 5.554c3.547 3.64 7.935 5.274 12.182 5.274z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCurrencySoc = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default IconCurrencySoc;
