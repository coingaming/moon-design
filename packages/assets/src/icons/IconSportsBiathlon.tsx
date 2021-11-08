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
      d="M12.32 3.238c0 .91.684 1.594 1.594 1.594s1.594-.684 1.594-1.594-.684-1.594-1.594-1.594c-.797 0-1.594.684-1.594 1.594zM5.828 19.973h11.164c.684 0 1.367-.34 1.824-.684.457-.457.797-.91 1.024-1.367.113-.227 0-.457-.227-.57-.226-.114-.457 0-.57.226a4.12 4.12 0 01-.797 1.14c-.34.227-.797.458-1.254.458h-2.05l3.874-8.203c.34-.114.57-.34.57-.684 0-.457-.34-.684-.683-.684h-2.848s-1.824-3.074-2.05-3.418c-.227-.34-.34-.683-.684-.796-.684-.34-1.48 0-1.824.683l-4.559 9.684-4.785 1.48c-.57.227-.91.797-.683 1.254.113.34.34.57.683.684H.7c-.227 0-.458.226-.458.457 0 .23.352.355.578.355l5.008-.015zM13.23 8.008l1.707 2.96h3.422l-3.875 8.204h-1.14c.113-.113.113-.227.226-.34l2.39-5.012-4.327-2.508 1.598-3.304zM2.523 19.172l5.582-1.707 2.278-4.442 2.96 1.707-1.593 3.305c-.227.457-.113.91.227 1.14H9.699c.457-.34.684-.91.91-1.253.114-.227 0-.457-.226-.57-.227-.114-.457 0-.57.226a4.118 4.118 0 01-.797 1.14c-.34.227-.684.458-1.141.458-1.25-.004-4.098-.004-5.352-.004z"
      fill="currentColor"
    />
    <path
      d="M12.777.39c.114-.113 0-.34-.113-.34-.113-.113-.34 0-.34.114l-1.937 3.988-.684.227-1.48 3.074-2.848 3.988 1.707.797L12.777.391z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSportsBiathlon =
  styled(Svg).withConfig({
    shouldForwardProp: prop => !['backgroundColor'].includes(prop),
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
export default IconSportsBiathlon;
