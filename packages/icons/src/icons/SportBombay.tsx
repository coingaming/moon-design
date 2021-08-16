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
      d="M18.797 12.105l-.354-.186.354.186zm-3.025 1.391a.4.4 0 000 .8v-.8zM14.23 7.29a.4.4 0 00.317.734l-.317-.734zm-.612 3.446a.4.4 0 10.566-.566l-.566.566zm-.227-1.585l.4.019-.4-.019zm1.194-1.143a.4.4 0 10-.342-.723l.342.723zm-.456 10.354a.4.4 0 00-.8 0h.8zm3.995-1.476a.4.4 0 00-.645.472l.645-.472zm4.266.97c0 3.24-2.732 5.89-6.134 5.89v.8c3.815 0 6.934-2.98 6.934-6.69h-.8zm-6.134 5.89c-2.084 0-3.92-.996-5.028-2.514l-.646.472c1.256 1.722 3.332 2.843 5.674 2.843v-.8zm2.39-11.315c2.208.898 3.744 2.995 3.744 5.426h.8c0-2.782-1.757-5.156-4.242-6.167l-.302.74zm-2.874-4.657c1.664 0 2.988 1.295 2.988 2.861h.8c0-2.036-1.71-3.661-3.788-3.661v.8zm2.988 2.861c0 .462-.114.898-.317 1.284l.708.372a3.55 3.55 0 00.409-1.656h-.8zm-.317 1.284c-.49.931-1.498 1.577-2.671 1.577v.8c1.47 0 2.751-.81 3.379-2.005l-.708-.372zm-3.896-3.895c.373-.16.787-.25 1.225-.25v-.8c-.548 0-1.07.112-1.542.316l.317.734zm-3.937 11.23c0-1.952 1.648-3.56 3.714-3.56v-.8c-2.478 0-4.514 1.938-4.514 4.36h.8zm.79 2.196a3.451 3.451 0 01-.79-2.195h-.8c0 1.021.364 1.96.971 2.702l.62-.507zm2.924-5.756c1.513 0 2.808.866 3.388 2.098l.723-.34c-.712-1.514-2.29-2.558-4.11-2.558v.8zm-.14-5.524a1.323 1.323 0 01-.394-1l-.799-.037a2.123 2.123 0 00.627 1.603l.566-.566zm-.394-1c.024-.507.337-.945.795-1.162l-.342-.723a2.162 2.162 0 00-1.252 1.848l.8.037zm4.019 9.192c0 .956-.81 1.757-1.84 1.757v.8c1.443 0 2.64-1.13 2.64-2.557h-.8zm-1.84 1.757c-1.031 0-1.84-.8-1.84-1.757h-.8c0 1.426 1.196 2.557 2.64 2.557v-.8zm1.51-2.76c.209.285.33.63.33 1.003h.8c0-.55-.18-1.06-.485-1.476l-.645.472z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportBombay =
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
export default SportBombay;
