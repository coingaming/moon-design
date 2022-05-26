import { ColorNames } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import rgba from 'polished/lib/color/rgba';
import styled from 'styled-components';
import { TableVariant } from '../Table';
import BodyTR from './BodyTR';
import TD from './TD';
import TH from './TH';

const TableWrapper = styled.div<{
  isScrolledToLeft: boolean;
  isScrolledToRight: boolean;
  variant?: TableVariant;
  defaultRowBackgroundColor?: ColorNames;
  evenRowBackgroundColor?: ColorNames;
  headerBackgroundColor?: ColorNames;
}>(
  ({
    theme,
    isScrolledToLeft,
    isScrolledToRight,
    variant,
    headerBackgroundColor,
  }) => ({
    /**
     * Scroll Behavior
     * 2. Auto-hide scrollbars on IE/Edge.
     * 3. Create 'padding' around the scrollbar.
     */
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'thin',
    '-ms-overflow-style': '-ms-autohiding-scrollbar' /* [2] */,
    '::-webkit-scrollbar': {
      width: 12,
      height: 12,
      cursor: 'pointer',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
      backgroundClip: 'content-box' /* [3] */,
      borderRadius: rem(9999),
      border: '3px solid transparent' /* [3] */,
    },
    ':hover::-webkit-scrollbar-thumb': {
      backgroundColor: theme.color.goku[40],
    },
    '&.sticky': {
      overflow: 'scroll',
      '.body': {
        position: 'relative',
        zIndex: 0,
      },
      '[data-sticky-td]': {
        position: 'sticky',
      },
      ...(!isScrolledToLeft
        ? {
            '[data-sticky-last-left-td]': {
              boxShadow: `6px 0px 9px -10px ${rgba(
                theme.colorNew.trunks,
                0.9
              )}`,
            },
          }
        : {}),

      ...(!isScrolledToRight
        ? {
            '[data-sticky-first-right-td]': {
              boxShadow: `-6px 0px 9px -10px ${rgba(
                theme.colorNew.trunks,
                0.9
              )}`,
            },
          }
        : {}),
    },
    ...(variant === 'calendar'
      ? {
          [TH]: {
            '&:first-child': {
              '&::after': {
                display: 'none',
              },
            },
          },
          [BodyTR]: {
            [TD]: {
              '&:first-child': {
                backgroundColor: themed('color', headerBackgroundColor)(theme),
                borderRadius: 0,
                '&::after': {
                  display: 'none',
                },
                '& + div': {
                  borderTopLeftRadius:
                    theme.newTokens.borderRadius.surface.small,
                  borderBottomLeftRadius:
                    theme.newTokens.borderRadius.surface.small,
                },
              },
            },
          },
        }
      : {}),
  })
);

export default TableWrapper;
