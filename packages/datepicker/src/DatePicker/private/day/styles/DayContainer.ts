import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';

type DayStyledProps = {
  isStartEdge?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
};

const DayContainer = styled.div<DayStyledProps>(
  ({ theme, isStartEdge, isToday, isDisabled }) => [
    {
      height: rem(40),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: rem(14),
      color: theme.color.bulma[100],
      userSelect: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box',
      border: '1px solid transparent', // to prevent jumping on hover
      '&:hover': {
        border: `1px solid ${theme.color.trunks[100]}`,
        borderRadius: theme.newTokens.borderRadius.medium,
      },
    },
    isStartEdge && {
      background: theme.color.piccolo[100],
      borderRadius: theme.newTokens.borderRadius.medium,
      color: theme.color.goten[100],
    },
    isToday && {
      fontWeight: 'bold',
    },
    isDisabled && {
      cursor: 'default',
      color: rgba(theme.color.bulma[100], 0.32),
      '&:hover': {
        border: '1px solid transparent',
      },
    },
  ]
);

export default DayContainer;
