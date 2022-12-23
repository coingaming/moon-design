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
      d="M8.654 20.221a.5.5 0 10-.708-.705l.708.705zm-2.908 1.505a.5.5 0 00.708.706l-.708-.706zm4.704.528a.5.5 0 10-.709-.706l.709.706zM5.34 25.969a.5.5 0 00.709.706l-.709-.706zm6.993-1.911a.5.5 0 00-.71-.706l.71.706zm-1.81.4a.5.5 0 10.71.705l-.71-.705zm8.818-13.934v-.5.5zm7.487-4.867l.483-.13a.5.5 0 00-.37-.357l-.113.487zM9.4 18.472l-.435-.247a.5.5 0 00.092.61l.343-.363zm3.83 3.607l-.343.364a.5.5 0 00.568.082l-.225-.446zm-1.57-9.45a.5.5 0 00-.12-.994l.12.993zM5 16.552l-.412-.284a.5.5 0 00.616.74L5 16.553zm3.698.313a.5.5 0 00.18-.983l-.18.983zm12.133 3.074a.5.5 0 00-.99-.143l.99.143zm-5.994 6.56l-.438-.241a.5.5 0 00.68.678l-.242-.437zm.71-3.915a.5.5 0 10-.977.218l.976-.218zm-7.601-3.07l-2.2 2.211.708.706 2.2-2.21-.708-.706zm1.795 2.033l-4.4 4.421.709.706 4.4-4.421-.709-.706zm1.884 1.804l-1.1 1.106.709.705 1.1-1.105-.71-.706zm7.717-12.328c.336 0 .664.1.944.288l.557-.83a2.693 2.693 0 00-1.5-.458v1zm.944.288c.28.187.498.454.627.767l.924-.381a2.708 2.708 0 00-.994-1.217l-.557.83zm.627.767c.128.313.162.657.096.99l.982.194a2.72 2.72 0 00-.154-1.565l-.924.381zm.096.99a1.714 1.714 0 01-.465.876l.708.705c.378-.379.635-.862.739-1.387l-.982-.194zm-.465.876c-.238.239-.541.401-.87.467l.195.98a2.696 2.696 0 001.383-.742l-.708-.705zm-.87.467a1.69 1.69 0 01-.982-.097l-.384.923a2.69 2.69 0 001.561.155l-.195-.98zm-.982-.097a1.703 1.703 0 01-.763-.63l-.832.554c.296.446.718.794 1.211 1l.384-.924zm-.763-.63a1.718 1.718 0 01-.287-.95h-1c0 .535.158 1.059.455 1.504l.832-.553zm-.287-.95c0-.455.18-.89.499-1.21l-.709-.706a2.716 2.716 0 00-.79 1.915h1zm.499-1.21c.319-.321.751-.501 1.201-.501v-1c-.717 0-1.404.286-1.91.795l.709.705zm3.005-4.567l4.4 4.421.708-.705-4.4-4.421-.708.705zm5.797-1.788c-.725-.17-3.168-.55-6.47.957C17.171 7.633 13.064 11 8.964 18.225l.87.493c4.024-7.093 7.99-10.284 11.052-11.681 3.06-1.396 5.269-1.024 5.828-.893l.228-.974zM9.057 18.836l3.83 3.607.686-.728-3.83-3.607-.686.728zm4.398 3.69c7.688-3.874 11.263-7.752 12.858-10.874 1.6-3.13 1.181-5.446.999-6.125l-.966.26c.132.492.541 2.544-.923 5.41-1.469 2.874-4.85 6.623-12.418 10.435l.45.893zm-1.914-10.89c-1.779.21-4.526 1.115-6.953 4.633l.824.568c2.244-3.254 4.718-4.027 6.247-4.209l-.118-.993zM5 16.552l.204.456h-.001v.001h-.001l.005-.002a2.647 2.647 0 01.192-.066c.145-.045.369-.103.666-.148.595-.092 1.485-.136 2.633.072l.18-.983c-1.265-.23-2.268-.185-2.965-.078a5.776 5.776 0 00-.806.18 3.618 3.618 0 00-.282.099l-.019.008-.006.002-.003.002h-.001l.204.457zm14.842 3.244c-.217 1.498-1.162 3.99-5.249 6.266l.487.874c4.343-2.419 5.487-5.172 5.751-6.997l-.99-.143zM14.837 26.5l.438.24v-.001l.002-.003.004-.006.01-.02.03-.064c.026-.053.058-.128.094-.224.073-.193.16-.47.227-.824.135-.712.19-1.732-.096-3.013l-.976.218c.255 1.14.2 2.022.09 2.608a4.005 4.005 0 01-.18.659 2.298 2.298 0 01-.08.188l-.003.004v-.002h.001l.439.24z"
      fill="currentColor"
    />
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportSpecialSports =
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
export default SportSpecialSports;
