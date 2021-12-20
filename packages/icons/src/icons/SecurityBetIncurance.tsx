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
      d="M13.518 25.487l-.254.43.254-.43zm4.964 0l.254.43-.254-.43zM11.5 5.843h9v-1h-9v1zm13 4v5.986h1V9.843h-1zm-17 5.986V9.843h-1v5.986h1zm6.272 9.227C10.12 22.902 7.5 19.626 7.5 15.83h-1c0 4.29 2.95 7.838 6.764 10.089l.508-.862zM24.5 15.83c0 3.797-2.62 7.073-6.272 9.227l.508.862c3.813-2.25 6.764-5.799 6.764-10.089h-1zM13.264 25.918a5.388 5.388 0 005.472 0l-.508-.862a4.388 4.388 0 01-4.456 0l-.508.862zM20.5 5.843a4 4 0 014 4h1a5 5 0 00-5-5v1zm-9-1a5 5 0 00-5 5h1a4 4 0 014-4v-1z"
      fill="currentColor"
    />
    <path
      d="M21.5 17.5c0 .552-.412 1-.92 1h-8.476m0-8h8.476c.508 0 .92.448.92 1v.496c0 .104-.085.186-.187.206-.417.08-.73.418-.73.824 0 .406.313.745.73.825.102.02.187.102.187.206v.886c0 .104-.085.187-.187.206-.417.08-.73.419-.73.825 0 .406.313.745.73.824.102.02.187.102.187.206v.443m-11 .053c0 .552.412 1 .92 1h.91m0-8h-.91c-.508 0-.92.448-.92 1v.496c0 .104.085.186.187.206.417.08.73.418.73.824 0 .406-.313.745-.73.825-.102.02-.187.102-.187.206v.886c0 .104.085.187.187.206.417.08.73.419.73.825 0 .406-.313.745-.73.824-.102.02-.187.102-.187.206v.443m7.448.737v-.631m0-1.053v-.632m0-1.052v-.632m0-1.052V12.5m0-1.053v-.631"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SecurityBetIncurance =
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
export default SecurityBetIncurance;
