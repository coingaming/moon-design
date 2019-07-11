import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors, border } from '@heathmont/sportsbet-tokens';

export type SelectionProps = {
  name: string;
  odds: string;
};

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  height: rem(40),
  flexGrow: 1,
});

const SelectionButton = styled.button({
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderTop: `${border.width}px solid ${colors.neutral[30]}`,
  borderBottom: `${border.width}px solid ${colors.neutral[30]}`,
  fontSize: rem(14),
  paddingLeft: spacing(),
  paddingRight: spacing(),
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  textAlign: 'left',
  '.name': {
    color: colors.neutral[20],
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  '.odds': {
    color: colors.neutral[10],
    marginLeft: spacing('xsmall'),
  },
});

export const Selection = ({ selection }: { selection: SelectionProps }) => (
  <Container>
    <SelectionButton>
      <span className="name">{selection.name}</span>
      <span className="odds">{selection.odds}</span>
    </SelectionButton>
  </Container>
);
