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
      d="M19.433 13.925l.4-.024-.4.024zm.221-.935l-.346-.2.346.2zm-.415 2.342l.346.2-.346-.2zm.222-.938l-.399.024.4-.024zm-3-6.317a.4.4 0 100 .8v-.8zm2.905-.035l.197.348a.388.388 0 00.021-.013l-.218-.335zm2.984-1.395l.4-.02a.4.4 0 00-.4-.38v.4zm1.287 5.705l.27-.294a.37.37 0 00-.018-.017l-.252.31zm-.105-.085l.253-.31a.401.401 0 00-.061-.041l-.192.35zm-.942-.22l-.019-.4-.009.001.028.4zm-.34-.011l-.051.396.01.001.04-.397zm-1.207-2.027a.4.4 0 10-.793-.102l.793.102zm3.832 2.844l-.315-.247.315.247zm-.519.17l-.108.385.108-.385zm.9-1.042l.355-.183-.355.183zm-.044.444l.314.247-.314-.248zM22.383 7.31l-.4.02.4-.02zm.19.492l-.312.251.311-.25zm1.512 5.035l-.315.247.315-.247zm-3.208-5.783l-.218-.335.218.335zm3.489 3.23a.4.4 0 10-.594-.536l.594.536zm-2.421 1.487a.4.4 0 00.594.536l-.594-.536zm-7.389-1.826a.4.4 0 000 .8v-.8zm5.322 2.45a.4.4 0 00.324-.732l-.324.732zm-3.316-1.907l-.162.365.162-.365zm-3.17 1.353a.4.4 0 100 .8v-.8zm1.116.8a.4.4 0 000-.8v.8zm4.39 2.614a.4.4 0 10.369.71l-.37-.71zm2.25 5.705a.4.4 0 00.435.67l-.436-.67zm2.013-.833l-.218-.335.218.335zm-.208-3.398l.117-.383-.117.383zm-3.31.393a.4.4 0 00-.164.783l.164-.783zm.811 2.481a.4.4 0 00.385.701l-.385-.701zm1.634-.44l.192.35-.192-.35zm-.115-1.144l-.082.391.082-.391zm-5.88-1.722a.4.4 0 10-.557.575l.556-.575zm3.02 3.992l.354-.186-.017-.032-.022-.029-.315.247zm3.114 2.347l-.334.221.021.032.027.028.286-.28zm-1.967-2.968l-.36.172.011.026.016.023.333-.22zm-1.682-4.47a.4.4 0 00-.722.344l.722-.343zm4.9 8.712l-.285.28.285-.28zm-1.651.774l-.36.175.36-.175zm-.628-1.071l-.237.322.237-.322zm.256.307l.36-.175-.36.175zm-.898-.883l.354-.186-.354.186zm.245.284l.236-.323-.236.323zM16.5 17.092l-.192.351.192-.351zm.303.248l.315-.247-.315.247zm-3.598-2.897a.4.4 0 000-.8v.8zm-5.397-.8a.4.4 0 000 .8v-.8zm7.553 7.142a4.168 4.168 0 01-4.168 4.168v.8a4.968 4.968 0 004.968-4.968h-.8zm-4.168 4.168a4.168 4.168 0 01-4.168-4.168h-.8a4.968 4.968 0 004.968 4.968v-.8zm-4.168-4.168a4.168 4.168 0 014.168-4.167v-.8a4.968 4.968 0 00-4.968 4.967h.8zm4.168-4.167a4.168 4.168 0 014.168 4.167h.8a4.968 4.968 0 00-4.968-4.967v.8zm7.883-.21l.509-.876-.692-.401-.508.875.691.402zm.785-2.038l-.029-.469-.798.048.028.47.799-.049zm.14-1.18l1.152-1.992-.692-.401-1.153 1.992.692.401zm-.169.711a1.267 1.267 0 01.168-.71l-.692-.402a2.067 2.067 0 00-.274 1.16l.798-.048zm-.247 1.632c.204-.352.3-.757.276-1.163l-.799.048c.015.25-.044.497-.169.713l.692.402zM16.46 8.877c1.043 0 1.997.137 3.102-.487l-.394-.696c-.874.493-1.55.383-2.708.383v.8zm3.123-.5l1.512-.988-.438-.67-1.511.988.437.67zm2.66-1.33h.106v-.8h-.105v.8zm-.293-.38l.032.663.8-.04-.033-.663-.8.04zm.31 1.386c1.028 1.274 1.888 2.644 2.639 4.11l.712-.365c-.772-1.506-1.661-2.925-2.728-4.247l-.623.502zm2.636 4.124l-.337.429.63.494.336-.428-.629-.495zm-.497.414a4.493 4.493 0 00-.492-.533l-.543.588c.148.135.283.281.405.438l.63-.493zm-.511-.55l-.104-.085-.505.621.104.085.505-.62zm-.165-.125a2.191 2.191 0 00-1.153-.268l.037.799c.254-.012.505.047.733.17l.383-.701zm-1.162-.268c-.077.005-.167 0-.271-.01l-.082.795c.12.013.262.023.408.013l-.055-.798zm-.261-.01a1.457 1.457 0 01-1.258-1.629l-.793-.102a2.257 2.257 0 001.949 2.525l.102-.793zm2.26.968a.091.091 0 01-.097.031l-.215.77a.891.891 0 00.94-.307l-.629-.494zm.338-.443c.002.003.003.009-.002.014l.63.495a.813.813 0 00.084-.874l-.712.365zM21.983 7.33c.014.267.113.52.278.723l.623-.502a.451.451 0 01-.102-.26l-.799.039zm2.48 5.307a.128.128 0 01-.063-.046l-.63.493c.116.148.28.268.479.324l.215-.77zM21.097 7.39a2.1 2.1 0 011.149-.342v-.8a2.9 2.9 0 00-1.587.472l.438.67zm2.676 2.359l-1.827 2.023.594.536 1.827-2.023-.594-.536zm-9.215.997h1.33v-.8h-1.33v.8zm1.843.108l3.478 1.542.324-.732-3.478-1.541-.324.731zm-.513-.108c.176 0 .351.037.513.108l.324-.731a2.067 2.067 0 00-.837-.177v.8zm-2.495 1.896h1.116v-.8h-1.116v.8zm5.875 3.323c-.075.04-.141.043-.152.044a.329.329 0 01-.045 0l-.013-.001c.01.002.033.006.07.015.074.017.18.045.315.082.27.074.636.18 1.04.299.808.238 1.758.526 2.355.708l.233-.765c-.597-.182-1.55-.471-2.361-.71-.406-.12-.779-.228-1.055-.304a10.575 10.575 0 00-.343-.089 2.012 2.012 0 00-.189-.033.467.467 0 00-.062 0c-.016 0-.086.005-.162.045l.369.71zm3.873 1.56v1.904h.8v-1.904h-.8zm-.197 2.268l-1.796 1.168.436.67 1.796-1.168-.436-.67zm.197-.364a.433.433 0 01-.197.364l.436.67c.35-.227.561-.616.561-1.034h-.8zm-.303-2.317a.43.43 0 01.303.413h.8c0-.54-.35-1.02-.87-1.178l-.233.765zm-3.358.794l2.412.505.164-.783-2.412-.505-.164.783zm2.425.521v.371h.8v-.37h-.8zm-.009.386l-1.44.791.384.701 1.441-.79-.385-.702zm.009-.015a.017.017 0 01-.009.015l.385.701a.817.817 0 00.424-.716h-.8zm-.013-.387a.017.017 0 01.013.017h.8c0-.387-.27-.72-.65-.8l-.163.783zm-6.355-1.538c.228.221.486.415.772.571l.384-.702c-.22-.12-.42-.27-.6-.444l-.556.575zm.952.715l2.31 2.949.63-.494-2.31-2.949-.63.494zm2.271 2.888l1.444 2.748.708-.372-1.444-2.748-.708.372zm1.806 3.168l.397.292.474-.644-.398-.293-.473.645zm.53.452l.372.764.72-.35-.372-.764-.72.35zm1.107 1.223h.98v-.8h-.98v.8zm1.796-.817v-.299h-.8v.3h.8zm-.234-.871l-1.252-1.274-.57.56 1.251 1.274.57-.56zm-1.204-1.215l-1.966-2.967-.667.441 1.966 2.968.667-.442zm-1.938-2.918l-2.044-4.298-.722.343 2.043 4.298.723-.343zm3.376 4.705a.817.817 0 00-.234-.572l-.57.56a.016.016 0 01.004.012h.8zm-2.53.657c.136.28.42.46.733.46v-.8a.017.017 0 01-.015-.01l-.719.35zm-.506-.924a.433.433 0 01.134.16l.719-.35a1.234 1.234 0 00-.379-.454l-.474.644zm-.759-.712c.087.166.21.31.362.42l.473-.645a.433.433 0 01-.127-.147l-.708.372zm2.978 2.095a.817.817 0 00.817-.817h-.8c0 .01-.007.017-.017.017v.8zm-6.873-7.875c.08.044.14.093.18.144l.63-.494a1.367 1.367 0 00-.426-.352l-.384.702zm-3.103-3.8H7.808v.8h5.397v-.8z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps;
  circleColor?: ColorProps;
  color?: ColorProps;
};
const SportHarness = styled(Svg)<IconProps>(
  ({ backgroundColor, circleColor, color, theme }) => [
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
  ]
);
export default SportHarness;
