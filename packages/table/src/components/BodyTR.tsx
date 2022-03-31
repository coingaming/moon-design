import { ColorNames } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import tint from 'polished/lib/color/tint';
import styled from 'styled-components';
import TD from './TD';

const BodyTR = styled.div<{
  onClick?: () => void;
  depth?: number;
  withOffset?: boolean;
  isExpanded?: boolean;
  hasChildren?: boolean;
  hasParent?: boolean;
  isLastRow?: boolean;
  isLastNestedRow?: boolean;
  isSelected?: boolean;
  customBackground?: boolean;
  backgroundColor?: ColorNames;
  fontColor?: ColorNames;
}>(
  ({ theme, isSelected, backgroundColor, customBackground, fontColor }) => ({
    [TD]: {
      color: isSelected
        ? themed('color', 'popo.100')(theme)
        : themed('color', fontColor ?? 'popo.100')(theme),
      backgroundColor: isSelected && !customBackground
        ? tint(0.88, theme.colorNew.piccolo)
        : themed('color', backgroundColor)(theme),
      borderColor: isSelected && !customBackground
        ? tint(0.88, theme.colorNew.piccolo)
        : themed('color', backgroundColor)(theme)
    },
  }),
  ({
     theme,
     onClick,
     withOffset,
     isExpanded,
     hasChildren,
     hasParent,
     isLastNestedRow,
     isLastRow,
     isSelected,
     backgroundColor,
     depth = 0,
   }) => ({
    marginTop: withOffset ? rem(8) : rem(2),
    position: 'relative',
    '&:first-child': {
      marginTop: 0,
    },
    '&:focus-visible': {
      outline: 'none',
      [TD]: {
        borderTop: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
        borderBottom: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
        boxSizing: 'border-box',
        '&:first-child': {
          borderLeft: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
        },
        '&:last-child': {
          borderRight: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
        },
      }
    },
    ...(onClick
      ? {
        '&:hover': {
          cursor: 'pointer',
          [TD]: {
            backgroundColor: tint(0.88, theme.colorNew.piccolo)
          },
        },
      }
      : {}),
    ...((hasChildren && !isExpanded) || isLastNestedRow
      ? {
        position: 'relative',
        '&:after': {
          content: '""',
          height: '1px',
          width: `calc(100% - ${rem(24 + 24 * (depth + 1))})`,
          position: 'absolute',
          bottom: 0,
          right: rem(24),
          background: theme.colorNew.beerus,
        },
      }
      : {}),
    ...(isExpanded
      ? {
        [TD]: {
          '&:first-child': {
            borderBottomLeftRadius: 0,
          },
          '&:last-child': {
            borderBottomRightRadius: 0,
          },
        },
      }
      : {}),
    ...(hasParent
      ? {
        marginTop: 0,
        [TD]: {
          '&:first-child': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          '&:last-child': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
      }
      : {}),
    ...(isLastRow
      ? {
        '&:after': {
          display: 'none',
        },
      }
      : {}),
    ...(isLastRow && !isExpanded
      ? {
        [TD]: {
          '&:first-child': {
            borderBottomLeftRadius: theme.newTokens.borderRadius.medium,
          },
          '&:last-child': {
            borderBottomRightRadius: theme.newTokens.borderRadius.medium,
          },
        },
      }
      : {}),
    ...(isLastRow && hasParent
      ? {
        [TD]: {
          '&:first-child': {
            borderTopLeftRadius: 0,
          },
          '&:last-child': {
            borderTopRightRadius: 0,
          },
        },
      }
      : {})
  })
);

export default BodyTR;
