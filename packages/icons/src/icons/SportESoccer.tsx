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
      d="M12.303 15.501l-.497-.053a.5.5 0 00.096.352l.402-.299zm2.728 3.038l-.327.378a.5.5 0 00.433.11l-.106-.488zm3.967-.865l.106.488a.5.5 0 00.328-.24l-.434-.248zM12.86 7.156a.5.5 0 00-.761-.648l.761.648zm-4.878 5.532l-.458-.2a.5.5 0 00-.04.167l.498.033zm.811 3.383l-.445.227a.5.5 0 00.525.267l-.08-.494zm3.59-.078a.5.5 0 00-.16-.987l.16.987zm-3.154.325a.5.5 0 10-.871-.49l.87.49zm-1.145 3.093l-.493.087a.5.5 0 00.025.09l.468-.177zm2.6 3.104l-.218.45a.501.501 0 00.187.049l.031-.5zm3.459-.577l.176.468a.5.5 0 00.314-.37l-.49-.098zm1.34-3.187a.5.5 0 00-.906-.426l.905.426zM6.287 11.93a.5.5 0 00.088.996l-.088-.996zm1.628 1.074a.5.5 0 00.125-.992l-.125.992zm-1.733 5.919a.5.5 0 10.068.998l-.068-.998zm1.885.873a.5.5 0 10-.069-.998l.069.998zm3.094 2.869a.5.5 0 10-.954-.3l.954.3zm-1.067 1.924a.5.5 0 00.99-.148l-.99.148zm4.324-3.068a.5.5 0 00-.55.835l.55-.835zm4.986-4.14a.5.5 0 10-.81.585l.81-.585zm4.908-1l.495.069a.5.5 0 000-.137l-.495.068zM23.1 19.428a.5.5 0 10-.86.508l.86-.508zm-.7 2.473a.5.5 0 00.982.187l-.983-.187zm-5.633 3.504a.5.5 0 00.974.229l-.974-.23zm-.203-18.392a.5.5 0 10.14-.99l-.14.99zm7.64 7.699a.5.5 0 10-.914.404l.915-.404zm1.12-.05a.5.5 0 00-.991.137l.99-.137zm-8.62-3.23a.5.5 0 10-.14-.99l.14.99zm3.808 3.387a.5.5 0 10-.985-.177l.985.177zm5.867-6.884v.5a.5.5 0 00.5-.5h-.5zm.249 2.215a.5.5 0 10-.781-.625l.78.625zm-2.207 5.923a9.151 9.151 0 01-9.151 9.15v1c5.606 0 10.15-4.544 10.15-10.15h-1zm-9.151 9.15a9.151 9.151 0 01-9.151-9.15h-1c0 5.606 4.545 10.15 10.15 10.15v-1zm-9.151-9.15a9.151 9.151 0 019.15-9.151v-1c-5.605 0-10.15 4.545-10.15 10.15h1zm7.359-4.341l-.458-.202v.002l-.003.006-.01.02a24.61 24.61 0 00-.154.367c-.1.244-.235.585-.375.973-.276.763-.588 1.754-.673 2.55l.995.106c.07-.667.346-1.56.618-2.316a23.917 23.917 0 01.506-1.28l.008-.018.002-.005-.456-.203zm-1.175 3.77l-.402.298.002.002.003.004.013.018.05.064a26.378 26.378 0 00.823 1.03c.524.623 1.226 1.407 1.91 1.999l.655-.757c-.624-.539-1.285-1.274-1.798-1.885a28.783 28.783 0 01-.84-1.053l-.012-.015a.054.054 0 00-.003-.003v-.001l-.402.298zm2.833 3.525l3.967-.865-.213-.977-3.967.865.213.977zM12.48 6.832a92.961 92.961 0 00-.38-.324h-.001l-.002.002a.495.495 0 00-.003.005l-.014.016a5.614 5.614 0 00-.209.267c-.135.18-.318.436-.514.748-.386.617-.839 1.478-1.041 2.401l.977.215c.167-.763.553-1.512.912-2.085a9.777 9.777 0 01.657-.922l-.382-.323zm-1.676 3.222l-.154.476h.001l.01.004.041.014c.038.014.096.035.17.065.147.06.357.151.602.278a6.55 6.55 0 011.649 1.191l.713-.7a7.548 7.548 0 00-1.902-1.379 8.074 8.074 0 00-.951-.416 2.174 2.174 0 00-.022-.007h-.002v-.001l-.155.475zm0 0l-.233-.442-.002.002-.007.003-.021.011-.077.043a10.537 10.537 0 00-1.128.742c-.64.484-1.433 1.207-1.811 2.075l.916.4c.272-.623.89-1.217 1.498-1.677a9.57 9.57 0 011.08-.704l.015-.008.003-.002-.233-.443zm-2.821 2.634a60.692 60.692 0 00-.499-.033v.01a1.89 1.89 0 00-.004.083 6.965 6.965 0 00.07 1.027c.094.662.31 1.563.799 2.523l.89-.454a7.11 7.11 0 01-.699-2.21 5.966 5.966 0 01-.06-.863 1.894 1.894 0 01.002-.05v-.001.001l-.499-.033zm.891 3.876l3.51-.57-.16-.988-3.51.572.16.986zm-.08-.491a68.896 68.896 0 00-.436-.245.105.105 0 01-.004.008 3.477 3.477 0 00-.046.085 7.857 7.857 0 00-.449 1.07c-.223.669-.428 1.596-.267 2.507l.985-.175c-.12-.67.03-1.412.231-2.016a6.859 6.859 0 01.415-.976l.006-.011v-.002h.001l-.436-.245zm-.71 3.338l-.467.177v.001l.002.003.002.007a3.514 3.514 0 00.043.105 8.456 8.456 0 00.646 1.213c.454.704 1.165 1.569 2.157 2.048l.436-.9c-.752-.364-1.34-1.05-1.752-1.689a7.464 7.464 0 01-.592-1.125l-.006-.015v-.003H8.55l-.467.178zm2.601 3.104l-.031.499h.003a.23.23 0 00.005 0l.018.001a4.933 4.933 0 00.294.005 9.832 9.832 0 003.346-.614l-.352-.936a8.83 8.83 0 01-3.24.546h-.012l-.031.499zm3.459-.577l.49.097v-.001l.002-.006.004-.021.017-.083a51.604 51.604 0 01.279-1.278c.179-.768.39-1.56.547-1.895l-.905-.426c-.211.45-.444 1.357-.616 2.094a48.37 48.37 0 00-.285 1.306l-.017.085-.005.023a.311.311 0 01-.001.008l.49.097zm-7.811-9.51l.044.498h-.001.002l.015-.001.07-.004c.063-.002.162-.005.293-.003.262.003.655.022 1.16.086l.126-.992c-.545-.069-.976-.09-1.274-.094a6.747 6.747 0 00-.44.009l-.026.002h-.014l.044.499zm-.08 7.492l1.816-.125L8 18.798l-1.816.125.068.998zm4.433 2.595l-.477-.15v.002l-.002.004-.004.012a4.816 4.816 0 00-.125.636c-.05.392-.075.939.018 1.57l.99-.148a4.78 4.78 0 01-.016-1.296 3.808 3.808 0 01.093-.482v.001l-.477-.15zm3.459-.577l-.275.418.002.001.005.004.02.012a12.087 12.087 0 00.325.204c.216.131.517.307.857.487.653.345 1.543.753 2.251.806l.075-.997c-.476-.035-1.197-.344-1.859-.693a15.577 15.577 0 01-1.106-.646l-.015-.01a.108.108 0 01-.004-.003l-.276.417zm3.222 1.434l.2.459v-.001h.002l.007-.004.023-.01a8.514 8.514 0 00.372-.182 9.74 9.74 0 00.92-.543c.684-.459 1.535-1.164 1.935-2.076l-.916-.401c-.28.64-.93 1.213-1.576 1.646a8.76 8.76 0 01-1.146.644l-.016.008h-.003v.001l.198.459zm3-2.558l.476-.156-.001-.002a.287.287 0 00-.002-.005l-.007-.02-.026-.077-.095-.277c-.082-.232-.197-.55-.332-.896-.263-.672-.625-1.516-.974-2l-.81.585c.263.366.585 1.093.852 1.779a27.545 27.545 0 01.437 1.202l.006.018.001.005.476-.155zm3.947-4.433l-.495-.07v.006a2.217 2.217 0 01-.025.136 6.412 6.412 0 01-.618 1.72c-.518.963-1.393 1.927-2.881 2.147l.146.99c1.91-.283 3.01-1.536 3.615-2.664a7.411 7.411 0 00.753-2.19v-.005l-.495-.07zm-1.642 3.301l-.43.254h-.001v-.001l-.001-.001-.001-.002a2.302 2.302 0 01.16.467c.076.334.128.842.002 1.502l.983.187c.153-.806.095-1.454-.01-1.91a3.308 3.308 0 00-.235-.682 1.399 1.399 0 00-.036-.067l-.431.253zm-5.305 3.69l-.5.015v.003a.623.623 0 01.002.058l.003.172c.002.146.002.348-.002.569-.008.458-.037.944-.1 1.216l.973.229c.092-.39.119-.977.127-1.427a20.867 20.867 0 00-.002-.831v-.019l-.5.015zm-2.095-16.45c.44 0 .872.03 1.294.09l.14-.99c-.468-.066-.947-.1-1.434-.1v1zm8.02 8.194c.245.554.45.775.527 1.332l.99-.135c-.1-.743-.45-1.255-.602-1.601l-.915.404zm1.043-.316c.058.415.088.84.088 1.273h1c0-.479-.033-.95-.098-1.411l-.99.137zm-7.769-4.359c-.77.11-1.963.34-3.26.822l.348.938a15.017 15.017 0 013.053-.77l-.14-.99zm2.433 7.233l.434.248v-.001l.001-.001a10.879 10.879 0 001.08-3.1l-.984-.178a9.875 9.875 0 01-.94 2.738l-.02.037-.005.008v.001l.434.248zm4.38-7.027c-.79 0-1.39-.28-1.797-.731-.413-.457-.665-1.132-.665-1.981h-1c0 1.044.312 1.975.922 2.651.616.682 1.497 1.061 2.54 1.061v-1zm-2.462-2.712c0-.849.252-1.518.663-1.969.406-.446 1.007-.722 1.8-.722v-1c-1.042 0-1.922.372-2.539 1.048-.612.672-.924 1.598-.924 2.643h1zm2.463-2.691c.793 0 1.405.277 1.822.726.42.452.68 1.12.68 1.965h1c0-1.049-.325-1.976-.947-2.646-.626-.674-1.514-1.045-2.555-1.045v1zm2.469 4.281c-.398.498-.799.77-1.191.922-.4.156-.82.2-1.278.2v1c.518 0 1.078-.049 1.64-.268.57-.221 1.11-.604 1.61-1.23l-.781-.624zm.532-2.09h-5.964v1h5.964v-1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportESoccer =
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
export default SportESoccer;
