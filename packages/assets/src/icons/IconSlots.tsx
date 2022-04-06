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
      d="M13.77 17.756a4.23 4.23 0 100-8.461 4.23 4.23 0 000 8.461zM16.462 13.526c0 1.5-1.193 2.692-2.693 2.692M8.77 15.718c-.424.308-.962.5-1.54.5"
      stroke="currentColor"
      strokeWidth={0.769}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M9.846 16.987a4.31 4.31 0 01-2.577.846A4.26 4.26 0 013 13.564a4.26 4.26 0 014.27-4.27c1 0 1.922.347 2.653.924M13.961 5.064c-.538.846-.807 1.654-.884 2.385-.23 1.807.5 3.269.5 4.038"
      stroke="currentColor"
      strokeWidth={0.769}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M7.423 11.218c1.115-2.73 3.192-5.346 5.23-6.039 1.5-.5 3.078-.5 4.193-.5M8.385 7.449C6.154 6.987 4.423 5.14 4.423 5.14s2.192-2.692 4.962-2.77c1.577-.038 3.038.732 4 1.424"
      stroke="currentColor"
      strokeWidth={0.769}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSlots =
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
export default IconSlots;
