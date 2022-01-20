import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import styled from 'styled-components';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 208 208"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="128.453" cy="103.734" r="12.5469" />
    <circle cx="128.453" cy="153.922" r="12.5469" />
    <circle cx="128.453" cy="53.5469" r="12.5469" />
    <circle cx="80.5469" cy="103.734" r="12.5469" />
    <circle cx="80.5469" cy="153.922" r="12.5469" />
    <circle cx="80.5469" cy="53.5469" r="12.5469" />
  </svg>
);

type IconProps = {
  color?: ColorProps;
  header?: 'header';
};
const IconDrag = styled(Svg)<IconProps>(({ theme: { colorNew }, header }) => [
  {
    verticalAlign: 'middle',
    fill: colorNew.bulma,
  },
  header && {
    opacity: 0,
  },
]);
export default IconDrag;
