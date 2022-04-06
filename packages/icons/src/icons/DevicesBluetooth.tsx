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
      d="M23 20.966l.262.426a.5.5 0 00.017-.84l-.279.414zM15.632 25.5h-.5a.5.5 0 00.762.426l-.262-.426zm0-19l.247-.435a.5.5 0 00-.747.435h.5zM23 10.685l.293.406a.5.5 0 00-.046-.84l-.247.434zm-13.701-.032a.5.5 0 00-.598.801l.598-.801zm-.56 8.984a.5.5 0 00.522.852l-.522-.852zm13.999.903l-7.368 4.534.524.852 7.368-4.534-.524-.852zm-6.606 4.96V16h-1v9.5h1zm0-9.5V6.5h-1V16h1zm7.147 4.551l-7.368-4.966-.559.83 7.369 4.966.558-.83zm-7.355-4.145l7.369-5.315-.585-.811-7.369 5.315.585.81zm7.323-6.155l-7.368-4.186-.494.87 7.368 4.185.494-.87zm-7.316 5.348l-6.632-4.946-.598.801 6.632 4.947.598-.802zm-6.67 4.89l6.632-4.063-.523-.852-6.631 4.063.522.852z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const DevicesBluetooth =
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
export default DevicesBluetooth;
