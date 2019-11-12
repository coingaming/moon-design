import styled, { CSSObject } from 'styled-components';
import { spacing } from '@heathmont/sportsbet-utils';

type InlineSpace = CSSObject['marginLeft'];

export type InlineProps = {
  fontSize?: CSSObject['fontSize'];
  space?: InlineSpace;
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
});

export const Inline = styled.div<InlineProps>(
  ({ fontSize, space = spacing('default') }) => ({ ...inline(space), fontSize })
);
