import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="auto"
    viewBox="0 0 89 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.89483 19.7416V7.84111C6.64564 6.4521 8.29744 5.36341 9.83658 5.36341C11.9013 5.36341 12.9525 6.6398 12.9525 9.23011V19.7416H18.2458V7.91618C18.9591 6.4521 20.5358 5.36341 22.15 5.36341C24.2148 5.36341 25.2659 6.6398 25.2659 9.23011V19.7416H30.5592V8.02881C30.5592 3.11095 27.8938 0.52063 23.877 0.52063C21.174 0.52063 18.6588 1.87211 17.4199 3.71161C16.6315 1.94718 14.4166 0.52063 11.6011 0.52063C9.19842 0.52063 7.28384 1.45915 5.89483 3.29866V1.00866H0.601562V19.7416H5.89483ZM74.5653 7.80356C75.4663 6.41455 77.1556 5.36341 78.8074 5.36341C80.7596 5.36341 82.3738 6.4521 82.3738 9.34274V19.7416H87.6671V8.25406C87.6671 3.44882 85.1894 0.52063 80.8347 0.52063C78.3194 0.52063 76.2547 1.42161 74.5653 3.26111V1.00866H69.2721V19.7416H74.5653V7.80356ZM54.1091 10.1659C54.1091 15.4544 49.822 19.7416 44.5336 19.7416C39.2451 19.7416 34.958 15.4544 34.958 10.1659C34.958 4.87752 39.2451 0.590381 44.5336 0.590381C49.822 0.590381 54.1091 4.87752 54.1091 10.1659ZM60.5265 7.08C62.3185 7.08 63.7712 5.62725 63.7712 3.83519C63.7712 2.04313 62.3185 0.590381 60.5265 0.590381C58.7344 0.590381 57.2816 2.04313 57.2816 3.83519C57.2816 5.62725 58.7344 7.08 60.5265 7.08Z"
      fill="currentColor"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const LogoMoonDesign = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);
LogoMoonDesign.defaultProps = {
  verticalAlign: 'middle',
};
export default LogoMoonDesign;
