import styled, { CSSObject } from 'styled-components';
import { themed } from '@heathmont/sportsbet-utils';
import { SpaceProps } from '@heathmont/sportsbet-themes';

import { listItemStyleTypeNone } from '../lists/lists';

type StackSpace = CSSObject['marginTop'] | CSSObject['gridGap'];

export type StackProps = {
  /**
   * Excepts a string value, number or a theme key.
   *
   * Theme keys are returned as a `rem`-based unit.
   *
   * e.g. `<Stack space="large" />` returns `space.large` as a rem unit.
   */
  space?: SpaceProps | StackSpace;
};

export const stack = (space: StackSpace) => ({
  /**
   * If a browser supports the `grid-gap` property, let's use it.
   * Otherwise, fallback to the lobotomized owl selector to style children.
   */
  '@supports (grid-gap: 0)': {
    display: 'grid',
    gridGap: space,
  },
  '@supports not (grid-gap: 0)': {
    '& > * + *': {
      marginTop: space,
    },
  },
  /* Ensure direct child list-items render without bullets */
  '& > li': listItemStyleTypeNone,
});

export const Stack = styled.div<StackProps>(({ theme, space = 'default' }) =>
  stack(themed('space', space)(theme))
);

export default Stack;
