import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.429 9.571v6.858c0 .762 1.142.762 1.142 0V9.57h6.858c.762 0 .762-1.142 0-1.142H9.57V1.57c0-.761-1.142-.761-1.142 0V8.43H1.57c-.761 0-.761 1.142 0 1.142H8.43z"
      fill="currentColor"
    />
    <path
      d="M8.429 9.571h.35v-.35h-.35v.35zm1.142 0v-.35h-.35v.35h.35zm0-1.142h-.35v.35h.35v-.35zm-1.142 0v.35h.35v-.35h-.35zm.35 8V9.57h-.7v6.858h.7zm.442 0c0 .095-.032.141-.06.167A.243.243 0 019 16.65a.243.243 0 01-.16-.054c-.03-.026-.061-.072-.061-.167h-.7c0 .285.11.525.296.69.179.159.408.231.625.231a.941.941 0 00.625-.231.902.902 0 00.296-.69h-.7zm0-6.858v6.858h.7V9.57h-.7zm7.208-.35H9.57v.7h6.858v-.7zm0-.442c.095 0 .141.032.167.06A.243.243 0 0116.65 9a.243.243 0 01-.054.16c-.026.03-.072.061-.167.061v.7c.285 0 .525-.11.69-.296A.941.941 0 0017.35 9a.941.941 0 00-.231-.625.902.902 0 00-.69-.296v.7zm-6.858 0h6.858v-.7H9.57v.7zm-.35-7.208V8.43h.7V1.57h-.7zm-.442 0c0-.095.032-.141.06-.167A.243.243 0 019 1.35c.068 0 .125.023.16.054.03.026.061.072.061.167h.7a.902.902 0 00-.296-.69A.941.941 0 009 .65a.941.941 0 00-.625.231.902.902 0 00-.296.69h.7zm0 6.858V1.57h-.7V8.43h.7zm-7.208.35H8.43v-.7H1.57v.7zm0 .442c-.095 0-.141-.032-.167-.06A.243.243 0 011.35 9c0-.068.023-.125.054-.16.026-.03.072-.061.167-.061v-.7a.902.902 0 00-.69.296A.941.941 0 00.65 9c0 .217.072.446.231.625a.902.902 0 00.69.296v-.7zm6.858 0H1.57v.7H8.43v-.7z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconPlus = styled(Svg)<IconProps>(
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
export default IconPlus;
