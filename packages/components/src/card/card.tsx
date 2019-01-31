import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { padding, rem } from 'polished';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { cardGradient } from './utils';

type CardProps = {
  template: 'front' | 'back' | 'outline';
  children: JSX.Element[] | JSX.Element;
  flex?: boolean;
};

/**
 * Styles
 */
const cardBase = css({
  display: 'block',
  minHeight: rem(170),
  ...padding(spacing(), spacing('medium')),
  position: 'relative',
  borderRadius: border.radius.default,
  backgroundColor: colors.neutral[80],
});

/* Modifiers */
const cardFlex = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'alignContent',
});

const cardOutline = css({
  borderStyle: border.style,
  borderWidth: border.width,
  borderColor: colors.neutral[50],
});

const cardBack = css({ backgroundColor: colors.neutral[60] });
const cardShadow = css({ boxShadow: 'rgba(0, 0, 0, 0.25) 4px 4px 12px' });

const cardModifiers = {
  front: [cardGradient, cardShadow],
  back: [cardBack, cardShadow],
  outline: cardOutline,
};

/**
 * Component
 */
const Card: React.SFC<CardProps> = ({ children, flex, template }) => {
  const Card = styled('div')(
    cardBase,
    flex && cardFlex,
    cardModifiers[template]
  );

  return <Card>{children}</Card>;
};

Card.defaultProps = {
  flex: false,
  template: 'front',
};

export { Card, CardProps };
