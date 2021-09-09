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
      d="M4.75 19.974l-.192-.11c-.803-.464-1.248-1.208-1.3-2.036-.049-.785.257-1.546.735-2.151a2.49 2.49 0 01.692-.59l4.05-2.405 3.427-4.765c.092-.105.675-.892 2.364-1.967 1.296-.825 3.133-1.641 5.278-1.574a4 4 0 016.928 4c1.13 1.824 1.341 3.822 1.275 5.357-.043.994-.272 2.296-.537 3.079l-2.893 5.01.4 4.811c.028.34.012.775-.177 1.207-.3.684-.809 1.296-1.506 1.62-.733.34-1.574.312-2.352-.137l-7.714-4.454a5.002 5.002 0 01-8.479-4.895zM21.517 5.407a2 2 0 013.464 2l-.624 1.081.392.528c1.084 1.455 1.321 3.189 1.259 4.631a9.738 9.738 0 01-.376 2.346l-3.101 5.372.452 5.434a.54.54 0 01-.016.239c-.152.345-.358.534-.517.608-.122.057-.277.079-.51-.055L14.32 23.19l.011-.02-8.66-5-.011.02-.1-.058c-.238-.137-.296-.286-.305-.43-.011-.185.062-.474.309-.786a.544.544 0 01.143-.109l4.408-2.618 3.61-5.018A9.53 9.53 0 0115.6 7.638c1.218-.776 2.838-1.437 4.64-1.226l.653.076.625-1.081zM6.546 21.01l4.886 2.821a3.001 3.001 0 01-4.886-2.82z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconBell = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
export default IconBell;
