import React from 'react';
import styled from 'styled-components';
import padding from 'polished/lib/shorthands/padding';
import { inlineSvg, rem } from '@heathmont/moon-utils';

import { cardGradientSizes } from './utils';

// type CardBackgroundIcon = InlineSVGProps | false | undefined;

const backgroundSvg = (backgroundIcon: any) =>
  backgroundIcon &&
  React.isValidElement(backgroundIcon) && {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    backgroundImage: inlineSvg(
      React.cloneElement(backgroundIcon as React.ReactElement<any>, {
        /**
         * By setting the icon to white with `0.05` opacity, we can use
         * background-blend-mode to exclude it from the background, whatever
         * the color may be.
         */
        color: 'rgba(255, 255, 255, 0.05)',
      })
    ),
  };

export type CardProps = {
  backgroundIcon?: any;
  template: 'front' | 'outline';
  flex?: boolean;
  active?: boolean;
};

/**
 * Component
 */
const Card = styled.div<CardProps>(
  ({
    active,
    backgroundIcon,
    flex,
    template,
    theme: { border, color, radius, space },
  }) => [
    {
      display: 'block',
      minHeight: rem(168),
      ...padding(rem(space.default), rem(space.medium)),
      position: 'relative',
      borderRadius: rem(radius.default),
      border,
      borderColor: 'transparent',
    },
    active && {
      borderColor: color.piccolo[100],
    },
    flex && {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'alignContent',
    },
    template &&
      {
        front: [
          { backgroundColor: color.gohan[100] },
          backgroundIcon && {
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'exclusion',
            ...backgroundSvg(backgroundIcon),
            backgroundSize: `auto 50%, ${cardGradientSizes}`,
            backgroundPosition: `center right ${rem(space.default)}`,
          },
        ],
        outline: {
          backgroundColor: color.goku[100],
          borderColor: color.beerus[100],
        },
      }[template],
  ]
);

Card.defaultProps = {
  template: 'front',
};

export default Card;
