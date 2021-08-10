import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.583 2.048l-.978.978A5.715 5.715 0 007.257 1.55l.001-.024v-.26a.26.26 0 00-.26-.261h-.522a.26.26 0 00-.26.26V1.55a5.737 5.737 0 104.758 1.845l.978-.978.598.597c.246.246.615-.122.369-.368L11.354 1.08c-.245-.246-.614.123-.368.369l.597.598zm-4.846 10.43a5.215 5.215 0 110-10.43 5.215 5.215 0 010 10.43zm.26-6.225a1.044 1.044 0 010 2.02v.555c0 .347-.52.347-.52 0v-.555a1.044 1.044 0 010-2.02v-2.64c0-.347.52-.347.52 0v2.64zm.261 1.01a.522.522 0 11-1.043 0 .522.522 0 011.043 0z"
      fill="currentColor"
    />
    <path
      d="M10.605 3.026l-.135.148.141.129.135-.135-.141-.142zm.978-.978l.142.141.141-.141-.141-.142-.142.142zM7.257 1.55l-.199-.018-.017.199.198.018.018-.2zm-1.04 0l.017.199.2-.018-.018-.2-.2.019zm4.757 1.845l-.142-.141-.135.135.13.14.147-.134zm.978-.978l.142-.142-.142-.141-.141.141.141.142zm.598.597l.142-.141-.142.141zm.369-.368l.141-.142-.141.142zM11.354 1.08l-.141.141.141-.14zm-.368.369l-.142.141.142-.141zM6.998 6.253h-.2v.155l.15.039.05-.194zm0 2.02l-.05-.193-.15.038v.155h.2zm-.522 0h.2v-.155l-.15-.038-.05.193zm0-2.02l.05.194.15-.04v-.154h-.2zm4.27-3.085l.979-.979-.283-.283-.978.979.282.283zM7.24 1.748a5.515 5.515 0 013.231 1.426l.27-.295A5.915 5.915 0 007.275 1.35l-.036.399zm-.18-.222v.006l.398.035a.463.463 0 00.001-.04h-.4zm0-.26v.26h.4v-.26h-.4zm-.061-.061a.06.06 0 01.06.06h.4a.46.46 0 00-.46-.46v.4zm-.522 0h.522v-.4h-.522v.4zm-.06.06a.06.06 0 01.06-.06v-.4a.46.46 0 00-.46.46h.4zm0 .261v-.26h-.4v.26h.4zm0 .006v-.006h-.4l.001.041.399-.035zM1.2 7.263A5.537 5.537 0 016.234 1.75l-.036-.399A5.937 5.937 0 00.8 7.263h.4zM6.737 12.8A5.536 5.536 0 011.2 7.263H.8A5.936 5.936 0 006.737 13.2v-.4zm5.537-5.537A5.536 5.536 0 016.737 12.8v.4a5.936 5.936 0 005.937-5.937h-.4zM10.826 3.53a5.516 5.516 0 011.448 3.733h.4A5.916 5.916 0 0011.12 3.26l-.295.27zm.985-1.255l-.979.979.283.282.979-.978-.283-.283zm.88.598l-.597-.598-.283.283.598.598.283-.283zm.086-.086c.024.023.023.037.023.043a.07.07 0 01-.023.043.071.071 0 01-.043.022c-.005 0-.02.001-.042-.022l-.283.283a.452.452 0 00.651 0 .452.452 0 000-.652l-.282.283zm-1.564-1.565l1.565 1.565.282-.283L11.496.94l-.283.282zm-.086.086c-.023-.023-.023-.037-.023-.042.001-.01.007-.028.023-.044a.07.07 0 01.043-.022c.006 0 .02 0 .043.022l.283-.282a.452.452 0 00-.652 0 .452.452 0 000 .652l.283-.284zm.598.598l-.598-.598-.283.283.598.598.283-.283zM1.322 7.263a5.415 5.415 0 005.415 5.415v-.4a5.015 5.015 0 01-5.015-5.015h-.4zm5.415-5.415a5.415 5.415 0 00-5.415 5.415h.4a5.015 5.015 0 015.015-5.015v-.4zm5.415 5.415a5.415 5.415 0 00-5.415-5.415v.4a5.015 5.015 0 015.015 5.015h.4zm-5.415 5.415a5.415 5.415 0 005.415-5.415h-.4a5.015 5.015 0 01-5.015 5.015v.4zM7.98 7.263c0-.58-.396-1.066-.932-1.204l-.1.388a.844.844 0 01.632.816h.4zm-.932 1.204c.536-.138.932-.624.932-1.204h-.4a.844.844 0 01-.632.817l.1.387zm.15.36v-.554h-.4v.555h.4zm-.922 0a.452.452 0 00.46.461.452.452 0 00.46-.46H6.8c0 .032-.01.042-.015.046a.071.071 0 01-.046.014.071.071 0 01-.046-.014c-.005-.004-.015-.014-.015-.046h-.4zm0-.554v.555h.4v-.555h-.4zm-.782-1.01c0 .58.396 1.066.932 1.204l.1-.387a.844.844 0 01-.632-.817h-.4zm.932-1.204a1.244 1.244 0 00-.932 1.204h.4c0-.392.268-.723.632-.816l-.1-.388zm-.15-2.445v2.639h.4v-2.64h-.4zm.922 0a.452.452 0 00-.461-.461.452.452 0 00-.46.46h.4c0-.032.01-.042.014-.045a.071.071 0 01.046-.015c.022 0 .039.008.046.015.004.003.015.013.015.046h.4zm0 2.639v-2.64h-.4v2.64h.4zm-.461 1.732a.722.722 0 00.721-.722h-.4a.322.322 0 01-.321.322v.4zm-.722-.722c0 .399.323.722.722.722v-.4a.322.322 0 01-.322-.322h-.4zm.722-.721a.722.722 0 00-.722.721h.4c0-.177.144-.321.322-.321v-.4zm.721.721a.722.722 0 00-.721-.721v.4c.177 0 .321.144.321.321h.4z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconStopwatch =
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
export default IconStopwatch;
