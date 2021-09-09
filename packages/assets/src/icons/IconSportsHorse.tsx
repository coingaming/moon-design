import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.747 13.52a.801.801 0 00-.632.94c.08.443.492.738.922.66l2.902-.525-1.693-1.346-1.499.271zM20.764 10.909l-1.361-3.581c-.66-1.555-1.923-2.193-3.033-2.236l-.842-.929c-.2-.27-.553-.293-.69-.233-.208.09-.278.16-.428.569l-.201 1.064c-.856.668-1.225 1.708-1.533 2.59.6.127 1.076.553 1.297 1.11.42-1.204.582-2.211 1.724-2.526.926-.25 1.884.248 2.233 1.168l1.361 3.582a.202.202 0 01-.105.26.197.197 0 01-.207-.036l-1.693-1.51a.775.775 0 00-1.115.075.83.83 0 00.085 1.146c1.593 1.42 2.287 2.376 3.561 1.82.882-.385 1.298-1.41.947-2.333zM12.163 11.75l-.718-.078-.035.1-1.88.34.612.488c.312.248.552.569.712.926l1.292-.234a.788.788 0 00.6-.518l.428-1.224c-.3.162-.647.239-1.01.2zM10.889 3.229A1.7 1.7 0 008.12 1.254a1.7 1.7 0 002.769 1.975z"
      fill="currentColor"
    />
    <path
      d="M12.395 8.956l-2.21-.738-1.2-2.36.571.658a1.651 1.651 0 00-.634-1.635l-.548-.403A1.547 1.547 0 007.2 4.194c-.41.069-.776.302-1.017.65L3.131 8.955a2.289 2.289 0 00.524 3.122c.902.663.183.108 3.814 2.996l-.369 2.9c-.052.67.434 1.262 1.087 1.323.65.059 1.225-.43 1.277-1.104l.42-3.562a1.246 1.246 0 00-.462-1.07L6.34 11.11c.81-1.17 1.097-1.284 1.476-1.831l-.58-2.497 1.448 2.849c.154.305.449.51.78.547l2.742.796a.96.96 0 00.276-.01.992.992 0 00.802-.893c.052-.558-.291-.931-.89-1.116z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const IconSportsHorse = styled(Svg)<IconProps>(
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
export default IconSportsHorse;
