import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.344 7.178l-.212.453.212-.453zm3.58 3.765l.012.5a.5.5 0 00.38-.811l-.392.31zm-5.177-.338l-.212.453.212-.453zm8.909-3.427l.211.453h.001l-.212-.453zm-3.58 3.765l-.391-.311a.5.5 0 00.38.81l.011-.5zm5.177-.338l.211.453-.211-.453zm-9.12-2.974c.147.069.432.298.818.678.367.36.776.807 1.16 1.246a49.649 49.649 0 011.392 1.662l.022.027.005.007.002.002.392-.31.391-.311-.002-.003-.006-.007-.023-.029-.086-.108a49.95 49.95 0 00-1.334-1.589c-.392-.447-.82-.914-1.212-1.3-.373-.367-.771-.72-1.096-.87l-.423.905zm3.79 3.312l-.012-.5h-.046l-.133.003a51.578 51.578 0 01-2.03-.007 24.089 24.089 0 01-1.699-.093c-.538-.053-.896-.125-1.044-.194l-.423.906c.324.152.849.232 1.37.284.546.053 1.177.082 1.77.097a50.497 50.497 0 002.21.005l.037-.001h.012l-.011-.5zm-4.963-.79a1.389 1.389 0 01-.716-.786l-.94.34a2.389 2.389 0 001.231 1.35l.425-.905zm-.716-.786a1.398 1.398 0 01.047-1.065l-.906-.423a2.398 2.398 0 00-.081 1.828l.94-.34zm.047-1.065a1.39 1.39 0 01.783-.719l-.342-.94A2.387 2.387 0 009.385 7.88l.906.423zm.783-.719a1.379 1.379 0 011.058.048l.425-.906a2.379 2.379 0 00-1.825-.081l.342.94zm8.37-.858c-.325.152-.723.504-1.096.87-.393.387-.82.854-1.212 1.301a50.699 50.699 0 00-1.42 1.697l-.023.029a.48.48 0 01-.006.007l-.002.002.391.312.392.31.002-.002.005-.007.022-.027c.019-.024.047-.06.084-.104a48.525 48.525 0 011.307-1.558c.385-.439.794-.885 1.161-1.246.387-.38.671-.61.818-.678l-.423-.906zm-3.368 4.218l-.012.5h.05a27.887 27.887 0 00.635.009c.415.003.98.002 1.574-.013a25.115 25.115 0 001.772-.098c.52-.05 1.045-.131 1.37-.283l-.424-.906c-.148.07-.506.141-1.044.194-.512.05-1.116.079-1.699.093a49.527 49.527 0 01-2.03.007l-.133-.002-.035-.001h-.011l-.013.5zm5.389.115c.284-.133.538-.321.75-.553l-.74-.674a1.38 1.38 0 01-.435.322l.425.905zm.75-.553a2.39 2.39 0 00.481-.798l-.94-.34c-.062.172-.157.33-.28.464l.739.674zm.481-.798c.107-.295.155-.609.14-.922l-.998.044c.008.183-.02.366-.082.538l.94.34zm.14-.922a2.398 2.398 0 00-.221-.906l-.906.423c.077.165.12.345.129.527l.999-.044zm-.221-.906a2.392 2.392 0 00-.55-.752l-.677.737c.134.123.243.272.32.438l.907-.423zm-.55-.752a2.384 2.384 0 00-.797-.483l-.342.94c.17.061.328.157.462.28l.676-.737zm-.797-.483a2.38 2.38 0 00-.92-.142l.044 1c.182-.009.363.02.534.081l.342-.94zm-.92-.142a2.38 2.38 0 00-.905.223l.425.906a1.38 1.38 0 01.524-.13l-.044-.999zM7.703 15.64v7.06h1v-7.06h-1zm2.792 9.861h11.01v-1h-11.01v1zm13.802-2.8V15.64h-1v7.06h1zm-2.792 2.8a2.796 2.796 0 002.792-2.8h-1c0 .996-.804 1.8-1.792 1.8v1zM7.703 22.7c0 1.545 1.249 2.8 2.792 2.8v-1a1.796 1.796 0 01-1.792-1.8h-1zm9.68-6.646h6.853v-1h-6.853v1zm8.117-1.266v-2.312h-1v2.312h1zm-2.028-4.345H8.528v1h14.944v-1zM6.5 12.476v2.312h1v-2.312h-1zm1.264 3.578h6.85v-1h-6.85v1zM6.5 14.788c0 .697.564 1.266 1.264 1.266v-1a.265.265 0 01-.264-.266h-1zm2.028-4.345A2.03 2.03 0 006.5 12.476h1a1.03 1.03 0 011.028-1.033v-1zM25.5 12.476a2.03 2.03 0 00-2.028-2.033v1a1.03 1.03 0 011.028 1.033h1zm-1.264 3.578c.7 0 1.264-.568 1.264-1.266h-1c0 .149-.12.266-.264.266v1zm-10.065-5.016v13.904h1V11.038h-1zm2.658 0v13.904h1V11.038h-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const OtherRewards =
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
export default OtherRewards;
