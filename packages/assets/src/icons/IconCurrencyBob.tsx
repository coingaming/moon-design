import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.252 46h19.52c10.176 0 14.976-5.312 14.976-12.672 0-5.632-2.752-9.856-9.216-11.52v-.128c5.248-2.048 6.848-6.144 6.848-10.048C32.38 4.656 27.516.56 17.468.56H.252V46zm10.432-27.2V9.904h5.248c4.416 0 5.824 1.792 5.824 4.416 0 3.008-1.92 4.48-5.248 4.48h-5.824zm0 17.92v-9.792h6.912c3.968 0 6.08 1.856 6.08 4.928 0 3.2-2.112 4.864-5.696 4.864h-7.296zM50.416 46.576c8.576 0 12.736-4.224 12.736-10.048 0-6.144-3.776-7.936-10.688-10.304-3.136-1.088-4.288-1.792-4.288-2.752 0-1.216 1.344-1.728 2.496-1.728 2.112 0 4.8 1.088 6.976 3.264l4.736-6.976c-3.648-2.688-7.104-3.904-11.84-3.904-6.528 0-11.712 3.648-11.712 9.984 0 6.016 4.608 8.576 9.856 10.176 3.904 1.216 4.864 1.856 4.864 2.88 0 1.152-1.024 1.856-3.008 1.856-2.88 0-5.568-1.152-8.192-3.52l-4.672 6.464c3.456 3.072 7.808 4.608 12.736 4.608z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconCurrencyBob = styled(Svg)<IconProps>(
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
export default IconCurrencyBob;
