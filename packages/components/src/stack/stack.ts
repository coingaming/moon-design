import styled, { CSSObject } from 'styled-components';
import { spacing } from '@heathmont/sportsbet-utils';

type StackSpace = CSSObject['marginTop'] | CSSObject['gridGap'];

export type StackProps = {
  space?: StackSpace;
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
});

export const Stack = styled.div<StackProps>(({ space = spacing('default') }) =>
  stack(space)
);
