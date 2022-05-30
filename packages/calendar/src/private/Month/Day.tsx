import styled from 'styled-components';

export const Day = styled.div(({ theme: { newTokens } }) => ({
  display: 'flex',
  position: 'relative',
  boxSizing: 'border-box',
  border: '1px solid transparent',
  '&:nth-child(8)': {
    borderTopLeftRadius: newTokens.borderRadius.surface.small,
  },
  '&:nth-child(14)': {
    borderTopRightRadius: newTokens.borderRadius.surface.small,
  },
  '&:nth-last-child(7)': {
    borderBottomLeftRadius: newTokens.borderRadius.surface.small,
  },
  '&:last-child': {
    borderBottomRightRadius: newTokens.borderRadius.surface.small,
  },
  '&::before': {
    content: '""',
    display: 'block',
    width: 0,
    paddingTop: '100%',
  },
}));
