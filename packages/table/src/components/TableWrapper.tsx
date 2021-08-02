import styled from "styled-components";
import rgba from 'polished/lib/color/rgba';
import { rem, themed } from '@heathmont/moon-utils';
import BodyTR from "./BodyTR";
import TD from "./TD";
import TH from "./TH";
import { TableVariant } from "../Table";

const TableWrapper = styled.div<{
  isScrolledToLeft: boolean;
  isScrolledToRight: boolean;
  variant?: TableVariant;
  defaultRowBackgroundColor?: any;
  evenRowBackgroundColor?: any;
  headerBackgroundColor?: any;


}>(({ theme, isScrolledToLeft, isScrolledToRight, variant, headerBackgroundColor }) => ({
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
    borderRadius: rem(theme.radius.largest),
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
          boxShadow: `6px 0px 9px -10px ${rgba(theme.color.trunks[100], 0.9)}`,
        },
      }
      : {}),

    ...(!isScrolledToRight
      ? {
        '[data-sticky-first-right-td]': {
          boxShadow: `-6px 0px 9px -10px ${rgba(theme.color.trunks[100], 0.9)}`,
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
          }
        }
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
              borderTopLeftRadius: theme.radius.default,
              borderBottomLeftRadius: theme.radius.default,
            },
          }
        }
      }
    }
    : {})
}));

export default TableWrapper