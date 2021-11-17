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
      d="M21.5 10.93l.157.474A.5.5 0 0022 10.93h-.5zm0-.027h.5V10.9l-.5.003zM16.015 5.5l.002-.5h-.002v.5zm-5.344 4.446l-.497-.058v.007l.497.051zm1.036 1.169l.066-.496a.517.517 0 00-.05-.004l-.016.5zm1.606-.533l.35.357a.52.52 0 00.03-.033l-.38-.324zm.432-.662l.45.217a.49.49 0 00.017-.037l-.467-.18zm2.347-1.546l-.063.496a.508.508 0 00.033.003l.03-.5zm1.55.91l.444-.229a.51.51 0 00-.022-.038l-.423.267zm-1.137 3.41l.22.449a.417.417 0 00.02-.011l-.24-.438zm-4.41 2.357l-.25-.432-.014.008.265.424zm-.697.44l.294.405a.5.5 0 00-.293-.905v.5zm-.898 8.063H10h.5zm2.98 2.946l-.001.5h.002v-.5zm5.03 0v.5h.001l-.002-.5zm2.98-2.947l.5.002v-.002h-.5zm0-12.62l-.156-.475a.5.5 0 00-.344.475h.5zm-2.018 8.85h.5-.5zm-3.457-3.43l-.002.5.002-.5zm-1.293 2.907a.5.5 0 00-.625.78l.625-.78zm1.102 1.522l-.312.39a.5.5 0 00.706-.082l-.394-.308zm2.2-2.002a.5.5 0 10-.787-.616l.788.616zM22 10.93v-.027h-1v.026h1zm0-.03a5.902 5.902 0 00-1.766-4.169l-.702.713A4.902 4.902 0 0121 10.906l1-.006zM20.234 6.73A6.04 6.04 0 0016.017 5l-.004 1a5.04 5.04 0 013.52 1.444l.7-.713zM16.015 5c-3.042 0-5.492 1.89-5.84 4.888l.993.116C11.449 7.58 13.405 6 16.015 6V5zm-5.841 4.895c-.022.214 0 .43.067.635l.951-.308a.55.55 0 01-.024-.225l-.994-.102zm.067.635c.066.205.174.393.317.554l.748-.663a.56.56 0 01-.114-.199l-.951.308zm.317.554c.143.161.317.291.512.382l.423-.906a.577.577 0 01-.187-.139l-.748.663zm.512.382c.194.091.406.142.621.149l.032-1a.589.589 0 01-.23-.055l-.423.906zm.571.145a2.44 2.44 0 001.09-.104l-.316-.949a1.44 1.44 0 01-.642.061l-.132.992zm1.09-.104c.35-.116.669-.31.932-.568l-.7-.714c-.154.15-.341.265-.548.333l.315.95zm.962-.6a3.6 3.6 0 00.502-.77l-.9-.435c-.096.2-.218.386-.363.555l.761.65zm.519-.807c.246-.636.5-.941.747-1.093.242-.149.564-.202 1.07-.137l.126-.992c-.613-.078-1.2-.042-1.719.276-.514.315-.873.854-1.157 1.585l.933.361zm1.85-1.227c.235.014.462.083.663.201l.507-.862a2.486 2.486 0 00-1.11-.337l-.06.998zm.663.201c.201.119.37.282.493.477l.846-.534a2.457 2.457 0 00-.832-.805l-.507.862zm.472.439c.236.46.282.842.242 1.155-.041.318-.176.599-.352.84a2.862 2.862 0 01-.824.748l-.001.001.243.437.241.438.002-.001.003-.002.008-.005a1.94 1.94 0 00.11-.067 3.862 3.862 0 001.026-.96c.249-.341.468-.777.535-1.302.069-.53-.023-1.115-.344-1.74l-.89.458zm-.913 2.732a76.585 76.585 0 00-4.342 2.318l-.072.041a1.185 1.185 0 01-.02.011l-.004.003h-.001v.001l.25.432.252.432h.002l.004-.003.018-.01a40.286 40.286 0 01.337-.194 80.692 80.692 0 014.017-2.133l-.44-.898zm-4.188 2.806l-.265-.424-.002.002a.355.355 0 01-.006.003l-.023.014c-.019.012-.046.03-.08.05l-.241.152a65.988 65.988 0 00-.324.205l-.03.019-.02.015a.525.525 0 00-.128.137.902.902 0 00-.056.12.88.88 0 00.005.31c.116.339.454.338.473.338v-1c.04.001.14.02.2.041a.867.867 0 01.272.296c.022.092.02.248.005.31a.495.495 0 01-.19.261l-.002.001h.002l.002-.002.01-.007a55.99 55.99 0 01.553-.349l.08-.05.022-.013.006-.004a.015.015 0 01.002 0l-.265-.425zm-.991.036c-.478.347-.766.753-.926 1.198-.154.432-.179.875-.179 1.276h1c0-.37.026-.673.12-.938.09-.252.252-.495.572-.727l-.587-.81zM10 17.56v5.992h1v-5.992h-1zm0 5.994c.002.914.37 1.79 1.023 2.434l.703-.71A2.435 2.435 0 0111 23.551l-1 .003zm1.023 2.434A3.51 3.51 0 0013.48 27l.003-1a2.51 2.51 0 01-1.756-.722l-.703.712zM13.48 27h5.03v-1h-5.03v1zm5.031 0a3.51 3.51 0 002.456-1.01l-.703-.712a2.51 2.51 0 01-1.756.722l.003 1zm2.456-1.01a3.434 3.434 0 001.023-2.435l-1-.003a2.434 2.434 0 01-.726 1.726l.703.712zm1.023-2.436V10.932h-1v12.62h1zm-.344-12.146l.01-.004-.313-.95-.01.004.313.95zm-2.674 8.375a2.9 2.9 0 01-.5 1.627l.827.56a3.899 3.899 0 00.673-2.187h-1zm-.5 1.627a2.964 2.964 0 01-1.337 1.08l.377.926a3.964 3.964 0 001.787-1.445l-.828-.561zm-1.337 1.08a3.014 3.014 0 01-1.723.165l-.195.981c.77.153 1.569.076 2.295-.22l-.377-.926zm-1.723.165a2.985 2.985 0 01-1.523-.808l-.705.71a3.987 3.987 0 002.033 1.079l.195-.98zm-1.523-.808a2.916 2.916 0 01-.809-1.502l-.98.194c.15.765.529 1.467 1.084 2.018l.705-.71zm-.809-1.502a2.89 2.89 0 01.175-1.691l-.921-.39a3.89 3.89 0 00-.235 2.275l.981-.194zm.175-1.691a2.94 2.94 0 011.1-1.312l-.548-.837a3.94 3.94 0 00-1.473 1.759l.92.39zm1.1-1.312a3.005 3.005 0 011.658-.489l.004-1a4.005 4.005 0 00-2.21.652l.547.837zm1.658-.489a2.995 2.995 0 012.095.865l.704-.71a3.996 3.996 0 00-2.795-1.155l-.004 1zm2.095.865c.554.55.864 1.292.864 2.065h1a3.908 3.908 0 00-1.16-2.774l-.704.71zm-4.011 2.323l1.415 1.132.624-.78-1.414-1.133-.625.78zm2.12 1.05l1.808-2.311-.788-.616-1.807 2.31.788.616z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const TravelRoom =
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
export default TravelRoom;
