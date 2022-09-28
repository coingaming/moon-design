import React, { ReactNode } from 'react';
import { ColorNames } from '@heathmont/moon-themes-tw';
import { rem } from '@heathmont/moon-utils-tw';
import styled from 'styled-components';

type BodyTRProps = {
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
  children?: ReactNode;
};

const BodyTR: React.FC<BodyTRProps> = ({
  onClick,
  withOffset,
  isExpanded,
  hasChildren,
  hasParent,
  isLastNestedRow,
  isLastRow,
  children,
  depth = 0,
}) => {
  return (
    <div
      className={`${
        withOffset ? 'mt-[rem(8)]' : 'mt-[rem(2)]'
      } relative first:mt-0 focus-visible:outline-none  
    ${
      (hasChildren && !isExpanded) || isLastNestedRow
        ? `relative after:content-none after:h-px after:absolute after:right-${rem(
            24
          )} bg-beerus`
        : ''
    } 
    ${hasParent ? 'mt-0' : ''}\
    ${isLastRow ? 'after:hidden' : ''}
    ${onClick ? 'hover:cursor-pointer' : ''}`}
    >
      {children}
    </div>
  );
};

// ...(onClick
//     ? {
//         '&:hover': {
//           cursor: 'pointer',
//           // [TD]: {
//           //   backgroundColor: tint(0.88, theme.colorNew.piccolo),
//           //   borderTop: `${rem(4)} solid ${tint(
//           //     0.88,
//           //     theme.colorNew.piccolo
//           //   )}`,
//           //   borderBottom: `${rem(4)} solid ${tint(
//           //     0.88,
//           //     theme.colorNew.piccolo
//           //   )}`,
//           //   boxSizing: 'border-box',
//           //   '&:first-child': {
//           //     borderLeft: `${rem(4)} solid ${tint(
//           //       0.88,
//           //       theme.colorNew.piccolo
//           //     )}`,
//           //   },
//           //   '&:last-child': {
//           //     borderRight: `${rem(4)} solid ${tint(
//           //       0.88,
//           //       theme.colorNew.piccolo
//           //     )}`,
//           //   },
//           // },
//         },
//       }
//     : {}),
// [TD]: {
//   borderTop: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
//   borderBottom: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
//   boxSizing: 'border-box',
//   '&:first-child': {
//     borderLeft: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
//   },
//   '&:last-child': {
//     borderRight: `${rem(4)} solid ${tint(0.88, theme.colorNew.piccolo)}`,
//   },
// },

export default BodyTR;
