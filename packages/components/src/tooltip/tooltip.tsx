import * as React from 'react';
import styled, { css, CSSObject } from 'styled-components';
import { rem } from '@heathmont/sportsbet-utils';
import { IconClose } from '@heathmont/sportsbet-assets';

import { Toggle } from '../toggle/toggle';

import { slideUpFade } from './animation';

/**
 * Types
 */
type TooltipBubbleProps = {
  active?: boolean;
  error?: boolean;
  onClose?: () => void;
  align?: 'left' | 'right';
};

type TooltipProps = TooltipBubbleProps & {
  id?: string;
  children: React.ReactNode;
};

/**
 * Settings
 */
const tooltipSpace = `--tooltip-space`;
const tooltipIconSize = '0.8rem';
const tooltipIconOffset = `calc(var(${tooltipSpace}) + ${tooltipIconSize})`;

const tooltipAnimation = css`
  animation: ${slideUpFade} ${({ theme }) => theme.transitionDuration.default}s
    ease-in-out;
  animation-fill-mode: forwards;
`;

/**
 * Styles
 */
const TooltipBubble = styled.div<TooltipBubbleProps>(
  ({
    active,
    align = 'left',
    error,
    theme: { border, boxShadow, color, radius, space, zIndex },
  }) => [
    {
      [tooltipSpace]: rem(space.small),
      [align]: 0,
      border,
      boxShadow,
      zIndex: zIndex.toggle,
      position: 'absolute',
      maxWidth: '100%',
      padding: `var(${tooltipSpace})`,
      marginTop: `var(${tooltipSpace})`,
      backgroundColor: !error ? color.goku[100] : color.chiChi[100],
      borderColor: color.beerus[100],
      borderRadius: rem(radius.small),
      color: !error ? color.bulma[100] : color.goten[100],
      willChange: 'transform',
      [`${IconClose}`]: {
        color: color.trunks[100],
      },
    },
    tooltipAnimation,
    active && {
      animationDirection: 'reverse',
    },
  ]
);

const TooltipCaption = styled.div<TooltipBubbleProps>(({ onClose }) => [
  { position: 'relative' },
  typeof onClose === 'function' && {
    paddingRight: tooltipIconOffset,
  },
]);

const tooltipToggle: CSSObject = {
  display: 'inline-flex',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  right: 0,
  fontSize: tooltipIconSize,
};

/**
 * Component
 */
const Tooltip: React.FC<TooltipProps> = ({
  onClose,
  active,
  id,
  children,
  ...props
}) => (
  <div
    aria-hidden={!active}
    role="tooltip"
    id={id}
    css={{ position: 'relative' }}
  >
    <TooltipBubble active={active} {...props}>
      <TooltipCaption onClose={onClose}>
        {children}
        {typeof onClose === 'function' && (
          <Toggle topRight={false} css={tooltipToggle}>
            <IconClose onClick={onClose} fontSize="inherit" />
          </Toggle>
        )}
      </TooltipCaption>
    </TooltipBubble>
  </div>
);

export { Tooltip, TooltipProps };

export default Tooltip;
