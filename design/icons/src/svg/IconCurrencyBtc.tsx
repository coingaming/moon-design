import * as React from 'react';
import styled from '@emotion/styled';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.405 10.449v2.692h3.883v1.93H4.405v2.705h3.622c1.22 0 2.12-.299 2.7-.897.59-.608.884-1.532.884-2.773 0-1.25-.295-2.17-.884-2.76-.58-.598-1.48-.897-2.7-.897H4.405zm0-8.225v6.028h3.348c1.103 0 1.925-.246 2.464-.737.547-.5.821-1.26.821-2.277 0-1.01-.274-1.764-.821-2.264-.54-.5-1.36-.75-2.464-.75H4.405zM2.14 0h5.775c1.725 0 3.053.429 3.982 1.286.937.857 1.406 2.076 1.406 3.657 0 1.224-.24 2.197-.722 2.92-.473.724-1.174 1.175-2.103 1.353 1.12.286 1.987.885 2.601 1.795.614.902.921 2.032.921 3.39 0 1.786-.51 3.165-1.53 4.139-1.013.973-2.456 1.46-4.331 1.46H2.14v-4.93H0v-1.929h2.14V0z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: string;
  circleColor?: string;
};
export const IconCurrencyBtc = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor }) => [
    {
      verticalAlign: 'middle',
    },
    backgroundColor && {
      backgroundColor,
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    circleColor && {
      circle: {
        fill: circleColor,
      },
    },
  ]
);
