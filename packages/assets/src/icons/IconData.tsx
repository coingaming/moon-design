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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.032 8c.242-1.862 1.815-3.32 3.743-4.284C9.93 2.638 12.84 2 16 2c3.16 0 6.069.638 8.225 1.716 1.928.964 3.501 2.422 3.743 4.284H28v15.5c0 2.102-1.678 3.735-3.775 4.784C22.07 29.361 19.16 30 16 30c-3.16 0-6.069-.638-8.225-1.716C5.678 27.235 4 25.602 4 23.5V8h.032zM6 8.5c0 .936.785 2.053 2.669 2.995C10.493 12.407 13.084 13 16 13c2.916 0 5.506-.593 7.331-1.505C25.215 10.553 26 9.436 26 8.5c0-.936-.785-2.053-2.669-2.995C21.506 4.593 18.916 4 16 4c-2.916 0-5.507.593-7.331 1.505C6.785 6.447 6 7.564 6 8.5zm20 3.657a9.726 9.726 0 01-1.775 1.127C22.07 14.361 19.16 15 16 15c-3.16 0-6.069-.638-8.225-1.716A9.728 9.728 0 016 12.156V16.5c0 .936.785 2.052 2.669 2.995C10.493 20.407 13.084 21 16 21c2.916 0 5.506-.593 7.331-1.505C25.215 18.552 26 17.436 26 16.5v-4.343zM6 23.5v-3.343a9.728 9.728 0 001.775 1.127C9.93 22.361 12.84 23 16 23c3.16 0 6.069-.638 8.225-1.716A9.726 9.726 0 0026 20.157V23.5c0 .936-.785 2.052-2.669 2.995C21.506 27.407 18.916 28 16 28c-2.916 0-5.507-.593-7.331-1.505C6.785 25.552 6 24.436 6 23.5z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconData =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconData;
