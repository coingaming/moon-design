import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { spacing } from '@heathmont/sportsbet-utils';
import { colors, border, typography } from '@heathmont/sportsbet-tokens';

import { betBoostHighlightColors } from './utils';

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

const SelectionButton = styled.button(({ boosted }: { boosted?: boolean }) => [
  {
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
    fontWeight: typography.fontWeight.semibold,
    '.name': [
      {
        color: colors.neutral[20],
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontSize: rem(12),
      },
      boosted && {
        color: betBoostHighlightColors.text,
      },
    ],
    '.odds': [
      {
        color: colors.neutral[10],
      },
      boosted && {
        color: betBoostHighlightColors.text,
      },
    ],
  },
]);

export const Selection = ({
  selection,
  boosted,
}: {
  selection: SelectionProps;
  boosted?: boolean;
}) => (
  <Container>
    <SelectionButton boosted={boosted}>
      <span className="name">{selection.name}</span>
      <span className="odds">{selection.odds}</span>
    </SelectionButton>
  </Container>
);
