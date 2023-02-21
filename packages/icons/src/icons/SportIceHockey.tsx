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
      d="M24.89 5.213a.5.5 0 00-.905-.426l.905.426zm-5.795 10.489l-.446-.225.446.225zm-7.07 8.503a.5.5 0 100-1v1zm9.587-1.011a.5.5 0 10-.27-.963l.27.963zm-7.592-.963a.5.5 0 10-.27.963l.27-.963zm6.802-1.614a.5.5 0 10.92.389l-.92-.389zM27.46 7.453a.5.5 0 00-.922-.39l.922.39zm-3.476-2.666c-1.325 2.817-4.936 9.896-5.336 10.69l.893.45c.392-.778 4.015-7.882 5.348-10.714l-.905-.426zm-5.337 10.69c-.273.543-.483.78-.756.916-.302.152-.757.221-1.625.221v1c.872 0 1.54-.06 2.073-.326.561-.282.895-.751 1.202-1.361l-.894-.45zm-2.38 1.137H6.368v1h9.898v-1zm-9.899 0c-.466 0-.872.133-1.19.401-.315.265-.5.625-.595 1.01-.185.75-.05 1.682.264 2.553.316.882.838 1.771 1.504 2.448.664.674 1.516 1.179 2.482 1.179v-1c-.605 0-1.216-.319-1.77-.88-.55-.56-1-1.319-1.275-2.084-.279-.777-.354-1.493-.234-1.977.058-.234.154-.389.268-.484.109-.092.276-.166.546-.166v-1zm2.465 7.59h3.191v-1h-3.19v1zm8.847-4.294c-1.62 0-3.09.228-4.173.597-.539.183-1.008.41-1.352.681-.335.264-.63.634-.63 1.105h1c0-.024.016-.136.248-.319.223-.175.576-.357 1.056-.52.956-.326 2.314-.544 3.851-.544v-1zm-6.156 2.383v2.824h1v-2.825h-1zm0 2.824c0 .47.296.84.63 1.104.345.271.814.498 1.353.681 1.082.37 2.553.598 4.173.598v-1c-1.537 0-2.895-.218-3.85-.544-.481-.164-.835-.346-1.057-.52-.232-.183-.249-.296-.249-.319h-1zm6.156 2.383c1.62 0 3.091-.229 4.174-.598.538-.183 1.007-.41 1.351-.68.336-.264.631-.634.631-1.105h-1c0 .023-.017.136-.248.318-.223.175-.576.357-1.057.52-.956.327-2.313.545-3.85.545v1zm6.156-2.383v-2.825h-1v2.825h1zm0-2.825c0-.47-.295-.84-.63-1.104-.345-.27-.814-.498-1.352-.681-1.083-.369-2.553-.598-4.174-.598v1c1.538 0 2.895.219 3.851.545.48.163.834.345 1.056.52.232.183.25.295.25.319h1zm-2.494-.061c-2.395.67-4.929.67-7.323 0l-.27.963c2.571.72 5.291.72 7.862 0l-.27-.963zm.4-1.225L27.46 7.453l-.922-.39-5.717 13.554.92.389z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportIceHockey =
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
export default SportIceHockey;
