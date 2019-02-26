/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { math } from 'polished';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { slideUpFade } from './animation';

/**
 * Types
 */
type TooltipBubbleProps = {
  active?: boolean;
  error?: boolean;
  align?: 'left' | 'right';
};

type TooltipProps = TooltipBubbleProps & {
  id?: string;
  message: string;
};

/**
 * Settings
 */
const TooltipIndicatorSize = spacing('small');

/**
 * Styles
 */
const TooltipBubble = styled.div<TooltipBubbleProps>(
  ({ active, align = 'left', error }) => [
    {
      [align]: 0,
      position: 'absolute',
      maxWidth: '100%',
      padding: spacing('small'),
      marginTop: math(`${TooltipIndicatorSize} + ${spacing('small')}`),
      backgroundColor: !error ? colors.neutral[10] : colors.error,
      borderRadius: border.radius.small,
      boxShadow:
        '0 0 0.25rem 0 rgba(0,0,0,0.08), 0 0.5rem 0.5rem 0 rgba(0,0,0,0.08), 0 1rem 1rem 0 rgba(0,0,0,0.08)',
      animation: `${slideUpFade} 0.4s ease-in-out`,
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
        borderWidth: TooltipIndicatorSize,
      },
    },
    active && {
      animationDirection: 'reverse',
    },
  ]
);

const TooltipMessage = styled.p({
  marginBottom: 0,
});

/**
 * Component
 */
const Tooltip: React.FC<TooltipProps> = ({ active, id, message, ...props }) => (
  <div
    aria-hidden={active ? false : true}
    role="tooltip"
    id={id}
    css={css({ position: 'relative' })}
  >
    <TooltipBubble active={active} {...props}>
      <TooltipMessage>{message}</TooltipMessage>
    </TooltipBubble>
  </div>
);

export { Tooltip, TooltipProps };
