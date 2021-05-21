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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.798 7.39a9.64 9.64 0 00-.393-1.051.403.403 0 00-.737.328c.139.31.257.631.36.961a.402.402 0 10.77-.237zm.352 3.339c.03-.37.034-.752.022-1.123a.404.404 0 00-.42-.387c-.223.01-.403.219-.386.42.014.337.007.684-.02 1.025v.032a.404.404 0 00.804.033zM1.806 10c0 2.194.873 4.186 2.282 5.658.11-.113.224-.223.327-.342a.403.403 0 01.614.522c-.112.132-.237.25-.357.374a8.157 8.157 0 0010.655.002 8.97 8.97 0 01-.582-.654.404.404 0 01.067-.566.402.402 0 01.565.069c.164.207.349.404.533.596a8.155 8.155 0 000-11.32c-.103.11-.212.212-.31.327a.403.403 0 01-.613-.525c.107-.125.226-.237.34-.356a8.155 8.155 0 00-10.654.002c.196.205.392.41.567.631a.404.404 0 01-.631.5c-.162-.203-.341-.39-.52-.578A8.161 8.161 0 001.805 10zm1.987 6.52c-.009-.009-.005-.02-.013-.031A8.968 8.968 0 011 10c0-4.963 4.037-9 9-9 2.393 0 4.565.945 6.178 2.473.006.005.017.003.024.01.004.004.002.011.006.016A8.97 8.97 0 0119 10c0 4.963-4.036 9-9 9-2.385 0-4.55-.94-6.162-2.459-.014-.01-.032-.007-.045-.02zm2.467-2.557c.165-.33.31-.681.433-1.039a.403.403 0 00-.762-.262 7.887 7.887 0 01-.393.944.4.4 0 00.183.54c.2.099.44.017.54-.183zm6.936-1.382c.107.356.239.71.39 1.056a.403.403 0 00.737-.326 8.332 8.332 0 01-.354-.96.405.405 0 00-.79.115c0 .038.005.078.017.115zM12.82 10c0 .125.002.248.007.37.011.222.2.395.422.386a.402.402 0 00.384-.422 8.082 8.082 0 01.023-1.022.393.393 0 00-.369-.435.404.404 0 00-.435.369c-.021.249-.032.5-.032.754zm.494-2.95c.123-.353.269-.704.435-1.038a.402.402 0 11.723.357 8.15 8.15 0 00-.396.943.401.401 0 01-.511.25.404.404 0 01-.25-.512z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsBaseBall =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
  ]);
export default IconSportsBaseBall;
