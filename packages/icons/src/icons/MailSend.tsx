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
      d="M17.508 23.89l-.432.25.432-.25zm-3.796-5.81l-.208.454.208-.455zm.896.813l-.432.251.432-.25zm7.79-11.645l-.163-.472.163.472zm2.583 2.425l-.482-.134.482.134zm-2.746-2.897L8.543 11.522l.327.945 13.692-4.746-.327-.945zm-13.916 9.38l5.184 2.378.417-.91-5.184-2.376-.417.909zm5.857 2.988l2.9 4.997.865-.502-2.9-4.997-.865.502zm7.47 4.41l3.816-13.747-.963-.268-3.816 13.748.964.267zm-4.57.587c1.111 1.914 3.979 1.546 4.57-.587l-.963-.267c-.355 1.28-2.076 1.5-2.742.352l-.865.502zm-3.572-5.607a1.5 1.5 0 01.672.61l.864-.502a2.5 2.5 0 00-1.12-1.017l-.416.909zm-4.961-7.012c-2.13.738-2.272 3.695-.224 4.635l.417-.91c-1.229-.563-1.143-2.337.134-2.78l-.327-.945zm14.02-3.801c1.142-.396 2.26.653 1.936 1.818l.963.268c.54-1.942-1.323-3.691-3.227-3.031l.327.945z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MailSend =
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
export default MailSend;
