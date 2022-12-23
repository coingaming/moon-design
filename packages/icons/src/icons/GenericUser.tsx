import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
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
      d="M24.006 23.659l.264.424-.264-.424zm-16.013 0l.264-.425-.264.425zm-.756-1.603l.498.043-.498-.043zm17.524 0l-.498.043.498-.043zm-.695-2.453l-.456.205.456-.205zm-16.134 0l-.456-.205.456.205zm11.952-8.718a3.885 3.885 0 01-3.885 3.884v1a4.885 4.885 0 004.885-4.884h-1zm-3.885 3.884a3.885 3.885 0 01-3.884-3.884h-1a4.885 4.885 0 004.884 4.884v-1zm-3.884-3.884A3.885 3.885 0 0115.999 7V6a4.885 4.885 0 00-4.884 4.885h1zM15.999 7a3.885 3.885 0 013.885 3.885h1A4.885 4.885 0 0015.999 6v1zm7.743 16.234c-1.08.67-3.49 1.766-7.743 1.766v1c4.434 0 7.029-1.145 8.27-1.917l-.527-.85zM15.999 25c-4.252 0-6.663-1.095-7.742-1.766l-.528.85c1.242.77 3.836 1.916 8.27 1.916v-1zm-9.26-2.986c-.07.804.265 1.62.99 2.07l.528-.85c-.362-.225-.563-.652-.522-1.135l-.996-.085zm17.524.085c.042.483-.16.91-.521 1.135l.527.85c.725-.45 1.06-1.266.99-2.07l-.996.085zm-.653-2.291c.302.671.585 1.491.653 2.291l.996-.085c-.082-.958-.413-1.895-.737-2.616l-.912.41zM7.735 22.099c.069-.8.352-1.62.654-2.291l-.913-.41c-.324.721-.655 1.658-.737 2.616l.996.085zm13.968-4.407H10.296v1h11.407v-1zM8.389 19.808c.313-.699 1.058-1.116 1.907-1.116v-1c-1.157 0-2.312.576-2.82 1.706l.913.41zm16.133-.41c-.507-1.13-1.663-1.706-2.82-1.706v1c.85 0 1.594.417 1.908 1.116l.912-.41z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericUser =
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
export default GenericUser;
