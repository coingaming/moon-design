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
      d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zM4 16c0-2.954 1.067-5.658 2.837-7.749l3.456 3.456c.034.034.07.065.107.093A6.969 6.969 0 009 16c0 1.576.52 3.03 1.4 4.2a.999.999 0 00-.107.093l-3.456 3.456A11.952 11.952 0 014 16zm7.707 5.707a.999.999 0 00.093-.107A6.969 6.969 0 0016 23c1.576 0 3.03-.52 4.2-1.4a.999.999 0 00.093.107l3.456 3.456A11.952 11.952 0 0116 28a11.953 11.953 0 01-7.749-2.837l3.456-3.456zm13.456 2.042A11.952 11.952 0 0028 16c0-2.954-1.067-5.658-2.837-7.749l-3.456 3.456a.999.999 0 01-.107.093A6.969 6.969 0 0123 16c0 1.576-.52 3.03-1.4 4.2a.999.999 0 01.107.093l3.456 3.456zM20.2 10.399a.999.999 0 01.093-.106l3.456-3.456A11.952 11.952 0 0016 4a11.952 11.952 0 00-7.749 2.837l3.456 3.456c.034.034.065.07.093.107A6.969 6.969 0 0116 9c1.576 0 3.03.52 4.2 1.4zM11 16a5 5 0 1110 0 5 5 0 01-10 0z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconLifeRing = styled(Svg)<IconProps>(
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
export default IconLifeRing;
