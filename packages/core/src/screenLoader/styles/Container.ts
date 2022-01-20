import { ColorProps } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled, { css, keyframes } from 'styled-components';

/**
 * Animations
 */
const rotate = keyframes`
 0% {
     transform: rotate(0deg) scale(0.8);
 }
 50% {
     transform: rotate(360deg) scale(1.2);
 }
 100% {
     transform: rotate(720deg) scale(0.8);
 }
`;

const rotateAnimation = css`
  animation: ${rotate} 1s infinite;
`;

const ball1 = keyframes`
 0% {
   box-shadow: ${rem(30)} 0 0 var(--third-color);
 }
 50% {
   box-shadow: 0 0 0 var(--third-color);
   margin-bottom: 0;
   transform: translate(${rem(15)}, ${rem(15)});
 }
 100% {
   box-shadow: ${rem(30)} 0 0 var(--third-color);
   margin-bottom: ${rem(10)};
 }
`;

const ball1Animation = css`
  animation: ${ball1} 1s infinite;
`;

const ball2 = keyframes`
 0% {
   box-shadow: ${rem(30)} 0 0 var(--fourth-color);
 }
 50% {
   box-shadow: 0 0 0 var(--fourth-color);
   margin-top: -${rem(20)};
   transform: translate(${rem(15)}, ${rem(15)});
 }
 100% {
   box-shadow: ${rem(30)} 0 0 var(--fourth-color);
   margin-top: 0;
 }
`;

const ball2Animation = css`
  animation: ${ball2} 1s infinite;
`;

interface ContainerProps {
  firstColor: ColorProps;
  secondColor: ColorProps;
  thirdColor: ColorProps;
  fourthColor: ColorProps;
}

const Container = styled.div<ContainerProps>`
  --first-color: ${({ theme, firstColor }) =>
    firstColor || theme.colorNew.chiChi[100]};
  --second-color: ${({ theme, secondColor }) =>
    secondColor || theme.colorNew.piccolo};
  --third-color: ${({ theme, thirdColor }) =>
    thirdColor || theme.colorNew.cell[100]};
  --fourth-color: ${({ theme, fourthColor }) =>
    fourthColor || theme.color.frieza[100]};
  width: ${rem(50)};
  height: ${rem(50)};
  &:before {
    border-radius: 50%;
    content: '';
    display: block;
    height: ${rem(20)};
    width: ${rem(20)};
    background-color: var(--first-color);
    box-shadow: ${rem(30)} 0 0 var(--first-color);
    margin-bottom: ${rem(10)};
    ${ball1Animation}
  }
  &:after {
    border-radius: 50%;
    content: '';
    display: block;
    height: ${rem(20)};
    width: ${rem(20)};
    background-color: var(--second-color);
    box-shadow: ${rem(30)} 0 0 var(--second-color);
    ${ball2Animation}
  }
  ${rotateAnimation}
`;

export default Container;
