import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.178 0h-6.37a2.775 2.775 0 00-1.986.852A2.944 2.944 0 008 2.899v22.202c0 .769.297 1.506.825 2.05.528.543 1.244.849 1.99.849h6.363c.747 0 1.464-.305 1.993-.849.529-.543.827-1.28.829-2.05V2.899A2.956 2.956 0 0019.17.85 2.786 2.786 0 0017.178 0"
      fill="#fff"
    />
    <path
      d="M17.713 24.421c-.366-.307-.122-.443-.136-.566-.244-.948-1.033-1.521-.624-1.835a7.04 7.04 0 00-.301-.703c-1.234-.675-2.28-1.767-2.46-1.924-.215-.225-.58-.45-.653-.628-.294-.259-1.75-2.217-2.086-2.94l-.588-.082c-.266-1.044-1.162-1.917-1.184-2.96.027-.48.114-.954.258-1.413.113-.17.253-.322.416-.45v-.28c-1.283.034-.918-.089-1.14-.566-.158-.328-.043-.403.014-.628.173-.675.746-1.712.983-2.19.072-.239.323-.812.323-.812.96-1.855 1.32-1.719 2.452-1.821l.058-.075c1.14-.048.953-.13 1.111-1.174-.165.068-.215-.327-.215-.327-.093-.594.172-.485.301-.491.029-.976.13-1.283.875-1.556h-3.844a2.364 2.364 0 00-.87.161 2.275 2.275 0 00-.738.467 2.15 2.15 0 00-.493.7A2.063 2.063 0 009 3.157v21.681c0 .574.24 1.124.666 1.53a2.334 2.334 0 001.607.633H18c-.767-.396-.308-1.146-.287-2.579z"
      fill="#1D428A"
    />
    <path
      d="M15.678 5.125l.006.09c.175.111.26.195.435.318.465.311 1.033.868.96 2.778.127.415.187 1.237.308 1.496.242.512.399.842.471 1.328 0 0 .073.751.157.81.478.116.339.168.411.252.073.104.35.097.35.376.093.13.169.274.224.427V3.053c0-.545-.202-1.067-.561-1.452A1.852 1.852 0 0017.085 1H15.25c.117.03.226.086.322.164a.918.918 0 01.234.29c.235.019.52.589.078 1.43.193.137.042.344-.096.583-.043.078-.085.214-.218.208-.17.375-.368.738-.52.764a.275.275 0 00-.011.298c.23.092.447.223.64.388M19 14.928c-.12.312-.317.586-.57.796-.254.211-.556.351-.878.407a1.85 1.85 0 01-.957-.087 1.9 1.9 0 01-.794-.559 1.978 1.978 0 01-.426-.887 2.01 2.01 0 01.05-.988c.099-.32.276-.607.514-.836.238-.229.53-.39.846-.47-.221-.566-.677-1.478-.819-1.775-.127-.297-.442-2.155-.51-2.52-.013-.084-.818.476-.818.51-.047.049-.604 1.54-.624 1.623a1.88 1.88 0 00-.014.249s.275.034.43.525c.154.49.63 2.279.63 2.279a1.222 1.222 0 01-.134.131c.598 2.065.39 2.956.658 3.557.335.856.43.739.718 1.457.208.525.443 2.576.517 2.672.322.422.497.753.497.988 0 .242-.276.946-.175 1.36.06.242.094.788.201.891 0 0 .101.208.054.297-.013.035-.04.076-.027.118.181.649.752 1.754-.181 2.334h.02c.5-.08.957-.343 1.285-.74.329-.396.509-.9.507-1.422v-9.91z"
      fill="#C8102E"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconESportsENba =
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
export default IconESportsENba;
