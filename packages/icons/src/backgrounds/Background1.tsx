import * as React from 'react';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 629 168"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={312.267}
      y={128.171}
      width={12.164}
      height={112.733}
      rx={6.082}
      transform="rotate(-165 312.267 128.171)"
      fill="#0CD664"
    />
    <rect
      opacity={0.6}
      x={285.073}
      y={112.165}
      width={12.164}
      height={134.114}
      rx={6.082}
      transform="rotate(-165 285.073 112.165)"
      fill="#0CD664"
    />
    <rect
      opacity={0.4}
      width={12.164}
      height={97.374}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -182.77 1082.638)"
      fill="#0CD664"
    />
    <rect
      opacity={0.2}
      width={12.164}
      height={142.537}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -256.308 974.822)"
      fill="#0CD664"
    />
    <rect
      opacity={0.4}
      width={12.164}
      height={101.467}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -115.535 838.796)"
      fill="#0CD664"
    />
    <rect
      opacity={0.2}
      width={12.164}
      height={123.467}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -286.718 743.838)"
      fill="#0CD664"
    />
    <rect
      opacity={0.6}
      width={12.164}
      height={128.283}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -247.79 621.217)"
      fill="#0CD664"
    />
    <rect
      opacity={0.3}
      width={12.164}
      height={168.73}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -317.127 512.85)"
      fill="#0CD664"
    />
    <rect
      opacity={0.2}
      width={12.164}
      height={130.874}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -332.331 397.355)"
      fill="#0CD664"
    />
    <rect
      opacity={0.4}
      width={12.164}
      height={130.874}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -347.538 281.863)"
      fill="#0CD664"
    />
    <rect
      opacity={0.6}
      width={12.164}
      height={110.142}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -284.002 156.005)"
      fill="#0CD664"
    />
    <rect
      x={635.378}
      y={214.748}
      width={12.164}
      height={112.733}
      rx={6.082}
      transform="rotate(-165 635.378 214.748)"
      fill="#0CD664"
    />
    <rect
      opacity={0.6}
      x={608.184}
      y={198.742}
      width={12.164}
      height={134.114}
      rx={6.082}
      transform="rotate(-165 608.184 198.742)"
      fill="#0CD664"
    />
    <rect
      opacity={0.4}
      width={12.164}
      height={112.733}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -73.848 2360.741)"
      fill="#0CD664"
    />
    <rect
      opacity={0.2}
      width={12.164}
      height={142.537}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -89.053 2245.25)"
      fill="#0CD664"
    />
    <rect
      opacity={0.4}
      width={12.164}
      height={142.537}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -104.257 2129.757)"
      fill="#0CD664"
    />
    <rect
      opacity={0.2}
      width={12.164}
      height={142.537}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -119.462 2014.263)"
      fill="#0CD664"
    />
    <rect
      opacity={0.6}
      width={12.164}
      height={160.794}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -204.01 1907.9)"
      fill="#0CD664"
    />
    <rect
      opacity={0.3}
      width={12.164}
      height={123.593}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -77.925 1773.806)"
      fill="#0CD664"
    />
    <rect
      opacity={0.2}
      width={12.164}
      height={130.874}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -165.078 1667.784)"
      fill="#0CD664"
    />
    <rect
      opacity={0.4}
      width={12.164}
      height={130.874}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -180.282 1552.29)"
      fill="#0CD664"
    />
    <rect
      opacity={0.6}
      width={12.164}
      height={110.142}
      rx={6.082}
      transform="scale(-1 1) rotate(-15 -116.749 1426.433)"
      fill="#0CD664"
    />
  </svg>
);

type SvgProps = {
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
export const Background1 = styled(Svg)<SvgProps>(
  ({ height, width, fontSize, verticalAlign }) => ({
    height,
    width,
    fontSize,
    verticalAlign,
  })
);
Background1.defaultProps = {
  verticalAlign: 'middle',
};
