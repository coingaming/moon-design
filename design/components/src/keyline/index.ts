import styled from '@emotion/styled';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

const dividerColor = colors.border;
const dividerBorderWidth = `${border.width}px`;

export const Keyline = styled.hr({
  display: 'block',
  borderWidth: `${dividerBorderWidth} 0 0 0`,
  borderColor: dividerColor,
  borderStyle: 'solid',
});

export const KeylineText = styled.p({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  textTransform: 'uppercase',
  '&::before, &::after': {
    content: '""',
    display: 'inline-block',
    width: '100%',
    flex: '0 1 auto',
    height: dividerBorderWidth,
    backgroundColor: dividerColor,
    whiteSpace: 'nowrap',
  },
  '&::before': {
    marginRight: spacing('medium'),
  },
  '&::after': {
    marginLeft: spacing('medium'),
  },
});
