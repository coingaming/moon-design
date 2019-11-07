import styled from 'styled-components';
import { spacing } from '@heathmont/sportsbet-utils';

type StackSpace = string | number;
type StackDirection = 'vertical' | 'horizontal';

export type StackProps = {
  space?: StackSpace;
  direction?: StackDirection;
};

export const stack = (
  space: StackSpace,
  direction: StackDirection = 'vertical'
) => {
  const margins = {
    '& > * + *': {
      [direction === 'vertical' ? 'marginTop' : 'marginLeft']: space,
    },
  };

  return direction === 'vertical'
    ? {
        /**
         * If a browser supports the `grid-gap` property, let's use it.
         * Otherwise, fallback to the lobotomized owl selector to style children.
         */
        '@supports (grid-gap: 0)': {
          display: 'grid',
          gridGap: space,
        },
        '@supports not (grid-gap: 0)': {
          ...margins,
        },
      }
    : margins;
};

export const Stack = styled.div<StackProps>(
  ({ space = spacing('default'), direction = 'vertical' }) =>
    stack(space, direction)
);
