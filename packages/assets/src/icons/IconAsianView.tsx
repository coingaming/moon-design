import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 6.499l-.503 1.035c-.529-.169-1.032-.337-1.435-.53v1.974H7.828V7.125h-4.48v1.853H2.114V6.932c-.453.217-.93.41-1.46.602L0 6.523c1.032-.24 1.838-.505 2.442-.818H.327v-.963h3.147v-.458H2.089v-.866h1.385v-.433H1.838v-.89h1.636v-.41H1.61v1.083H.403V.698h4.405C4.682.53 4.556.385 4.455.217L5.815 0c.125.217.251.433.352.674h4.48v2.07H9.44V1.661H7.551v.409h1.662v.89H7.55v.434h1.41v.866h-1.41v.458h3.197v.963h-2.24c.63.337 1.46.601 2.492.818zm-4.959.963c-.15 1.251-.478 2.094-.956 2.503-.504.53-1.762.867-3.75 1.01l-.48-1.034c1.637-.072 2.694-.289 3.223-.65.453-.361.73-1.01.78-1.926l1.183.097zM7.073 5.68H3.876a5.182 5.182 0 01-.553.48h4.304a3.514 3.514 0 01-.554-.48zm-2.34-3.972v.41h1.56v-.41h-1.56zm1.56 1.276h-1.56v.433h1.56v-.433zm0 1.757v-.458h-1.56v.458h1.56zm3.725 5.295L9.364 11a19.595 19.595 0 00-3.6-1.348l.63-.89c1.334.336 2.542.77 3.624 1.275zM14.128 2.769V0h1.252v2.769h1.028v1.21H15.38V11h-1.252V3.98H13V2.769h1.128zm7.216 4.597v-.445h1.203v.445H24V8.43h-1.453v1.459c0 .716-.376 1.087-1.103 1.087h-1.328l-.276-1.137c.427.05.827.074 1.203.074.2 0 .301-.123.301-.321V8.429h-2.907c.552.42 1.003.84 1.378 1.236l-.776.767c-.376-.47-.927-.965-1.629-1.508l.526-.495h-1.704V7.366h5.112zM19.54.742V.025h1.203v.717h1.027c-.1-.198-.2-.396-.3-.569L22.521 0c.075.222.175.47.25.717h1.003v1.038h-3.032v.593h2.68v4.45h-1.152V6.03h-1.503v.693h-1.203V6.03H18.06v.791H16.91V2.373h2.656V1.78h-3.032V.742h3.007zm0 3.09v-.57h-1.504v.57h1.504zm0 1.384v-.544h-1.504v.544h1.504zm1.203-1.385h1.503v-.568h-1.503v.568zm0 1.385h1.503v-.544h-1.503v.544z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconAsianView = styled(Svg)<IconProps>(
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
export default IconAsianView;
