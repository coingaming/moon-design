import { themed } from '@heathmont/moon-utils';
import styled from 'styled-components';
import type AvatarProps from '../private/types/AvatarProps';
import setWrapperSize from '../private/utils/setWrapperSize';

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
      backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
      backgroundSize: 'cover',
    },
    setWrapperSize(size),
  ]
);

export default Wrapper;
