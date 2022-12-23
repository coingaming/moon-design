import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.544 14.368h.011-.01zM7.828 3.252c1.796 0 3.364.946 4.3 2.597 1.141 2.01 1.154 4.623.032 6.5l-.162.261c-.123.195-.249.39-.337.603-.111.27-.13.53-.05.714.119.268.462.431.73.521.257.085.44.102.554.046.113-.053.218-.202.316-.349 1.433-2.14 1.943-5.069 1.329-7.643-.515-2.148-1.767-3.876-3.527-4.866C9.13.578 6.726.516 4.888 1.473c-1.142.594-2.154 1.609-2.852 2.858-1.22 2.184-1.563 4.944-.918 7.38a5.39 5.39 0 00.639 1.515c.236.37.628.84 1.154.968.39.095.914-.082 1.026-.463.1-.332-.101-.753-.277-1.123-.36-.757-.752-1.663-.934-2.637-.307-1.649.198-3.511 1.319-4.86.995-1.198 2.339-1.859 3.783-1.859zm4.9 12.075c-.242 0-.467-.062-.64-.12-.612-.205-1.018-.529-1.208-.958-.17-.39-.156-.866.041-1.342.111-.267.259-.5.4-.725l.152-.243c.964-1.614.947-3.955-.04-5.696-.802-1.412-2.083-2.19-3.605-2.19-1.202 0-2.327.557-3.168 1.57-.973 1.17-1.411 2.78-1.147 4.202.165.882.533 1.728.87 2.439.226.477.507 1.07.32 1.696-.248.833-1.226 1.194-1.981 1.01-.622-.15-1.188-.606-1.64-1.316a6.215 6.215 0 01-.738-1.74C-.35 9.283.02 6.303 1.338 3.942 2.121 2.537 3.221 1.44 4.52.763c2.073-1.078 4.776-1.01 6.886.176 1.957 1.1 3.347 3.01 3.912 5.378.665 2.784.113 5.953-1.44 8.274-.154.23-.343.485-.639.626-.17.08-.344.11-.51.11z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsHorseRacing =
  styled(Svg).withConfig({
    shouldForwardProp: prop =>
      !['backgroundColor', 'circleColor', 'color'].includes(prop),
  }) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
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
export default IconSportsHorseRacing;
