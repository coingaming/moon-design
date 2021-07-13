import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg fill="none" width="1em" height="1em" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" {...props}><clipPath id="a"><path d="m0 0h22v22h-22z" /></clipPath><g clipPath="url(#a)" clipRule="evenodd" fillRule="evenodd"><path d="m0 8.55637v-8.55637h21.9995v8.53313l-10.9988 13.46737z" fill="#fff" /><path d="m1.25623 8.1723 8.02245 9.7914v-9.7914z" fill="#d71920" /><g fill="#001522"><path d="m20.7439 8.17279-8.0225 9.79141v-9.79141z" /><path d="m9.256 2.9753h-1.41313v.83595h1.41313c.10692 0 .17516-.0287.20474-.05785.12739-.10752.11647-.6141 0-.71022-.05673-.04863-.13025-.073-.20474-.06788zm-8.03383-1.73934v5.71503h19.55593v-5.71503zm4.59518 4.24857c0 .17403-.25433.55306-.4577.55306h-2.95274v-.88379h2.38858c.1647 0 .1647-.69747 0-.69747h-1.81396c-.21383 0-.57553-.19498-.57553-.42777l-.01001-1.30428c0-.63368.52685-.56489.96589-.56489h2.45683v.76807h-2.38858c-.2243 0-.21429.73118 0 .73118h1.61832c.34168 0 .77982.08747.77982.58358zm4.57925-1.6341c0 .28154-.0537.44053-.1961.58312-.0619.05929-.1354.10527-.2157.13512-.08036.02985-.16595.04293-.25154.03845h-1.87174v1.43047h-.88628v-3.88003h2.75802c.25296 0 .36394.05968.46814.16537.1189.13088.1883.29931.1961.47607zm4.5997-.94347h-2.6142v.89427h1.9504v.81774h-1.9504v1.42773h-.8085v-3.89961h3.4227zm4.6225 2.22269c0 .4747-.177.93208-.7807.93208h-1.9027c-.6706 0-.7784-.36946-.7784-.93208l-.01-2.40263c0-.31115.2729-.59223.7807-.59223h1.9391c.4972 0 .7325.36946.7325.59223v.80589h-.8381c0-.40637-.05-.58221-.2639-.58221h-1.1997c-.1661 0-.3426.22322-.3426.39861v1.507c0 .07836.1483.3189.2843.3189h1.248c.1852-.02005.273-.20501.2625-.5444h.869z" /></g></g></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const CrestSaoPaulo = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  verticalAlign,
  theme
}) => ({ ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize,
  verticalAlign
}));
CrestSaoPaulo.defaultProps = {
    verticalAlign: "middle",
  };
export default CrestSaoPaulo;