import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { spacing } from '@heathmont/sportsbet-utils';
import { MouseEvent, default as React } from 'react';
import { colors } from '@heathmont/sportsbet-tokens';

export type SelectionProps = {
  id: string;
  name: string;
  odds: string;
  onClick?: (e: MouseEvent) => void;
};

const Container = styled.div(() => [
  {
    display: 'flex',
    justifyContent: 'space-between',
    height: rem(40),
    div: {
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'row',
      flexGrow: 1,
    },
  },
]);

const SelectionButton = styled.button(
  ({ onClick }: { onClick?: (e: MouseEvent) => void }) => [
    {
      width: '100%',
      background: 'transparent',
      border: 'none',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      // fontSize: rem(14),
      paddingLeft: rem(12),
      paddingRight: rem(12),
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      overflow: 'hidden',
      textAlign: 'left',
      '.name': {
        color: '#8697A2',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
      '.odds': {
        color: colors.neutral[10],
        marginLeft: spacing('xsmall'),
      },
      '&:first-of-type': {
        borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        paddingLeft: spacing(),
      },
      '&:last-of-type': {
        paddingRight: spacing(),
        borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
      },
    },
    onClick && {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: colors.neutral[60],
        '.name': {
          color: colors.neutral[10],
        },
      },
      '&:active': {
        backgroundColor: colors.brand,
        '.name': {
          color: colors.neutral[10],
        },
      },
    },
  ]
);

export const FootballSelections = ({
  selections,
}: {
  selections: SelectionProps[];
}) => (
  <Container>
    {selections.map((selection, index) => {
      return (
        <SelectionButton key={index} onClick={selection.onClick}>
          <span className="name">{selection.name}</span>
          <span className="odds">{selection.odds}</span>
        </SelectionButton>
      );
    })}
  </Container>
);
