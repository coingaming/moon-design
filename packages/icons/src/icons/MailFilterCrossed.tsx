import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.54 17.903h.5v-.204l-.142-.146-.358.35zm-5.278-6.106a.5.5 0 00-.715.7l.715-.7zM13.54 22.93h-.5.5zm.914 1.685l.3-.4-.3.4zm-.11-.082l-.299.4.3-.4zm8.181-17.48l-.002.5.002-.5zM10.74 6.5a.5.5 0 10-.004 1l.004-1zm13.315 3.788l.388.315-.388-.315zm-4.8 5.107a.5.5 0 00.776.63l-.776-.63zm-1.105 6.528a.5.5 0 00-1 0h1zm-.5 1.089h.5-.5zM24.5 9.036h.5-.5zM7.84 7.425a.5.5 0 10-.68.734l.68-.734zm14.7 14.987a.5.5 0 00.68-.734l-.68.733zm-8.643-4.859l-5.636-5.756-.715.7 5.636 5.756.715-.7zm.142 5.377v-5.027h-1v5.027h1zm.713 1.284l-.11-.082-.598.802.11.082.598-.802zm7.774-17.662L10.74 6.5l-.004 1 11.787.052.004-1zm1.14 3.42l-4.412 5.423.776.63 4.412-5.422-.776-.63zM17.15 21.923v1.089h1v-1.089h-1zm-2.995 3.093c1.649 1.23 3.995.053 3.995-2.004h-1c0 1.234-1.408 1.94-2.397 1.202l-.598.802zM25 9.036a2.484 2.484 0 00-2.473-2.484l-.004 1A1.484 1.484 0 0124 9.036h1zM13.04 22.93a2.5 2.5 0 001.005 2.004l.598-.802a1.5 1.5 0 01-.603-1.202h-1zM24 9.036c0 .341-.117.672-.333.936l.776.631c.36-.442.557-.996.557-1.567h-1zM7.16 8.159L22.541 22.41l.68-.733L7.84 7.425l-.68.734z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MailFilterCrossed =
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
export default MailFilterCrossed;
