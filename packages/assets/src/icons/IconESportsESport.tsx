import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.697 17.176h.983a6.49 6.49 0 015.386 2.863l.118.174a1.956 1.956 0 003.198.066l.063-.085c.25-.339.381-.74.381-1.16v-1.122c0-3.435-.768-6.896-2.221-10.007a1.705 1.705 0 00-1.54-.98h-.311a1.7 1.7 0 00-1.26.558 3.056 3.056 0 01-2.259 1.001h-4.093a3.054 3.054 0 01-2.26-1.001 1.702 1.702 0 00-1.259-.558h-.312c-.657 0-1.261.384-1.539.98a23.805 23.805 0 00-2.221 10.007v1.121c0 .42.131.822.382 1.162l.062.085a1.954 1.954 0 003.198-.067l.118-.175a6.49 6.49 0 015.386-2.862zm8.11 5.25c-1.102 0-2.126-.545-2.742-1.457l-.118-.176a5.142 5.142 0 00-4.267-2.267h-.983a5.142 5.142 0 00-4.267 2.268l-.118.174a3.302 3.302 0 01-2.742 1.458 3.32 3.32 0 01-2.663-1.346l-.062-.085a3.288 3.288 0 01-.645-1.962v-1.12c0-3.633.813-7.29 2.349-10.58A3.06 3.06 0 018.31 5.574h.312c.86 0 1.683.365 2.26 1.002.321.354.78.558 1.259.558h4.093c.479 0 .938-.204 1.259-.558a3.053 3.053 0 012.26-1.002h.311c1.18 0 2.264.691 2.763 1.76a25.165 25.165 0 012.349 10.578v1.121c0 .711-.223 1.39-.645 1.962l-.063.085a3.32 3.32 0 01-2.663 1.346z"
      fill="#735BEC"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.668 14.548a.675.675 0 01-.675-.675v-3.319a.675.675 0 011.35 0v3.32a.675.675 0 01-.675.674z"
      fill="#735BEC"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.327 12.889H7.008a.675.675 0 110-1.35h3.319a.675.675 0 110 1.35zM15.53 14.673a1.3 1.3 0 11-2.599 0 1.3 1.3 0 012.599 0zM20.23 10.62a.867.867 0 11-1.733 0 .867.867 0 011.733 0zM20.23 13.807a.867.867 0 11-1.733 0 .867.867 0 011.733 0zM20.957 13.08a.866.866 0 110-1.733.866.866 0 010 1.733zM17.771 13.08a.866.866 0 110-1.733.866.866 0 010 1.733z"
      fill="#735BEC"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconESportsESport =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
  ]);
export default IconESportsESport;
