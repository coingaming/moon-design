import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
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
      d="M11.13 14.751l1.01-1.92 1.623 1.774m7.29.146l-.955-2.026-1.802 2.085m-9.383 6.184h14.174M22.74 23.5l2.037-9.738c.295-.124.554-.316.756-.559.202-.243.341-.53.405-.835.261-1.089-.317-2.204-1.289-2.496-.972-.292-1.974.349-2.235 1.437a2.208 2.208 0 00.383 1.848l-3.618 3.698-2.152-4.634c.256-.205.46-.464.599-.757.138-.293.206-.613.2-.936 0-1.116-.818-2.028-1.825-2.028-1.007 0-1.824.912-1.824 2.036-.007.323.061.643.2.936.137.294.342.553.598.758l-2.152 4.634-3.618-3.707a2.207 2.207 0 00.383-1.857C9.326 10.214 8.326 9.57 7.352 9.86c-.974.29-1.55 1.416-1.29 2.504.065.306.204.593.406.836.202.243.461.435.756.56l2.037 9.737h13.478v.004z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const OtherCrown =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
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
export default OtherCrown;
