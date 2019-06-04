import * as React from 'react';
import { CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import rgba from 'polished/lib/color/rgba';
import padding from 'polished/lib/shorthands/padding';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { inlineSVG, InlineSVGProps, spacing } from '@heathmont/sportsbet-utils';
import { cardGradientSizes } from './utils';

type CardTemplates = 'front' | 'back' | 'outline';
type CardBackgroundIcon = InlineSVGProps | false | undefined;
type CardProps = {
  backgroundIcon?: CardBackgroundIcon | undefined;
  template: CardTemplates;
  flex?: boolean;
};

/**
 * Styles
 */
const card: CSSObject = {
  display: 'block',
  minHeight: rem(170),
  ...padding(spacing(), spacing('medium')),
  position: 'relative',
  borderRadius: border.radius.default,
  backgroundColor: colors.neutral[90],
};

/* Modifiers */
const cardFlex: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'alignContent',
};

/*
const cardBackground: (
  withIcon: CardBackgroundIcon
) => CSSObject = withIcon => ({
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'luminosity',
  backgroundImage: !withIcon
    ? `${cardGradients}`
    : `${inlineSVG(withIcon)}, ${cardGradients}`,
  backgroundSize: !withIcon
    ? `${cardGradientSizes}`
    : `auto 75%, ${cardGradientSizes}`,
  backgroundPosition: withIcon
    ? `${cardGradientPositions}`
    : `center right ${spacing()}, ${cardGradientPositions}`,
});
*/

const cardOutline: CSSObject = {
  borderStyle: border.style,
  borderWidth: border.width,
  borderColor: colors.neutral[50],
};

const cardBack: CSSObject = { backgroundColor: colors.neutral[70] };
const cardShadow: CSSObject = { boxShadow: 'rgba(0, 0, 0, 0.25) 4px 4px 12px' };

const cardModifiers = ({ template, backgroundIcon }: CardProps) =>
  ({
    front: [
      { backgroundColor: colors.neutral[70] },
      backgroundIcon && {
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'luminosity',
        backgroundImage: inlineSVG(backgroundIcon),
        backgroundSize: `auto 75%, ${cardGradientSizes}`,
        backgroundPosition: `center right ${spacing()}`,
      },
      cardShadow,
    ],
    back: [cardBack, cardShadow],
    outline: cardOutline,
  }[template]);

/**
 * Component
 */
const Card = styled.div<CardProps>(({ backgroundIcon, flex, template }) => [
  card,
  flex && cardFlex,
  cardModifiers({
    template: template || 'front',
    backgroundIcon:
      backgroundIcon &&
      React.isValidElement(backgroundIcon) &&
      React.cloneElement(backgroundIcon as React.ReactElement<any>, {
        color: rgba(colors.neutral[10], 0.05),
      }),
  }),
]);

export { Card, CardProps };
