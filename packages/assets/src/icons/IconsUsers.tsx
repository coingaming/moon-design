import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/sportsbet-themes';
import { themed } from '@heathmont/sportsbet-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    width="1em"
    height="1em"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.557 0a4.377 4.377 0 0 0-4.373 4.374 4.377 4.377 0 0 0 4.373 4.374 4.377 4.377 0 0 0 4.374-4.374A4.377 4.377 0 0 0 8.557 0zm-3.28 4.374c0 1.809 1.47 3.28 3.28 3.28 1.81 0 3.28-1.47 3.28-3.28 0-1.81-1.47-3.28-3.28-3.28a3.283 3.283 0 0 0-3.28 3.28zM17.305 3.28c-1.81 0-3.28 1.47-3.28 3.28 0 1.81 1.47 3.281 3.28 3.281 1.81 0 3.28-1.47 3.28-3.28 0-1.81-1.469-3.28-3.28-3.28zm-2.187 3.28c0 1.207.98 2.188 2.187 2.188 1.206 0 2.187-.98 2.187-2.187 0-1.206-.98-2.187-2.187-2.187-1.206 0-2.187.98-2.187 2.187zm2.187 5.468a.547.547 0 0 1 0-1.093c1.507 0 3.014.122 4.52.366a2.187 2.187 0 0 1 1.753 1.56l.34 1.194c.012.043.023.086.033.13.253 1.153-.499 2.289-1.641 2.598a23.229 23.229 0 0 1-3.33.634.547.547 0 0 1-.12-1.087c.938-.103 2.123-.32 3.164-.602.597-.162.983-.744.859-1.309a1.037 1.037 0 0 0-.017-.065l-.34-1.194a1.093 1.093 0 0 0-.876-.78 27.11 27.11 0 0 0-4.345-.352zM8.557 18.59c3.126 0 5.394-.292 6.784-.86.485-.198.762-.713.66-1.226l-.426-2.131a2.734 2.734 0 0 0-2.45-2.19c-1.209-.102-2.732-.154-4.568-.154-1.835 0-3.358.052-4.568.155a2.734 2.734 0 0 0-2.45 2.189l-.424 2.13a1.093 1.093 0 0 0 .658 1.227c1.39.568 3.658.86 6.784.86zm-7.197.152c1.55.633 3.942.942 7.198.942 3.255 0 5.648-.309 7.197-.942a2.187 2.187 0 0 0 1.318-2.452l-.426-2.131a3.827 3.827 0 0 0-3.428-3.065c-1.244-.106-2.797-.158-4.661-.158-1.864 0-3.418.052-4.662.158a3.827 3.827 0 0 0-3.428 3.065l-.426 2.13a2.187 2.187 0 0 0 1.318 2.453z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconsUsers = styled(Svg)<IconProps>(
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
export default IconsUsers;
