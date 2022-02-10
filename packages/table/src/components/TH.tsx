import { ColorNames } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

const TH = styled.div<{
  headerBackgroundColor?: ColorNames;
}>(
  ({ theme, headerBackgroundColor }) => ({
    backgroundColor: themed('color', headerBackgroundColor)(theme),
  }),
  ({ theme: { colorNew, newTokens } }) => ({
    padding: newTokens.space.twoxsmall,
    color: colorNew.trunks,
    position: 'relative',
    fontSize: rem(12),
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '1px',
      backgroundColor: colorNew.beerus,
      height: '70%',
      bottom: '15%',
      right: 0,
    },
    '&:last-child': {
      borderRight: 0,
    },
    '.resizer': {
      display: 'inline-block',
      width: rem(8),
      height: '100%',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1,
      '&::after': {
        content: '""',
        position: 'absolute',
        width: '1px',
        height: '70%',
        bottom: '15%',
        right: 0,
      },
      '&.isResizing': {
        '&::after': {
          background: colorNew.piccolo,
        },
      },
    },
  })
);

export default TH;
