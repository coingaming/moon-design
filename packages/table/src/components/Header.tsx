import {rem, themed} from '@heathmont/moon-utils';
import styled from 'styled-components';

const Header = styled.div<{
  headerBackgroundColor: string,
  selectable?: boolean,
}>(
  {
    position: 'sticky',
    zIndex: 1,
    top: 0,
  },
  ({ selectable, headerBackgroundColor, theme }) => ({
    ...(selectable
      ? {
        paddingLeft: rem(46),
        backgroundColor: themed('color', headerBackgroundColor)(theme)
      } : {})
  })
);

export default Header;
