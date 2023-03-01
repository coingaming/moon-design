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
      d="M20.5 5.343h-9a4.5 4.5 0 00-4.5 4.5v5.986c0 4.044 2.786 7.456 6.518 9.658a4.888 4.888 0 004.964 0C22.214 23.285 25 19.873 25 15.829V9.843a4.5 4.5 0 00-4.5-4.5z"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M21.5 17.5c0 .552-.412 1-.92 1h-8.476m0-8h8.476c.508 0 .92.448.92 1v.496c0 .104-.085.186-.187.206-.417.08-.73.418-.73.824 0 .406.313.745.73.825.102.02.187.102.187.206v.886c0 .104-.085.187-.187.206-.417.08-.73.419-.73.825 0 .406.313.745.73.824.102.02.187.102.187.206v.443m-11 .053c0 .552.412 1 .92 1h.91m0-8h-.91c-.508 0-.92.448-.92 1v.496c0 .104.085.186.187.206.417.08.73.418.73.824 0 .406-.313.745-.73.825-.102.02-.187.102-.187.206v.886c0 .104.085.187.187.206.417.08.73.419.73.825 0 .406-.313.745-.73.824-.102.02-.187.102-.187.206v.443m7.448.737v-.631m0-1.053v-.632m0-1.052v-.632m0-1.052V12.5m0-1.053v-.631"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeLinecap="round"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityBetInsurance =
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
export default SecurityBetInsurance;
