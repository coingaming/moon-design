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
    <path
      d="M12.461 9.571c.616-.313 1-.865.91-1.784-.12-1.256-1.206-1.677-2.576-1.797V4.248H9.733v1.696c-.28 0-.564.006-.848.012V4.248h-1.06V5.99a33.4 33.4 0 01-.677.01v-.006H5.684v1.132s.784-.015.771 0c.43 0 .57.25.61.464l.001 1.985v2.788c-.019.135-.099.35-.4.351.015.012-.771 0-.771 0l-.211 1.266h1.381c.258 0 .51.005.759.007v1.762h1.061v-1.743c.292.005.573.008.848.008v1.735h1.062V13.99c1.785-.102 3.034-.552 3.19-2.226.125-1.348-.51-1.95-1.524-2.193zm-3.55-2.369c.598 0 2.482-.19 2.482 1.06 0 1.197-1.883 1.058-2.482 1.058V7.202zm0 5.52v-2.334c.72 0 2.976-.206 2.976 1.167 0 1.317-2.257 1.167-2.977 1.168z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCurrencyBtc = styled(Svg)<IconProps>(
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
export default IconCurrencyBtc;
