import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled from 'styled-components';
import Size from '../../private/enums/Size';
import setBorder from './setBorder';
import setDimensions from './setDimensions';
import setPadding from './setPadding';
import type StyledChipProps from '../private/types/StyledChipProps';

const StyledChip = styled.button<StyledChipProps>(
  ({ theme, isStroke, iconLeft, iconRight, iconOnly, size, iconSize }) => [
    {
      zIndex: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: iconOnly ? 'center' : 'space-between',
      alignItems: 'center',
      borderRadius: theme.newTokens.borderRadius.interactive.small,
      gap:
        size === Size.MEDIUM
          ? theme.newTokens.space.twoxsmall
          : theme.newTokens.space.threexsmall,
      ...setPadding(theme.newTokens, size, iconLeft, iconRight, iconOnly),
      transition: theme.newTokens.transition.default,
      ...setBorder(theme, false, isStroke),
      ...setDimensions(size),
      '&:hover': {
        background: rgba(theme.colorNew.piccolo, 0.12),
        color: theme.colorNew.piccolo,
        ...setBorder(theme, false, isStroke, true),
      },
      fontSize: rem(14),
      lineHeight: rem(24),
      position: 'relative',
      'img, svg': {
        display: 'block',
        width: rem(iconSize as number),
        height: rem(iconSize as number),
      },
    },
    ({ isActive, theme, isStroke }) => ({
      background: isActive
        ? rgba(theme.colorNew.piccolo, 0.12)
        : theme.colorNew.gohan,
      color: isActive ? theme.colorNew.piccolo : theme.colorNew.popo,
      cursor: 'pointer',
      ...setBorder(theme, isActive, isStroke),
    }),
  ]
);

export default StyledChip;
