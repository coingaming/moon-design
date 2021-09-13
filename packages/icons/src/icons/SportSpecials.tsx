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
      d="M15.627 25.106a.4.4 0 10.441.668l-.44-.668zm3.756-2.001l.024-.4a.4.4 0 00-.244.066l.22.334zm4.23.255l-.023.4a.4.4 0 00.401-.533l-.377.133zm-1.859-6.49a.4.4 0 10-.754.266l.754-.265zm-2.87 6.283a.4.4 0 00.757-.26l-.756.26zm-.523-3.978a.4.4 0 00-.756.26l.756-.26zm-2.814 6.59a.4.4 0 10.441-.667l-.44.667zm-2.93-2.413l.221-.334a.4.4 0 00-.244-.066l.024.4zm-4.23.255l-.382-.12a.4.4 0 00.406.52l-.024-.4zm2.643-7.113a.4.4 0 10-.764-.239l.764.239zm1.383 6.717a.4.4 0 00.771.21l-.771-.21zm1.935-4.053a.4.4 0 00-.771-.21l.771.21zm7.85-6.197a6.065 6.065 0 01-6.066 6.065v.8a6.865 6.865 0 006.865-6.865h-.8zm-6.066 6.065a6.065 6.065 0 01-6.065-6.065h-.8a6.865 6.865 0 006.865 6.865v-.8zm-6.065-6.065a6.065 6.065 0 016.065-6.065v-.8a6.865 6.865 0 00-6.865 6.865h.8zm6.065-6.065a6.065 6.065 0 016.065 6.065h.8a6.865 6.865 0 00-6.865-6.865v.8zm-2.18 6.065a.01.01 0 01.01-.01v.8a.79.79 0 00.79-.79h-.8zm.01-.01a.01.01 0 01.01.01h-.8c0 .436.354.79.79.79v-.8zm.01.01a.01.01 0 01-.01.01v-.8a.79.79 0 00-.79.79h.8zm-.01.01a.01.01 0 01-.01-.01h.8a.79.79 0 00-.79-.79v.8zm2.126-.01a.01.01 0 01.01-.01v.8a.79.79 0 00.79-.79h-.8zm.01-.01a.01.01 0 01.01.01h-.8c0 .436.354.79.79.79v-.8zm.01.01a.01.01 0 01-.01.01v-.8a.79.79 0 00-.79.79h.8zm-.01.01a.01.01 0 01-.01-.01h.8a.79.79 0 00-.79-.79v.8zm2.125-.01a.01.01 0 01.01-.01v.8a.79.79 0 00.79-.79h-.8zm.01-.01a.01.01 0 01.01.01h-.8c0 .436.354.79.79.79v-.8zm.01.01a.01.01 0 01-.01.01v-.8a.79.79 0 00-.79.79h.8zm-.01.01a.01.01 0 01-.01-.01h.8a.79.79 0 00-.79-.79v.8zm-2.165 12.803l3.536-2.335-.441-.668-3.536 2.335.441.668zm3.291-2.27l4.23.255.049-.798-4.23-.255-.049.798zm4.632-.277l-2.237-6.357-.754.266 2.236 6.357.755-.266zm-4.35-.334l-1.28-3.718-.756.26 1.28 3.718.756-.26zm-3.653 2.205l-3.15-2.08-.44.668 3.15 2.08.44-.668zm-3.394-2.145l-4.23.255.047.798 4.23-.255-.047-.799zm-3.825.773l2.26-7.232-.763-.239-2.26 7.233.763.238zm4.415-.305l1.164-4.263-.771-.21-1.165 4.263.772.21z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportSpecials =
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
export default SportSpecials;
