import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.59 10.647h.82c1.802 0 3.48.891 4.488 2.385l.098.146a1.63 1.63 0 002.666.054l.053-.07a1.62 1.62 0 00.317-.968v-.934c0-2.862-.64-5.746-1.852-8.34a1.42 1.42 0 00-1.282-.816h-.26c-.4 0-.782.17-1.05.465a2.547 2.547 0 01-1.882.835H8.295a2.545 2.545 0 01-1.883-.835 1.419 1.419 0 00-1.05-.465h-.26c-.547 0-1.05.32-1.282.817a19.838 19.838 0 00-1.851 8.34v.934c0 .35.11.684.318.967l.052.071a1.629 1.629 0 002.665-.056l.098-.145a5.408 5.408 0 014.488-2.385zm6.758 4.374a2.753 2.753 0 01-2.284-1.214l-.099-.146a4.285 4.285 0 00-3.555-1.889h-.82a4.285 4.285 0 00-3.555 1.89l-.098.145a2.752 2.752 0 01-2.285 1.214c-.872 0-1.702-.419-2.22-1.121l-.052-.071a2.74 2.74 0 01-.537-1.635v-.934c0-3.026.677-6.074 1.958-8.816A2.55 2.55 0 015.103.98h.26c.716 0 1.402.304 1.882.834.268.296.651.465 1.05.465h3.41c.4 0 .782-.17 1.05-.465A2.545 2.545 0 0114.638.98h.26A2.55 2.55 0 0117.2 2.444a20.971 20.971 0 011.957 8.816v.934c0 .593-.186 1.158-.537 1.635l-.053.071a2.767 2.767 0 01-2.219 1.121z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportsESports = styled(Svg)<IconProps>(
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
export default IconSportsESports;
