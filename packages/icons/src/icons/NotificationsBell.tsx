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
      d="M18.702 22.685h.5v-.5h-.5v.5zm-5.775 0v-.5h-.5v.5h.5zm11.065-1.436l-.498.045.498-.045zM8.01 21.224l.498.052-.498-.052zM18.166 9.027h-.5v.332l.306.13.194-.462zm3.374 4.03l.477-.151-.477.151zm-11.11.096l.479.145-.479-.145zm3.404-4.126l.194.461.306-.129v-.332h-.5zm9.948 11.659l.427-.26-.427.26zm-1.285-2.11l-.427.26.427-.26zm-.571-1.77l-.499.038.499-.038zm-.215-2.771l-.499.039.499-.04zM8.199 20.704l.434.249-.434-.25zm1.27-2.206l.433.249-.433-.25zm.512-1.586l.497.051-.497-.051zm.306-2.978l-.497-.051.497.05zm7.915 8.751c0 1.267-1.057 2.315-2.388 2.315v1c1.86 0 3.388-1.472 3.388-3.315h-1zM15.814 25c-1.33 0-2.387-1.048-2.387-2.315h-1c0 1.843 1.529 3.315 3.387 3.315v-1zm-2.887-1.815h5.775v-1h-5.775v1zm-3.755 0h13.656v-1H9.172v1zm13.656 0c.563 0 1.024-.234 1.32-.631.285-.383.386-.872.342-1.35l-.996.09c.027.29-.04.518-.148.662-.096.13-.253.23-.518.23v1zM7.513 21.172c-.05.483.045.98.33 1.37.295.403.76.643 1.329.643v-1c-.268 0-.425-.101-.522-.234-.107-.147-.173-.38-.142-.675l-.995-.104zm6.821-12.56C14.334 7.732 15.068 7 16 7V6c-1.46 0-2.666 1.157-2.666 2.611h1zM16 7c.932 0 1.666.733 1.666 1.611h1C18.666 7.157 17.46 6 16 6v1zm1.972 2.488c1.948.82 2.795 2.788 3.092 3.72l.953-.302c-.317-.996-1.283-3.341-3.657-4.34l-.388.922zm.694-.46V8.61h-1v.416h1zm-7.757 4.27c.266-.882 1.102-2.962 3.12-3.81l-.389-.922c-2.455 1.033-3.405 3.506-3.688 4.442l.957.29zm3.425-4.27V8.61h-1v.416h1zm9.875 11.397l-1.285-2.109-.854.52 1.285 2.11.854-.52zm-1.785-3.658l-.215-2.77-.997.077.215 2.77.997-.077zM8.633 20.953l1.269-2.206-.867-.499-1.27 2.206.868.499zm1.845-3.99l.306-2.978-.994-.102-.307 2.978.995.102zm14.012 4.24a1.825 1.825 0 00-.281-.777l-.854.52a.851.851 0 01.14.348l.995-.09zm-15.982.073a.853.853 0 01.125-.323l-.867-.499a1.827 1.827 0 00-.253.718l.995.104zm14.416-2.96a3.5 3.5 0 01-.5-1.549l-.997.077c.055.706.276 1.388.643 1.992l.854-.52zm-13.022.431a4.5 4.5 0 00.576-1.784l-.995-.102a3.5 3.5 0 01-.448 1.387l.867.499zm.05-5.739c-.091.3-.134.598-.162.875l.995.102c.025-.252.06-.477.124-.687l-.957-.29zm11.112.2c.084.264.124.55.148.866l.997-.078a4.8 4.8 0 00-.192-1.09l-.953.303z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const NotificationsBell =
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
export default NotificationsBell;
