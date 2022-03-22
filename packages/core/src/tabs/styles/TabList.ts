import { Reel } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const TabList = styled(Reel.withComponent('ul'))<{ isContainer?: boolean }>(
  ({ theme: { colorNew, newTokens }, isContainer }) => [
    isContainer && {
      padding: rem(4),
      border: newTokens.border.default,
      borderColor: colorNew.beerus,
      borderRadius: rem(8),
    },
  ]
);

export default TabList;
