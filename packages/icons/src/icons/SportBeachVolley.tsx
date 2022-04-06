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
      d="M17.788 18.717a6.803 6.803 0 01-10.07-1.93 6.803 6.803 0 012.447-9.314A6.819 6.819 0 0118.58 8.7m-9.338 2.244c-.045.082-.09.164-.11.194a6.93 6.93 0 00-.913 3.614m4.931 5.394s-.665-.187-1.204-.855c-1.665-2.089-1.995-5.069-.59-7.522.04-.06.11-.194.174-.306m2.147 6.854c.094 0 .187.002.223 0a7.02 7.02 0 003.304-.854m1.545-4.186a6.7 6.7 0 01-5.433 2.802c-.071.004-.222 0-.351 0M7.987 9.59s.431-.5 1.284-.628c2.645-.395 5.387.806 6.817 3.254l.178.305m-9.116-.99c.006-.022 3.751-2.13 6.427 1.818m0 0c-2.068 4.306 1.685 6.603 1.707 6.609m-1.707-6.61c2.916-.217 4.095-1.945 4.57-3.261m.31 11.885c-.616.341-1.26.608-1.928.834a10.87 10.87 0 01-3.004.542c-.183.002-.365.003-.56.013m8.642-12.103l-.546-1.535c-.152-.38-.194-.819-.087-1.18a.854.854 0 01.778-.597.584.584 0 01.563.317l2.06 4.04c.397.832.573 1.75.476 2.655a99.65 99.65 0 01-.394 3.642c-.06.512.096 1.032.416 1.427l.598.766m-2.335-5.69l.041-.875a4.25 4.25 0 00-.628-2.378l-.162-.268a.545.545 0 00-.713-.2s-.014.007-.02.028c-.393.39-.529.961-.386 1.488a2.786 2.786 0 01-.144 1.837c-1.425 2.031-1.264 4.005-.264 5.525l2.155 4.121"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeMiterlimit={10}
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
const SportBeachVolley =
  styled(Svg) <
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
export default SportBeachVolley;
