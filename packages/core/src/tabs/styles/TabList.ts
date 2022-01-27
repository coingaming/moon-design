import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Reel from '../../reel/Reel';

const TabList = styled(Reel.withComponent('ul'))<{ isContainer?: boolean }>(
  ({ theme: { colorNew, newTokens }, isContainer }) => [
    isContainer && {
      padding: rem(4),
      border: newTokens.border.default.join,
      borderColor: colorNew.beerus,
      borderRadius: rem(8),
    },
  ]
);

export default TabList;
