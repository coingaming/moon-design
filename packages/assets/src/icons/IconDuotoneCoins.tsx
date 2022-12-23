import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fillRule="evenodd" clipRule="evenodd">
      <path
        d="M10 13.242c-5.607 0-10-1.91-10-4.348 0-2.438 4.393-4.348 10-4.348 5.608 0 10 1.91 10 4.348 0 2.438-4.392 4.348-10 4.348z"
        fill="#fff"
        fillOpacity={0.1}
      />
      <path
        d="M17.879 12.547v1.393c0 .862-.478 1.655-1.299 2.318a.043.043 0 01-.003.003l-.002.001-.006.005c-1.342 1.077-3.603 1.8-6.254 1.9h-.006l-.006.002-.005-.001-.004-.001-.076.003c-.173.006-.345.012-.521.012-.176 0-.348-.006-.52-.012l-.077-.003h-.004l-.002.001H9.085a.02.02 0 00-.006-.002c-2.65-.098-4.913-.822-6.254-1.899l-.002-.002-.003-.002a.07.07 0 01-.007-.005c-.82-.663-1.298-1.456-1.298-2.318v-2.425c0-.8.422-1.57 1.212-2.237v-.373c-.764-.647-1.212-1.409-1.212-2.238V4.243C1.515 1.863 5.11 0 9.697 0c4.588 0 8.182 1.864 8.182 4.243v1.399c.79.666 1.212 1.436 1.212 2.237v2.424c0 .831-.446 1.596-1.212 2.244zm-1.212 2.792c.389-.433.606-.907.606-1.4v-.802c-.17.218-.374.425-.606.62v1.582zm.018-2.715l-.018.01v-1.716c.213-.11.416-.224.606-.345v1.667a.476.476 0 00-.022.017l-.024.019a5.943 5.943 0 01-.523.339l-.009.004-.01.005zm-1.23 3.646c.22-.124.42-.256.606-.393v-1.678c-.19.122-.392.238-.607.348v1.723zm.606-5.075v1.743l-.009.003c-.1.046-.201.092-.307.135l-.015.006a3.85 3.85 0 01-.198.075l-.078.027v-1.76c.21-.07.412-.147.607-.229zm-1.819 5.626c.211-.078.413-.16.606-.247v-1.75a9.903 9.903 0 01-.606.229v1.768zm-.606.201c-.196.06-.398.114-.606.165v-1.791c.207-.047.409-.099.606-.154v1.78zm-1.818.4c.206-.03.408-.065.606-.103v-1.8c-.198.036-.4.068-.606.095v1.808zm-.606.077c-.199.02-.402.034-.606.047v-1.817c.204-.011.406-.026.606-.045v1.815zm-1.818.07l.123.003c.06.002.12.004.18.004s.12-.002.18-.004l.123-.004v-1.817l-.101.003c-.067.002-.134.004-.202.004-.06 0-.12-.002-.18-.004l-.123-.004v1.818zm-.606-.023a14.932 14.932 0 01-.606-.047v-1.814c.2.018.401.035.606.046v1.815zm-1.818-.227c.198.038.4.073.606.103v-1.808a14.694 14.694 0 01-.606-.094v1.799zm-.606-.132c-.208-.05-.41-.106-.606-.165V15.25c.196.055.4.104.606.15v1.787zm-1.818-.613c.193.087.395.17.606.247v-1.76a9.768 9.768 0 01-.606-.229v1.742zm-.606-.304a5.765 5.765 0 01-.607-.394V14.21c.19.121.393.236.607.345v1.716zM2.12 13.94c0 .492.217.966.606 1.4v-1.58a4.22 4.22 0 01-.606-.617v.796zm7.576 1.212c-4.106 0-7.576-1.666-7.576-3.637 0-.555.274-1.03.606-1.402v.19c0 .132.015.261.037.39l.02.1.006.023c.02.088.045.175.075.262l.011.034a2.74 2.74 0 00.192.422c.03.052.064.103.099.155l.027.04.01.016a3.7 3.7 0 00.281.362l.015.015c1.211 1.353 3.742 2.294 6.791 2.408l.006.001.006.001h.005l.004-.002.077.003c.172.006.344.013.52.013.367 0 .725-.016 1.077-.04l.162-.012h.006c1.223-.094 2.352-.318 3.326-.653-1.414.809-3.515 1.31-5.783 1.31zm5.151-1.766v-1.772c-.196.055-.4.103-.606.15v1.786l.073-.016.11-.026.113-.03v-.001l.03-.008c.072-.02.142-.041.212-.062l.068-.02zm-1.212-1.502v1.798c-.065.013-.132.025-.198.036l-.04.007-.089.016a8.184 8.184 0 01-.268.044h-.01v-1.807c.205-.028.407-.06.605-.094zm-1.212 1.976V12.05c-.2.018-.4.035-.606.046v1.814c.086-.005.17-.012.255-.019l.038-.003.134-.011.18-.016zm-1.212-1.746v1.818l-.115.003a5.538 5.538 0 01-.375 0h-.001a8.629 8.629 0 00-.115-.003v-1.817c.037 0 .074.002.11.003h.001a6.796 6.796 0 00.372 0c.041-.002.082-.004.123-.004zM10 13.909v-1.816a16.163 16.163 0 01-.606-.045v1.81c.2.02.401.039.606.051zm-1.212-1.931v1.805c-.206-.03-.408-.065-.606-.103v-1.797c.199.036.4.067.606.095zm-1.212 1.57v-1.789a12.458 12.458 0 01-.606-.154v1.777c.197.059.398.115.606.166zm-1.212-2.132v1.765a9.155 9.155 0 01-.606-.248v-1.746c.195.082.397.158.606.23zM5.152 12.63v-1.72a7.106 7.106 0 01-.606-.346v1.67c.185.138.384.271.606.396zm0-4.849v1.765a9.149 9.149 0 01-.606-.248V7.55c.195.08.395.159.606.23zM3.333 9.5v.803c0 .49.221.957.607 1.386v-1.568a4.182 4.182 0 01-.607-.62zm.607-2.23v1.722a5.734 5.734 0 01-.607-.395V6.924c.191.121.391.238.607.347zM2.12 6.668c0 .489.221.957.606 1.386V6.478a4.147 4.147 0 01-.606-.608v.797zm0-2.424c0-1.972 3.47-3.637 7.576-3.637 4.107 0 7.576 1.665 7.576 3.637 0 1.97-3.47 3.636-7.576 3.636S2.121 6.214 2.121 4.243zm3.637 3.726v1.777c.197.059.398.115.606.165V8.124c-.208-.047-.409-.1-.606-.155zm1.212 2.075V8.246c.199.035.4.069.606.096v1.804c-.206-.03-.408-.065-.606-.102zM8.182 8.41v1.811c.2.02.401.038.606.05V8.458a15.537 15.537 0 01-.606-.046zm1.212 1.884V8.48c.037 0 .073.002.11.003.064.001.128.003.193.003s.129-.002.193-.003l.11-.003v1.816l-.115.004a5.562 5.562 0 01-.188.004c-.063 0-.126-.002-.188-.004a8.675 8.675 0 00-.115-.004zm1.212-1.838v1.816c.205-.013.406-.03.606-.05V8.41c-.2.02-.401.035-.606.046zm1.212 1.69V8.341c.206-.027.407-.06.606-.096v1.798c-.198.037-.4.072-.606.102zm1.212-2.023v1.787c.208-.05.41-.106.606-.165V7.969c-.197.055-.398.108-.606.155zm1.212 1.42V7.78c.21-.071.41-.15.606-.23v1.747c-.193.087-.395.17-.606.248zm1.212-2.273v1.721a5.74 5.74 0 00.607-.395V6.924c-.191.121-.392.238-.607.347zm1.213-.793c.23-.193.439-.394.606-.608v.797c0 .489-.221.957-.606 1.386V6.478zm1.212-.001v.19a2.32 2.32 0 01-.058.489l-.005.023c-.02.089-.045.176-.075.263l-.012.035c-.01.033-.021.066-.034.098a2.464 2.464 0 01-.258.481l-.025.037-.002.003a2.764 2.764 0 01-.266.348l-.025.028-.013.014c-1.211 1.353-3.742 2.294-6.791 2.408h-.006a.021.021 0 01-.006.002.01.01 0 01-.003 0l-.002-.001-.004-.001-.043.002c-.183.006-.367.013-.554.013-.155 0-.307-.006-.46-.012l-.128-.005-.009.002-.01.002a.046.046 0 01-.012-.003 14.988 14.988 0 01-2.431-.29.31.31 0 01-.099-.02l-.016-.004h-.003l-.013-.004a12.71 12.71 0 01-.7-.17 12.536 12.536 0 01-.77-.242c1.415.834 3.554 1.352 5.863 1.352 4.107 0 7.576-1.665 7.576-3.636 0-.555-.274-1.03-.606-1.402zm0 3.646c.231-.196.437-.4.606-.617v.797c0 .493-.217.966-.606 1.4v-1.58zm-8.182-2.85c-3.908 0-6.97-1.331-6.97-3.03 0-1.7 3.062-3.03 6.97-3.03s6.97 1.33 6.97 3.03c0 1.699-3.062 3.03-6.97 3.03zm-6.364-3.03c0-1.171 2.557-2.425 6.364-2.425 3.806 0 6.364 1.254 6.364 2.425 0 1.17-2.558 2.424-6.364 2.424-3.807 0-6.364-1.254-6.364-2.424z"
        fill="currentColor"
      />
    </g>
  </svg>
);
type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconDuotoneCoins =
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
export default IconDuotoneCoins;
