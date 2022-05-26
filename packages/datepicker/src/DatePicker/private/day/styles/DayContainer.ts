import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled from 'styled-components';

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
      color: theme.colorNew.bulma,
      userSelect: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box',
      border: '1px solid transparent', // to prevent jumping on hover
      '&:hover': {
        border: `1px solid ${theme.colorNew.beerus}`,
        borderRadius: theme.newTokens.borderRadius.surface.small,
      },
    },
    isStartEdge && {
      background: theme.colorNew.piccolo,
      borderRadius: theme.newTokens.borderRadius.surface.small,
      color: theme.colorNew.goten,
      '&:hover': {
        border: `1px solid ${theme.colorNew.piccolo}`,
      },
    },
    isToday && {
      fontWeight: 'bold',
    },
    isDisabled && {
      cursor: 'default',
      color: rgba(theme.colorNew.bulma, 0.32),
      '&:hover': {
        border: '1px solid transparent',
      },
    },
  ]
);

export default DayContainer;
