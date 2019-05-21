import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { spacing } from '@heathmont/sportsbet-utils';
import { MouseEvent, default as React } from 'react';

export type SelectionProps = {
  id: string;
  name: string;
  odds: string;
  onClick?: (e: MouseEvent) => void;
};

const Container = styled.div(() => [
  {
    gridArea: 'odds',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: rem(9),
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
      fontSize: rem(14),
      paddingTop: rem(11),
      paddingBottom: rem(10),
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
        color: '#fff',
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
        backgroundColor: '#2C333B',
        '.name': {
          color: '#FFFFFF',
        },
      },
      '&:active': {
        backgroundColor: '#0CD664',
        '.name': {
          color: '#FFFFFF',
        },
      },
    },
  ]
);

export const Selections = ({
  selections,
}: {
  selections: SelectionProps[];
}) => (
  <Container>
    {selections.map(selection => {
      return (
        <SelectionButton
          onClick={selection.onClick ? selection.onClick : undefined}
        >
          <span className="name">{selection.name}</span>
          <span className="odds">{selection.odds}</span>
        </SelectionButton>
      );
    })}
  </Container>
);
