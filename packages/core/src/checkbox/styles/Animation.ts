import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import explode from '../private/utils/explode';

const Animation = styled.div<{ checked?: boolean; animate?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 1;
  transform: translate(-50%, -50%) scale(0);
  background-color: ${({ theme, checked }) =>
    checked
      ? `
          ${rgba(theme.colorNew.piccolo, 0.12)}
        `
      : `${rgba(theme.colorNew.bulma, 0.12)}`};
  opacity: ${({ theme }) =>
    css`
      ${theme.newTokens.opacity}
    `};
  animation: ${({ animate }) =>
    animate
      ? css`
          ${explode} .7s cubic-bezier(0.7, 0.7, 0.7, 1)
        `
      : 'none'};
`;

export default Animation;
