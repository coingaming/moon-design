import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.268 2.17a115.823 115.823 0 00-12.536 0c-.735.04-1.33.646-1.392 1.42C4.113 6.371 4 9.211 4 12.111c0 3.09.129 6.179.386 9.268a.686.686 0 00.155.383c.23.276.63.302.892.059l1.656-1.543a.202.202 0 01.278 0l1.55 1.444c.399.37.996.37 1.394 0l1.55-1.444a.202.202 0 01.278 0l1.55 1.444c.399.37.996.37 1.393 0l1.55-1.444a.202.202 0 01.28 0l1.656 1.543a.616.616 0 00.362.164c.348.032.654-.239.685-.606.257-3.089.385-6.178.385-9.268 0-2.9-.113-5.74-.34-8.52-.063-.775-.657-1.381-1.392-1.421zm.554 1.497c.224 2.755.336 5.57.336 8.444 0 2.918-.115 5.835-.347 8.752l-1.342-1.251a1.012 1.012 0 00-1.393 0l-1.55 1.444a.202.202 0 01-.28 0l-1.55-1.444a1.012 1.012 0 00-1.392 0l-1.55 1.444a.202.202 0 01-.28 0l-1.55-1.444a1.011 1.011 0 00-1.392 0l-1.343 1.25a110.803 110.803 0 01-.347-8.75c0-2.875.112-5.69.337-8.445a.648.648 0 01.597-.61 115.03 115.03 0 0112.449 0c.315.018.57.278.597.61z"
      fill="currentColor"
    />
    <path
      d="M18.268 2.17l-.006.1.006-.1zm-12.536 0l.006.1-.006-.1zM4.34 3.59l-.1-.008.1.008zm.046 17.79l-.1.008.1-.009zm.155.382l.077-.064-.077.064zm.892.059l-.069-.073.069.073zm1.656-1.543l.068.073-.068-.073zm.278 0l-.068.073.068-.073zm1.55 1.444l-.067.073.068-.073zm1.394 0l.068.073-.068-.073zm1.55-1.444l.068.073-.068-.073zm.278 0l-.068.073.068-.073zm1.55 1.444l-.068.073.069-.073zm1.393 0l.069.073-.069-.073zm1.55-1.444l.069.073-.068-.073zm.28 0l-.069.073.068-.073zm1.656 1.543l.068-.073-.068.073zm.362.164l-.009.1.01-.1zm.685-.606l.1.009-.1-.009zM19.66 3.59l-.1.008.1-.008zm-.84.077l-.1.008.1-.008zm-.01 17.196l-.068.073.152.141.016-.206-.1-.008zm-1.342-1.251l.068-.073-.068.073zm-1.393 0l-.069-.073.069.073zm-1.55 1.444l-.069-.073.068.073zm-.28 0l.069-.073-.068.073zm-1.55-1.444l.069-.073-.068.073zm-1.392 0l-.068-.073.068.073zm-1.55 1.444l-.069-.073.069.073zm-.28 0l.07-.073-.07.073zm-1.55-1.444l.069-.073-.068.073zm-1.392 0l.068.073-.068-.073zm-1.343 1.25l-.1.009.016.206.152-.141-.068-.073zm-.01-17.195l-.1-.009.1.009zm.597-.61l.005.1-.005-.1zm12.449 0l-.006.1.006-.1zM12 2.1c2.088 0 4.175.057 6.262.17l.011-.2A115.92 115.92 0 0012 1.9v.2zm-6.262.17C7.825 2.157 9.913 2.1 12 2.1v-.2c-2.09 0-4.182.057-6.273.17l.01.2zM4.439 3.598c.06-.728.618-1.291 1.299-1.328l-.011-.2c-.79.043-1.42.692-1.487 1.512l.2.016zM4.1 12.111c0-2.897.113-5.735.34-8.513l-.2-.016c-.227 2.784-.34 5.627-.34 8.53h.2zm.385 9.26a111.674 111.674 0 01-.385-9.26h-.2c0 3.092.129 6.184.386 9.277l.2-.017zm.133.327a.586.586 0 01-.133-.327l-.2.017a.786.786 0 00.18.438l.153-.128zm.746.05a.509.509 0 01-.746-.05l-.154.128a.709.709 0 001.037.068l-.137-.146zm1.657-1.543l-1.657 1.543.137.146 1.656-1.543-.136-.146zm.415 0a.302.302 0 00-.415 0l.136.146a.102.102 0 01.142 0l.137-.146zm1.55 1.444l-1.55-1.444-.137.146 1.55 1.444.137-.146zm1.256 0a.912.912 0 01-1.256 0l-.136.146a1.111 1.111 0 001.529 0l-.137-.146zm1.55-1.444l-1.55 1.444.137.146 1.55-1.444-.136-.146zm.416 0a.302.302 0 00-.415 0l.136.146a.102.102 0 01.142 0l.137-.146zm1.55 1.444l-1.55-1.444-.137.146 1.55 1.444.137-.146zm1.256 0a.912.912 0 01-1.256 0l-.136.146a1.111 1.111 0 001.529 0l-.137-.146zm1.55-1.444l-1.55 1.444.137.146 1.55-1.444-.136-.146zm.416 0a.302.302 0 00-.415 0l.136.146a.102.102 0 01.142 0l.137-.146zm1.656 1.543l-1.656-1.543-.137.146 1.657 1.543.136-.146zm.303.137a.515.515 0 01-.303-.137l-.136.146a.717.717 0 00.421.19l.018-.198zm.576-.514c-.026.317-.288.541-.576.515l-.018.199c.408.037.759-.28.793-.697l-.199-.017zm.385-9.26c0 3.087-.128 6.173-.385 9.26l.2.017c.256-3.093.385-6.185.385-9.277h-.2zm-.34-8.513c.227 2.778.34 5.616.34 8.513h.2c0-2.902-.113-5.745-.34-8.529l-.2.016zM18.263 2.27c.681.037 1.24.6 1.299 1.328l.2-.016c-.067-.82-.699-1.47-1.488-1.512l-.01.2zm.996 9.841c0-2.877-.112-5.694-.337-8.453l-.2.017c.225 2.752.337 5.565.337 8.437h.2zm-.347 8.76c.231-2.92.347-5.84.347-8.76h-.2c0 2.915-.115 5.83-.346 8.744l.2.016zm-1.51-1.186l1.342 1.25.137-.145-1.343-1.251-.137.146zm-1.257 0a.912.912 0 011.256 0l.137-.146a1.111 1.111 0 00-1.53 0l.137.146zm-1.55 1.444l1.55-1.444-.136-.146-1.55 1.444.136.146zm-.415 0c.118.11.297.11.415 0l-.137-.146a.102.102 0 01-.142 0l-.136.146zm-1.55-1.444l1.55 1.444.136-.146-1.55-1.444-.136.146zm-1.257 0a.912.912 0 011.257 0l.136-.146a1.111 1.111 0 00-1.53 0l.137.146zm-1.55 1.444l1.55-1.444-.136-.146-1.55 1.444.136.146zm-.415 0c.118.11.297.11.415 0l-.137-.146a.102.102 0 01-.142 0l-.136.146zm-1.55-1.444l1.55 1.444.136-.146-1.55-1.444-.136.146zm-1.257 0a.912.912 0 011.257 0l.136-.146a1.111 1.111 0 00-1.53 0l.137.146zm-1.343 1.25l1.343-1.25-.136-.146-1.343 1.25.136.147zm-.515-8.823c0 2.92.116 5.839.347 8.759l.2-.016c-.231-2.915-.347-5.83-.347-8.744h-.2zm.337-8.454a104.164 104.164 0 00-.337 8.454h.2c0-2.872.112-5.685.336-8.437l-.199-.017zm.691-.7a.748.748 0 00-.69.7l.198.017a.548.548 0 01.503-.517l-.01-.2zM12 2.789c-2.076 0-4.153.056-6.23.169l.011.2c2.073-.113 4.146-.169 6.22-.169v-.2zm6.23.169A115.125 115.125 0 0012 2.789v.2c2.073 0 4.146.056 6.22.169l.01-.2zm.691.7a.748.748 0 00-.69-.7l-.012.2c.261.014.48.23.503.517l.2-.017z"
      fill="currentColor"
    />
    <path
      d="M7.455 9C7.204 9 7 8.776 7 8.5s.204-.5.455-.5h4.09c.252 0 .455.224.455.5s-.203.5-.454.5H7.455zM7.435 13c-.24 0-.435-.224-.435-.5s.195-.5.435-.5h9.13c.24 0 .435.224.435.5s-.195.5-.435.5h-9.13zM7.435 16c-.24 0-.435-.224-.435-.5s.195-.5.435-.5h9.13c.24 0 .435.224.435.5s-.195.5-.435.5h-9.13z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0.2}
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconHistory =
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
export default IconHistory;
