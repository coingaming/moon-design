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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.33 4.684c.595 0 1.08.484 1.08 1.08 0 .595-.485 1.08-1.08 1.08-.595 0-1.08-.485-1.08-1.08 0-.596.485-1.08 1.08-1.08zm0 2.88c.993 0 1.8-.807 1.8-1.8s-.807-1.8-1.8-1.8c-.992 0-1.8.807-1.8 1.8s.808 1.8 1.8 1.8zm2.026 10.567l-3.345-3.345.776-.776 3.344 3.345-.775.776zM2.837 2.833c.754-.753 1.777-1.118 2.885-1.118 1.552 0 3.27.717 4.635 2.082 1.122 1.123 1.793 2.482 2 3.793.015.173.031.337.047.5.08 1.237-.255 2.4-1.085 3.228-.898.902-2.187 1.244-3.544 1.075l-.023-.003c-1.359-.176-2.785-.869-3.95-2.036-2.34-2.338-2.771-5.714-.965-7.52zm11.189 10.92l-.29.29c-.434-.313-1.423-.86-3.342-1.267a4.42 4.42 0 001.436-.948c.4-.402.713-.874.933-1.394.41 1.904.952 2.886 1.263 3.318zm4.87 3.348l-3.855-3.856a.368.368 0 00-.495-.005c-.35-.53-1.048-1.925-1.391-4.895a6.19 6.19 0 00-.042-.63c-.01-.098-.033-.195-.048-.292l-.005-.05c-.001-.011-.007-.02-.009-.03-.262-1.468-1.024-2.895-2.184-4.056C8.246.666 4.417.234 2.327 2.323 1.306 3.347.85 4.808 1.045 6.437c.191 1.596.99 3.169 2.247 4.428 1.124 1.122 2.5 1.877 3.918 2.161a.35.35 0 00.15.05c.116.01.22.022.333.032.008 0 .017.003.025.004.019.002.036 0 .054.004 3.372.316 4.906 1.084 5.46 1.452a.353.353 0 00.017.473l3.853 3.854a.36.36 0 00.51 0l1.285-1.285a.363.363 0 000-.51z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportsSquash = styled(Svg)<IconProps>(
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
export default IconSportsSquash;
