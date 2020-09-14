import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.032 6c.242-1.862 1.815-3.32 3.743-4.284C5.93.638 8.84 0 12 0c3.16 0 6.069.638 8.225 1.716 1.928.964 3.501 2.422 3.743 4.284H24v15.5c0 2.102-1.678 3.735-3.775 4.784C18.07 27.361 15.16 28 12 28c-3.16 0-6.069-.638-8.225-1.716C1.678 25.235 0 23.602 0 21.5V6h.032zM2 6.5c0 .936.785 2.053 2.669 2.995C6.494 10.407 9.084 11 12 11c2.916 0 5.506-.593 7.331-1.505C21.215 8.553 22 7.436 22 6.5c0-.936-.785-2.053-2.669-2.995C17.506 2.593 14.916 2 12 2c-2.916 0-5.506.593-7.331 1.505C2.785 4.447 2 5.564 2 6.5zm20 3.657a9.726 9.726 0 01-1.775 1.127C18.07 12.361 15.16 13 12 13c-3.16 0-6.069-.638-8.225-1.716A9.728 9.728 0 012 10.156V14.5c0 .936.785 2.052 2.669 2.995C6.494 18.407 9.084 19 12 19c2.916 0 5.506-.593 7.331-1.505C21.215 16.552 22 15.436 22 14.5v-4.343zM2 21.5v-3.343a9.728 9.728 0 001.775 1.127C5.93 20.361 8.84 21 12 21c3.16 0 6.069-.638 8.225-1.716A9.726 9.726 0 0022 18.157V21.5c0 .936-.785 2.052-2.669 2.995C17.506 25.407 14.916 26 12 26c-2.916 0-5.506-.593-7.331-1.505C2.785 23.552 2 22.436 2 21.5z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconData = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default IconData;
