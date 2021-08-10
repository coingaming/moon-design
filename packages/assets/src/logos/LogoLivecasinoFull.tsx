import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="100%" viewBox="0 0 172 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11.1535 19.7794L10.4424 21.9149H4C4.12799 21.7298 4.18488 21.018 4.18488 19.7794V14.0846C4.18488 12.9884 4.11377 12.2338 4.04266 12.063L4 11.9491H5.86303C5.69237 12.1342 5.60704 12.846 5.60704 14.0846V20.9895C5.60704 21.3882 5.7066 21.4166 6.17591 21.4166C7.25675 21.4166 8.39448 21.1461 9.11979 20.8472C9.84509 20.5197 10.4566 20.178 10.7268 19.9502L10.9402 19.7794H11.1535ZM23.9991 14.7965V19.0675C23.9991 20.5909 24.2125 21.5875 24.3689 21.7726L24.4969 21.9149H22.1503C22.1645 21.9007 22.2072 21.8864 22.321 21.6444C22.3779 21.5163 22.4205 21.3739 22.4632 21.1888C22.5627 20.8044 22.6481 20.0214 22.6481 19.0675V14.7965C22.6481 13.8426 22.577 13.0453 22.4774 12.6894C22.3779 12.305 22.2641 12.0487 22.2072 11.9918L22.1503 11.9491H24.4969C24.4827 11.9633 24.44 11.9776 24.3262 12.2196C24.2693 12.3477 24.2125 12.5043 24.1698 12.6894C24.0987 13.0453 23.9991 13.8426 23.9991 14.7965ZM34.3262 11.9491H35.9759L39.8869 20.0926L42.077 15.7931C42.6316 14.6968 42.8876 13.7002 42.845 13.1735C42.8023 12.6182 42.6743 12.2196 42.5463 12.063L42.4325 11.9491H44.7649L39.6167 21.9149H39.3322L34.3262 11.9491ZM59.5193 19.7794L58.8082 21.9149H52.3658C52.4938 21.7298 52.5507 21.018 52.5507 19.7794V14.0846C52.5507 12.9884 52.4796 12.2338 52.4084 12.063L52.3658 11.9491H53.8306C55.7648 11.9491 57.3576 11.8352 57.8695 11.7355L58.2393 11.6644L58.666 13.6575H58.4526C58.3957 13.6006 58.3246 13.5294 57.8553 13.2589C57.6136 13.1308 57.3576 13.0169 57.0874 12.9172C56.5327 12.7036 55.5514 12.5186 54.5417 12.5186C54.1008 12.5186 53.9728 12.5043 53.9728 12.9457V16.5049L57.2438 16.0066V17.4303L53.9728 16.932V20.9895C53.9728 21.3882 54.0724 21.4166 54.5417 21.4166C55.6794 21.4166 56.8456 21.1461 57.5425 20.8472C58.2678 20.5197 58.8508 20.178 59.121 19.9502L59.3059 19.7794H59.5193Z" fill="currentColor"/><path d="M71.0834 20.8045C72.0932 21.7299 73.4442 22.1997 75.1366 22.1997C76.6867 22.1997 77.9667 21.7299 79.0049 20.8045L78.5924 20.4058C77.668 21.2173 76.5161 21.6302 75.1366 21.6302C73.9846 21.6302 73.0318 21.2173 72.278 20.3773C71.5243 19.5374 71.1545 18.3984 71.1545 16.932C71.1545 15.4371 71.5101 14.2697 72.2211 13.4582C72.9322 12.6467 73.814 12.2338 74.8521 12.2338C75.6486 12.2338 76.3739 12.5755 76.7578 12.9314C76.9427 13.1023 77.1134 13.3016 77.2556 13.5294C77.5543 13.985 77.5827 14.1131 77.6254 14.227H77.7676L78.6493 12.5186L78.2369 12.305C77.9667 12.1627 77.54 12.0203 76.9427 11.8779C76.3454 11.7355 75.7197 11.6644 75.0655 11.6644C73.4584 11.6644 72.15 12.1627 71.1261 13.1592C70.1021 14.1416 69.5901 15.4087 69.5901 16.932C69.5901 18.5835 70.0879 19.8791 71.0834 20.8045Z" fill="currentColor"/><path d="M109.95 12.3762L109.665 12.2054C109.267 11.9633 108.286 11.6644 107.319 11.6644C106.494 11.6644 105.811 11.8921 105.271 12.3335C104.745 12.7748 104.475 13.3585 104.475 14.0846C104.46 15.85 106.039 16.633 107.234 17.4018C108.073 17.9286 108.741 18.7543 108.741 19.8506C108.741 20.9183 108.03 21.6302 107.006 21.6302C105.797 21.6302 105.115 20.776 105.115 19.637C105.115 18.9252 105.285 18.3842 105.612 17.9998L105.541 17.9001L103.835 18.6404L103.806 18.7259C103.749 18.854 103.692 19.2099 103.692 19.5658C103.692 20.3346 103.977 20.9611 104.56 21.4593C105.143 21.9576 105.911 22.1997 106.878 22.1997C107.802 22.1997 108.556 21.9292 109.168 21.4024C109.779 20.8614 110.092 20.1495 110.092 19.2669C110.106 17.3306 108.528 16.3625 107.333 15.6507C106.494 15.1239 105.826 14.4548 105.826 13.6575C105.826 12.7891 106.48 12.2338 107.234 12.2338C108.087 12.2765 108.499 12.846 108.656 13.444C108.812 13.8568 108.812 13.985 108.812 14.0846H108.954L109.95 12.3762Z" fill="currentColor"/><path d="M123.475 19.0675V14.7965C123.475 13.8426 123.574 13.0453 123.645 12.6894C123.688 12.5043 123.745 12.3477 123.802 12.2196C123.916 11.9776 123.958 11.9633 123.972 11.9491H121.626L121.683 11.9918C121.74 12.0488 121.853 12.305 121.953 12.6894C122.053 13.0453 122.124 13.8426 122.124 14.7965V19.0675C122.124 20.0214 122.038 20.8045 121.939 21.1888C121.896 21.3739 121.853 21.5163 121.797 21.6444C121.683 21.8865 121.64 21.9007 121.626 21.9149H123.972L123.844 21.7726C123.688 21.5875 123.475 20.5909 123.475 19.0675Z" fill="currentColor"/><path d="M143.649 21.9149L144.147 11.9491H142.511L143.151 19.9502L134.832 11.9491H134.263L134.121 21.9149H135.685L134.761 13.9138L143.08 21.9149H143.649Z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M95.8984 21.9149H94.2487L92.9545 19.0675H88.1618C87.4223 20.8899 87.8063 21.616 88.0054 21.8437L88.0765 21.9149H85.9575L90.8213 11.9491H91.1057L95.8984 21.9149ZM90.5511 13.7714L92.4994 18.071H88.6027L90.5511 13.7714Z" fill="currentColor"/><path d="M156.932 23.1013C160.335 23.1013 163.094 20.3392 163.094 16.932C163.094 13.5248 160.335 10.7627 156.932 10.7627C153.528 10.7627 150.769 13.5248 150.769 16.932C150.769 20.3392 153.528 23.1013 156.932 23.1013Z" fill="currentColor"/><path d="M164.991 10.7626C166.562 10.7626 167.835 9.48782 167.835 7.91526C167.835 6.34269 166.562 5.06788 164.991 5.06788C163.42 5.06788 162.146 6.34269 162.146 7.91526C162.146 9.48782 163.42 10.7626 164.991 10.7626Z" fill="#de0d3e"/></svg>;

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
};
const LogoLivecasinoFull = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  theme
}) => ({ ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize
}));
LogoLivecasinoFull.defaultProps = {
    
  };
export default LogoLivecasinoFull;