import styled, { CSSObject } from 'styled-components';
import { spacing } from '@heathmont/sportsbet-utils';

type InlineSpace = CSSObject['gap'] | CSSObject['marginLeft'];

export type InlineProps = {
  space?: InlineSpace;
};

export const inline = (space: InlineSpace): CSSObject => ({
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'hidden',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin:
    space && typeof space === 'number'
      ? (space / 2) * -1
      : `calc(${space} / 2 * -1)`,
  '& > *': {
    margin:
      space && typeof space === 'number' ? space / 2 : `calc(${space} / 2)`,
  },
});

export const Inline = styled.div<InlineProps>(
  ({ space = spacing('default') }) => inline(space)
);
