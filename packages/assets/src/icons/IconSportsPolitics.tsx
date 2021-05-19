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
      d="M19.664 6.281l-9.445-4.234a.543.543 0 00-.442 0L.336 6.28a.539.539 0 00.222 1.032h1.618v5.507h-.02a.54.54 0 00-.539.54v1.484h-.313a.54.54 0 00-.539.539v2.078a.54.54 0 00.54.539h17.39a.54.54 0 00.54-.539v-2.078a.54.54 0 00-.54-.54h-.312V13.36a.54.54 0 00-.54-.539h-.019V7.313h1.617a.539.539 0 00.223-1.032zM10 3.13l6.93 3.11H3.07L10 3.128zm4.46 9.691V7.313h1.173v5.507H14.46zM5.54 7.313v5.507H4.367V7.313h1.172zm.644 5.507V7.313h.903v5.507h-.903zM7.73 7.313h1.172v5.507H7.73V7.313zm1.82 5.507V7.313h.903v5.507H9.55zm1.547-5.507h1.172v5.507h-1.171V7.313zm1.817 5.507V7.313h.902v5.507h-.902zM2.82 7.313h.902v5.507H2.82V7.313zm15.336 9.609H1.844v-1.004H18.16v1.004h-.004zM2.691 14.844v-.95h14.617v.95H2.691zM17.18 12.82h-.903V7.313h.902v5.507z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportsPolitics = styled(Svg)<IconProps>(
  ({
    backgroundColor, circleColor, color, theme,
  }) => [
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
  ],
);
export default IconSportsPolitics;
