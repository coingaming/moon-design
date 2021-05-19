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
    <rect width={20} height={20} rx={10} fill="#FDB500" />
    <rect
      x={1.75}
      y={1.75}
      width={16.5}
      height={16.5}
      rx={8.25}
      fill="#FDB500"
      stroke="#fff"
      strokeWidth={1.5}
    />
    <path
      d="M13.02 9.554c.592-.327.962-.902.876-1.861-.117-1.31-1.16-1.75-2.479-1.875V4h-1.022v1.77c-.269 0-.543.006-.815.012V4H8.56l-.001 1.817c-.221.005-.438.01-.65.01v-.005L6.5 5.82v1.182s.754-.016.742 0c.413 0 .548.26.587.484v4.98c-.018.141-.094.366-.383.367.013.012-.743 0-.743 0l-.203 1.32H7.83c.248.001.49.005.73.007V16h1.02v-1.82c.281.007.552.01.816.01V16h1.021l.001-1.835c1.717-.107 2.918-.576 3.068-2.323.12-1.406-.49-2.034-1.465-2.288zM9.604 7.082c.576 0 2.388-.198 2.388 1.106 0 1.25-1.811 1.104-2.388 1.104v-2.21zm0 5.76v-2.435c.692 0 2.863-.216 2.863 1.217 0 1.374-2.17 1.218-2.863 1.219z"
      fill="#fff"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconBitcoinTalk = styled(Svg)<IconProps>(
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
export default IconBitcoinTalk;
