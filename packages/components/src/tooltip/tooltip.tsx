import * as React from 'react';
import styled, { css, CSSObject } from 'styled-components';
import math from 'polished/lib/math/math';
import { animation, border, colors, zIndex } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconClose } from '@heathmont/sportsbet-icons';

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
const tooltipIndicatorSize = spacing('small');
const tooltipSpacing = spacing('small');
const tooltipIconSize = '0.8rem';
const tooltipIconOffset = math(`${tooltipSpacing} + ${tooltipIconSize}`);

const tooltipAnimation = css`
  animation: ${slideUpFade} ${animation.speed.default}s ease-in-out;
`;

/**
 * Styles
 */
const TooltipBubble = styled.div<TooltipBubbleProps>(
  ({ active, align = 'left', error }) => [
    {
      zIndex: zIndex.toggle,
      [align]: 0,
      position: 'absolute',
      maxWidth: '100%',
      padding: tooltipSpacing,
      marginTop: math(`${tooltipIndicatorSize} + ${spacing('small')}`),
      backgroundColor: !error ? colors.neutral[10] : colors.error,
      borderRadius: border.radius.small,
      boxShadow:
        '0 0 0.25rem 0 rgba(0,0,0,0.08), 0 0.5rem 0.5rem 0 rgba(0,0,0,0.08), 0 1rem 1rem 0 rgba(0,0,0,0.08)',
      animationFillMode: 'forwards',
      willChange: 'transform',
      '&, &::after': {
        color: !error ? colors.neutral[70] : colors.neutral[10],
      },
      '&::after': {
        [align]: spacing(),
        content: `""`,
        position: 'absolute',
        bottom: '100%',
        height: 0,
        width: 0,
        pointerEvents: 'none',
        borderStyle: 'solid',
        borderColor: 'transparent',
        borderBottomColor: !error ? colors.neutral[10] : colors.error,
        borderWidth: tooltipIndicatorSize,
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
            <IconClose
              onClick={onClose}
              fontSize="inherit"
              color={colors.neutral[20]}
            />
          </Toggle>
        )}
      </TooltipCaption>
    </TooltipBubble>
  </div>
);

export { Tooltip, TooltipProps };
