import { CSSObject } from 'styled-components';

import listItemStyleTypeNone from './listItemStyleTypeNone';

export type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'inherit'
  | 'initial'
  | 'unset';

/**
 * 1. If we don't know the exact value (i.e. not a `number`), use `calc` and let
 *    the browser calculate spacing.
 */
const inlineMixin = (
  space: any,
  justifyContent?: JustifyContent
): CSSObject => ({
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'hidden',
  justifyContent: justifyContent || 'flex-start',
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

export default inlineMixin;
