import React, { ReactNode } from 'react';
import { ColorNames } from '@heathmont/moon-themes-tw';
import { rem } from '@heathmont/moon-utils-tw';
import styled from 'styled-components';
import { TableVariant } from '../func/Table';
import BodyTR from './BodyTR';

type TableWrapperProps = {
  isScrolledToLeft: boolean;
  isScrolledToRight: boolean;
  variant?: TableVariant;
  defaultRowBackgroundColor?: ColorNames;
  evenRowBackgroundColor?: ColorNames;
  headerBackgroundColor?: ColorNames;
  children?: ReactNode;
};

const TableWrapperr: React.FC<TableWrapperProps> = ({
  isScrolledToLeft,
  isScrolledToRight,
  variant,
  defaultRowBackgroundColor,
  evenRowBackgroundColor,
  headerBackgroundColor,
  children,
}) => {
  return <div className={`scrolling-touch `}>{children}</div>;
};
const TableWrapper = styled.div<{
  isScrolledToLeft: boolean;
  isScrolledToRight: boolean;
  variant?: TableVariant;
  defaultRowBackgroundColor?: ColorNames;
  evenRowBackgroundColor?: ColorNames;
  headerBackgroundColor?: ColorNames;
}>(({ theme, isScrolledToLeft, isScrolledToRight, variant }) => ({
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
            boxShadow: `6px 0px 9px -10px bg-trunks`,
          },
        }
      : {}),

    ...(!isScrolledToRight
      ? {
          '[data-sticky-first-right-td]': {
            boxShadow: `-6px 0px 9px -10px bg-trunks`,
          },
        }
      : {}),
  },
  ...(variant === 'calendar'
    ? {
        // [TH]: {
        //   '&:first-child': {
        //     '&::after': {
        //       display: 'none',
        //     },
        //   },
        // },
        ['BodyTR']: {
          // [TD]: {
          //   '&:first-child': {
          //     backgroundColor: themed('color', headerBackgroundColor)(theme),
          //     borderRadius: 0,
          //     '&::after': {
          //       display: 'none',
          //     },
          //     '& + div': {
          //       borderTopLeftRadius:
          //         theme.newTokens.borderRadius.surface.small,
          //       borderBottomLeftRadius:
          //         theme.newTokens.borderRadius.surface.small,
          //     },
          //   },
          // },
        },
      }
    : {}),
}));

export default TableWrapper;
