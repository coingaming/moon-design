import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import Reel from '../../reel/Reel';

const TabList = styled(Reel.withComponent('ul'))<{ isContainer?: boolean }>(
  ({ theme: { border, color }, isContainer }) => [
    isContainer && {
      padding: rem(4),
      border: border,
      borderColor: color.beerus[100],
      borderRadius: rem(8),
    },
  ]
);

export default TabList;
