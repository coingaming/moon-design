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
      d="M17.622 20.688h0c-.31.345-.755.542-1.409.542-.604 0-1.058-.195-1.408-.567-.334-.387-.53-.946-.53-1.737 0-.818.193-1.375.51-1.742.327-.362.783-.562 1.428-.562.717 0 1.168.203 1.452.529.295.34.487.901.487 1.775 0 .834-.201 1.397-.53 1.762zm-6.997 2.767h0l.005.004c1.365 1.472 3.25 2.184 5.583 2.184 2.295 0 4.158-.583 5.527-1.81 1.377-1.234 2.044-2.932 2.044-5.03 0-2.006-.546-3.611-1.715-4.725-1.164-1.11-2.818-1.626-4.88-1.626-1.012 0-1.932.16-2.751.489.191-.626.48-1.095.846-1.43.517-.475 1.254-.74 2.27-.74.752 0 1.55.1 2.393.302.465.116.912.032 1.296-.256h0l.004-.003c.39-.298.61-.709.61-1.202v-.877c0-.513-.155-.979-.468-1.378a1.948 1.948 0 00-1.265-.774h0-.005a17.991 17.991 0 00-2.808-.226c-2.737 0-4.906.908-6.432 2.766-1.519 1.834-2.236 4.52-2.236 7.974 0 2.72.634 4.867 1.982 6.358z"
      stroke="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const Other66Free =
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
export default Other66Free;
