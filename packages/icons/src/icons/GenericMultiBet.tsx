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
      d="M5.542 10.52l.496.06-.496-.06zm.107 17.568l-.494.077.494-.077zm15.106.19l-.322.384.322-.383zm-1.485-1.247l.321-.383-.322.383zm-.842-.027l.296.402-.296-.402zm-1.855 1.364l-.296-.403.296.403zm-.807 0l.296-.403-.296.403zm-1.884-1.385l-.296.403.296-.403zm-.807 0l.296.403-.296-.403zm-1.884 1.385l-.296-.403.296.403zm-.807 0l.296-.403-.296.403zM8.53 27.004l-.296.402.296-.402zm-.842.027l-.321-.383.321.383zm-1.492 1.254l.322.382-.322-.383zm15.106-.207l-.495-.069.495.07zM7.213 8.901l.05.497-.05-.497zm14.924 15.978a.5.5 0 10-.997-.072l.997.072zM8.617 9.282a.5.5 0 10-.07-.998l.07.998zm16.19-5.5l.042-.498-.042.499zm-12.403-.027l.051.497-.05-.497zm-1.67 1.619l.496.061-.496-.061zm.106 17.568l-.494.078.494-.078zm15.724-17.44l-.498.045.498-.045zm-.071 17.43l-.495-.068.495.069zm-.547.201l-.321.383.321-.383zm-1.485-1.248l.322-.383-.322.383zm-.841-.027l.296.403-.296-.403zm-1.856 1.364l-.296-.402.296.402zm-.807 0l.296-.402-.296.402zm-1.883-1.385l-.297.403.297-.402zm-.808 0l.297.403-.296-.402zm-1.883 1.386l-.296-.403.296.402zm-.807 0l.296-.403-.296.402zm-1.856-1.365l-.296.403.296-.403zm-.841.027l.322.383-.322-.383zm-1.492 1.254l.322.383-.322-.383zM13.289 7.85a.5.5 0 000 1v-1zm5.045 1a.5.5 0 100-1v1zm-5.045 2.957a.5.5 0 000 1v-1zm10.762 1a.5.5 0 100-1v1zM13.29 15.764a.5.5 0 000 1v-1zm10.762 1a.5.5 0 100-1v1zM7.675 19.32a.5.5 0 000 1v-1zm2.142 1a.5.5 0 100-1v1zm-2.142-4.975a.5.5 0 000 1v-1zm2.142 1a.5.5 0 100-1v1zm-4.771-5.887c-.502 4.068-.97 10.797.109 17.707l.988-.154c-1.06-6.783-.601-13.409-.105-17.43l-.992-.123zm16.03 17.438l-1.485-1.248-.643.765 1.485 1.249.644-.766zm-2.944-1.295l-1.855 1.364.592.806 1.855-1.364-.592-.806zm-2.07 1.364l-1.884-1.385-.592.806 1.883 1.385.593-.806zm-3.283-1.385l-1.884 1.385.593.806 1.883-1.385-.592-.806zm-2.098 1.385l-1.856-1.364-.592.806 1.855 1.364.593-.806zm-3.315-1.317l-1.492 1.254.643.765 1.492-1.254-.643-.765zm1.46-.047a1.183 1.183 0 00-1.46.047l.643.765a.183.183 0 01.224-.006l.592-.806zm2.07 1.364a.183.183 0 01-.216 0l-.592.806c.415.305.984.305 1.4 0l-.593-.806zm3.282-1.385a1.183 1.183 0 00-1.4 0l.593.806a.183.183 0 01.215 0l.592-.806zm2.099 1.385a.183.183 0 01-.215 0l-.593.806c.416.305.985.305 1.4 0l-.592-.806zm3.314-1.317a1.183 1.183 0 00-1.459-.047l.592.806a.183.183 0 01.224.006l.643-.765zm1.215 1.361a.18.18 0 01.112-.14.163.163 0 01.159.027l-.644.766c.484.406 1.27.153 1.363-.514l-.99-.139zm-15.651.156c.103.658.88.907 1.362.502l-.643-.765a.163.163 0 01.157-.029c.048.018.1.067.112.138l-.988.154zM7.162 8.403a2.361 2.361 0 00-2.116 2.055l.992.123a1.361 1.361 0 011.226-1.183l-.102-.995zM21.14 24.807a48.33 48.33 0 01-.334 3.202l.99.139c.15-1.067.261-2.163.341-3.27l-.997-.071zM8.547 8.284c-.467.033-.93.072-1.385.12l.102.994c.443-.046.895-.084 1.353-.116l-.07-.998zm16.302-5c-3.104-.257-8.158-.472-12.496-.026l.102.994c4.25-.436 9.234-.227 12.31.029l.084-.997zM10.238 5.313c-.503 4.067-.97 10.796.108 17.707l.988-.155c-1.059-6.782-.6-13.409-.104-17.43l-.992-.122zm15.828.234c.397 4.401.765 11.364-.068 17.317l.99.138c.85-6.069.473-13.125.074-17.545l-.996.09zm.202 17.203l-1.485-1.248-.644.766 1.486 1.248.643-.765zm-2.945-1.295l-1.855 1.365.593.805 1.855-1.364-.593-.806zm-2.07 1.365l-1.883-1.385-.593.805 1.884 1.385.592-.805zm-3.283-1.385l-1.883 1.385.592.805 1.884-1.385-.593-.805zm-2.098 1.385l-1.855-1.365-.593.806 1.856 1.364.592-.805zm-3.315-1.318l-1.492 1.254.644.766 1.492-1.254-.644-.766zm1.46-.047a1.183 1.183 0 00-1.46.047l.644.766a.183.183 0 01.223-.007l.593-.806zm2.07 1.365a.183.183 0 01-.215 0l-.592.805c.415.306.984.306 1.4 0l-.593-.805zm3.283-1.385a1.183 1.183 0 00-1.4 0l.593.805a.183.183 0 01.214 0l.593-.805zm2.098 1.385a.183.183 0 01-.215 0l-.592.805c.415.306.984.306 1.4 0l-.593-.805zm3.315-1.318a1.183 1.183 0 00-1.46-.047l.593.806a.183.183 0 01.223.007l.644-.766zm1.215 1.362a.179.179 0 01.112-.141.163.163 0 01.158.027l-.643.766c.484.407 1.27.154 1.363-.514l-.99-.138zm-15.652.156c.103.658.88.907 1.363.502l-.644-.766a.163.163 0 01.158-.028c.048.017.1.066.111.137l-.988.155zm2.007-19.762a2.361 2.361 0 00-2.115 2.055l.992.122a1.361 1.361 0 011.225-1.183l-.102-.994zM24.766 4.28c.7.058 1.239.595 1.3 1.266l.996-.09a2.405 2.405 0 00-2.213-2.173l-.083.997zM13.289 8.85h5.045v-1h-5.045v1zm0 3.957H24.05v-1H13.29v1zm0 3.957H24.05v-1H13.29v1zM7.675 20.32h2.142v-1H7.675v1zm0-3.975h2.142v-1H7.675v1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const GenericMultiBet =
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
export default GenericMultiBet;
