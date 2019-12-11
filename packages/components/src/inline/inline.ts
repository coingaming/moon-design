import styled, { CSSObject } from 'styled-components';
import { themed } from '@heathmont/sportsbet-utils';
import { SpaceProps } from '@heathmont/sportsbet-themes';

import { listItemStyleTypeNone } from '../lists/lists';

type InlineSpace = CSSObject['marginLeft'];

export type InlineProps = {
  fontSize?: CSSObject['fontSize'];
  /**
   * Excepts a string value, number or a theme key.
   *
   * Theme keys are returned as a `rem`-based unit.
   *
   * e.g. `<Stack space="large" />` returns `space.large` as a rem unit.
   */
  space?: SpaceProps | InlineSpace;
};

/**
 * 1. If we don't know the exact value (i.e. not a `number`), use `calc` and let
 *    the browser calculate spacing.
 */
export const inline = (space: InlineSpace): CSSObject => ({
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'hidden',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin:
    space && typeof space === 'number'
      ? (space / 2) * -1
      : `calc(${space} / 2 * -1)` /* [1] */,
  '& > *': {
    margin:
      space && typeof space === 'number'
        ? space / 2
        : `calc(${space} / 2)` /* [1] */,
  },
  /* Ensure direct child list-items render without bullets */
  '& > li': listItemStyleTypeNone,
});

export const Inline = styled.div<InlineProps>(
  ({ fontSize, space = 'default', theme }) => ({
    ...inline(themed('space', space)(theme)),
    fontSize,
  })
);
