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
      d="M13.192 10.166a.4.4 0 10.681-.42l-.68.42zm-1.341-3.7a.4.4 0 10-.681.42l.68-.42zm10.06 12l-.33.227.003.004.327-.23zm1.874.938l.26.303.006-.005-.266-.299zm.453-1.27l-.398-.037v.006l.398.03zm2.752.06l-.398.04.001.013.397-.053zm-1.21 3.175l-.286-.28-.003.004.29.276zm-2.176.997v-.4h-.014l-.014.001.028.4zm-3.87-2.479l.349-.195-.005-.008-.004-.008-.34.211zM13.443 5.452a.4.4 0 00-.66.452l.66-.452zm1.078 2.99a.4.4 0 10.66-.453l-.66.452zM16 21.098l.011-.4H16v.4zm3.216-15.194a.4.4 0 10-.658-.455l.658.455zM10.06 18.466l.327.232.002-.005-.329-.227zm-1.874.938l-.266.299.005.004.26-.303zm-.454-1.27l.4-.031-.001-.006-.399.037zM6.1 16.894l.082.392.007-.002.008-.002-.097-.388zm-1.089 1.27l.397.053.001-.013-.398-.04zm1.21 3.174l.29-.276-.004-.003-.286.28zm2.176.998l.028-.399-.014-.001h-.014v.4zm3.87-2.479l-.34-.211-.004.008-.005.008.35.195zM20.8 6.887a.4.4 0 00-.68-.423l.68.423zm-3.36 9.287l1.995-1.27-.429-.675-1.995 1.27.43.675zm1.12 2.583l2.085-1.3-.423-.679-2.086 1.3.423.68zm-4.686-9.01l-2.022-3.281-.681.42 2.022 3.28.681-.42zm3.113 2.264l4.595 6.682.66-.453-4.596-6.682-.66.453zm4.598 6.686c.537.759.962 1.078 1.349 1.207l.253-.76c-.157-.051-.458-.216-.949-.909l-.653.462zm1.349 1.207c.382.127.777.09 1.112-.197l-.52-.607c-.088.075-.177.099-.34.045l-.252.759zm1.118-.202c.22-.195.352-.503.433-.756.085-.269.136-.556.153-.782l-.797-.061a2.827 2.827 0 01-.119.601c-.07.223-.15.354-.202.4l.532.598zm.586-1.532c.024-.267.119-.502.277-.66l-.565-.566c-.325.325-.473.755-.509 1.154l.797.072zm.277-.66c.156-.156.38-.246.655-.246v-.8c-.452 0-.892.152-1.22.48l.565.566zm.655-.246c.087 0 .135 0 .205.018l.194-.776c-.172-.043-.305-.042-.4-.042v.8zm.205.018c.437.11.774.51.818.952l.796-.08a1.917 1.917 0 00-1.42-1.648l-.194.776zm.82.965c.02.154.002.61-.162 1.173-.161.554-.452 1.17-.938 1.67l.573.558c.602-.62.946-1.364 1.133-2.004.184-.631.226-1.204.186-1.503l-.793.106zm-1.103 2.846c-.542.568-1.197.873-1.887.873v.8c.942 0 1.798-.42 2.466-1.121l-.58-.552zm-1.915.874c-.787.055-1.415-.103-1.96-.46-.553-.364-1.051-.954-1.533-1.815l-.698.39c.516.923 1.091 1.633 1.792 2.093.71.467 1.518.656 2.455.59l-.056-.798zm-3.502-2.29l-3.72-5.987-.679.422 3.719 5.986.68-.422zM12.783 5.903L14.52 8.44l.66-.452-1.738-2.537-.66.452zm5.75 18.129A2.53 2.53 0 0116 26.566v.8a3.33 3.33 0 003.333-3.333h-.8zM16 26.566a2.53 2.53 0 01-2.533-2.533h-.8A3.33 3.33 0 0016 27.366v-.8zm-2.533-2.533A2.53 2.53 0 0116 21.499v-.8a3.33 3.33 0 00-3.333 3.334h.8zm2.522-2.534c1.398.039 2.544 1.164 2.544 2.534h.8c0-1.831-1.52-3.284-3.322-3.334l-.022.8zm-1-6.002l-2.027-1.27-.424.678 2.025 1.27.425-.678zm-1.385 2.581l-2.086-1.3-.423.68 2.086 1.3.423-.68zm4.954-12.627L9.73 18.239l.658.454 8.828-12.788-.658-.455zM9.733 18.235c-.49.693-.792.858-.95.91l.254.759c.387-.13.811-.448 1.349-1.207l-.653-.462zm-.95.91c-.161.054-.25.03-.338-.045l-.52.607c.335.288.73.324 1.112.197l-.253-.76zm-.332-.04c-.052-.047-.132-.178-.202-.4a2.828 2.828 0 01-.119-.602l-.798.061c.018.226.069.513.154.782.08.253.213.56.433.756l.532-.598zm-.321-1.008c-.037-.398-.184-.828-.509-1.153l-.566.566c.16.158.254.394.278.66l.797-.073zm-.509-1.153c-.328-.328-.768-.48-1.22-.48v.8c.274 0 .499.09.654.245l.566-.565zm-1.22-.48c-.094 0-.227 0-.4.042l.195.776a.748.748 0 01.205-.018v-.8zm-.385.039c-.762.16-1.328.861-1.404 1.621l.796.08c.045-.45.386-.837.773-.918l-.165-.783zM4.614 18.11c-.04.299.002.872.186 1.502.187.641.53 1.386 1.133 2.004l.573-.558c-.486-.5-.777-1.116-.938-1.67-.164-.562-.182-1.018-.161-1.172l-.793-.106zm1.316 3.503c.668.702 1.524 1.122 2.466 1.122v-.8c-.69 0-1.345-.305-1.887-.873l-.579.551zm2.438 1.121c.937.066 1.745-.124 2.455-.59.701-.46 1.276-1.17 1.792-2.093l-.698-.39c-.482.861-.98 1.45-1.533 1.814-.545.358-1.173.516-1.96.461l-.056.798zm4.238-2.667l8.193-13.181-.68-.423-8.192 13.182.679.422z"
      fill="#000"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportFieldHockey =
  styled(Svg) <
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
export default SportFieldHockey;
