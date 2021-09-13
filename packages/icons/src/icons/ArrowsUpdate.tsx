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
      d="M12.556 6.068a.5.5 0 00-.503.864l.503-.864zM16 8.652l.417.276a.5.5 0 00-.165-.708L16 8.652zm-2.634 3.065a.5.5 0 00.833.553l-.833-.553zm8.695-1.238a.5.5 0 00-.67.742l.67-.742zM12.053 6.932l3.695 2.152.504-.864-3.696-2.152-.503.864zm3.53 1.444l-2.217 3.341.833.553 2.218-3.342-.834-.552zm8.417 8.7C24 21.448 20.422 25 16 25v1c4.966 0 9-3.991 9-8.924h-1zM16 25c-4.422 0-8-3.552-8-7.924H7C7 22.009 11.034 26 16 26v-1zm-8-7.924c0-4.372 3.578-7.924 8-7.924v-1c-4.966 0-9 3.991-9 8.924h1zm13.39-5.855A7.868 7.868 0 0124 17.076h1a8.869 8.869 0 00-2.94-6.597l-.67.742z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const ArrowsUpdate =
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
export default ArrowsUpdate;
