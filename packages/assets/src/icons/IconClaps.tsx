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
      d="M29.007 17.303l-3.392-6.085c-.348-.448-.783-.806-1.218-.895-.348-.09-.696 0-1.044.268-.348.269-.522.627-.609 1.074l3.132 5.728c2.174 4.027 1.478 7.875-2 11.455-.262.268-.436.447-.697.626a6.272 6.272 0 003.914-2.058c3.567-3.67 3.393-7.607 1.914-10.113zm-4.175.716l-3.131-5.638c-.261-.358-.61-.626-1.044-.716-.261-.09-.522 0-.783.18-.522.447-.696 1.073-.261 1.879l1.566 3.49a.71.71 0 01-.174.716c-.174.179-.522.09-.696-.09l-8.177-8.502c-.434-.447-1.217-.447-1.652 0-.261.269-.348.537-.348.895s.087.627.348.806l4.87 5.011c.262.18.262.537.088.716a.452.452 0 01-.696.09s-.087 0-.087-.09l-4.871-4.922-1.392-1.432c-.522-.537-1.217-.537-1.652 0-.435.448-.435 1.253 0 1.7l1.391 1.433 4.871 5.011c.174.18.174.537 0 .806-.174.268-.522.179-.783 0L7.35 14.35c-.435-.447-1.218-.447-1.653 0-.261.269-.348.537-.348.806 0 .357.087.626.348.805l2.087 2.148 3.045 3.132c.174.268.174.537-.087.716-.174.179-.435.179-.696 0l-3.044-3.132c-.261-.269-.522-.358-.87-.358-.61 0-1.131.537-1.131 1.163 0 .358.087.627.348.895l5.915 6.086c3.218 3.31 8.089 5.011 11.742 1.253 3.045-3.133 3.654-6.355 1.827-9.845zM13.524 8.891c.087-.268.174-.537.435-.805a1.554 1.554 0 012.088 0l2.783 2.863a2.767 2.767 0 00-.696 2.685l-4.61-4.743zm1.305-6.444l-1.653.806 2.088 2.506-.435-3.312zm7.306.806l-1.652-.806-.348 3.312 2-2.506zm-4.523 1.7L16.742 2h1.74l-.87 2.953z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconClaps = styled(Svg)<IconProps>(
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
export default IconClaps;
