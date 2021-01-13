import { CSSObject } from 'styled-components';

import listItemStyleTypeNone from '../listItemStyleTypeNone/listItemStyleTypeNone';

type StackSpace = CSSObject['marginTop'] | CSSObject['gridGap'];

const stackMixin = (space: StackSpace) => ({
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
  /* Ensure the grid doesn't overflow the parent width */
  gridTemplateColumns: 'minmax(100px,1fr)',
});

export default stackMixin;
