import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import setWrapperSize from '../private/utils/setWrapperSize';
import type AvatarProps from '../private/types/AvatarProps';

const Wrapper = styled.div<AvatarProps>(
  ({ size, imageUrl, color, backgroundColor, theme }) => [
    {
      color: themed('color', color)(theme),
      backgroundColor: themed('color', backgroundColor)(theme),
      overflow: 'hidden',
      textTransform: 'uppercase',
      fontWeight: theme.newTokens.font.weight.semibold,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
    },
    setWrapperSize(size),
  ]
);

export default Wrapper;
