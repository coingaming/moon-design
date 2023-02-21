import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 13"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.722 3.034v-2.6c0-.36.396-.563.668-.342l7.45 6.066a.446.446 0 010 .684l-7.45 6.066c-.272.221-.668.018-.668-.342V10.4h-7.45v-.867h7.864c.228 0 .414.194.414.433v1.714l6.362-5.18-6.362-5.18v2.147c0 .24-.186.433-.414.433H10.48v-.866h1.242zM3.444 10.4h-.828v-.867h.828v.867zm-1.745-.111H.85v-.845h.85v.845zm5.522 2.11H2.124v-.844h5.097v.844zm3.008-6.754c0 .914-.776 1.655-1.733 1.655-.957 0-1.733-.74-1.733-1.655s.776-1.656 1.733-1.656c.957 0 1.733.741 1.733 1.656zm-.867 0c0-.457-.387-.828-.866-.828s-.867.37-.867.828c0 .457.388.828.867.828s.866-.371.866-.828zm-5.131-3.8c0 .457.388.828.867.828.478 0 .866-.37.866-.828 0-.457-.388-.828-.866-.828-.48 0-.867.371-.867.828zm-.867 0C3.364.931 4.14.19 5.098.19c.957 0 1.733.74 1.733 1.655s-.776 1.656-1.733 1.656c-.958 0-1.734-.741-1.734-1.656zm.197 3.89l5.947-4.644.525.664-5.947 4.644-.525-.664zm-.587-1.779H0v-.844h2.974v.844z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconCashOut =
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
export default IconCashOut;
