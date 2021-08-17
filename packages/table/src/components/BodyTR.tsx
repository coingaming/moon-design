import styled from "styled-components";
import { rem, themed } from '@heathmont/moon-utils';
import tint from 'polished/lib/color/tint';
import { ColorNames } from '@heathmont/moon-themes';

import TD from "./TD";

const BodyTR = styled.div<{
  onClick?: any;
  depth?: number;
  withOffset?: boolean
  isExpanded?: boolean
  hasChildren?: boolean
  hasParent?: boolean
  isLastRow?: boolean
  isLastNestedRow?: boolean
  backgroundColor?: ColorNames;
}>(
  ({ theme, backgroundColor }) => ({
    [TD]: {
      backgroundColor: themed('color', backgroundColor)(theme),
    }
  }),
  ({
    theme, onClick, withOffset, isExpanded, hasChildren, hasParent, isLastNestedRow, isLastRow, depth = 0
  }) => ({
    marginTop: withOffset ? rem(8) : rem(2),
    '&:first-child': {
      marginTop: 0,
    },
    ...(onClick
      ? {
        '&:hover': {
          cursor: 'pointer',
          [TD]: {
            backgroundColor: tint(0.75, theme.color.piccolo[100])
          },
        },
      }
      : {}),
    ...((hasChildren && !isExpanded) || isLastNestedRow
      ? {
        position: 'relative',
        "&:after": {
          content: '""',
          height: '1px',
          width: `calc(100% - ${rem(24 + (24 * (depth + 1)))})`,
          position: 'absolute',
          bottom: 0,
          right: rem(24),
          background: theme.color.beerus[100]
        },
      }
      : {}
    ),
    ...(isExpanded
      ? {
        [TD]: {
          '&:first-child': {
            borderBottomLeftRadius: 0,
          },
          '&:last-child': {
            borderBottomRightRadius: 0,
          }
        }
      }
      : {}
    ),
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
            }
          },
        }
        : {}
      ),
      ...(isLastRow
        ? {
          "&:after": {
            display: 'none'
          },
        }
        : {}
      ),
      ...(isLastRow && !isExpanded
        ? {
          [TD]: {
            '&:first-child': {
              borderBottomLeftRadius: rem(theme.radius.default),
            },
            '&:last-child': {
              borderBottomRightRadius: rem(theme.radius.default),
            }
          }
        }
        : {}
      ),
      ...(isLastRow && hasParent
        ? {
          [TD]: {
            '&:first-child': {
              borderTopLeftRadius: 0,
            },
            '&:last-child': {
              borderTopRightRadius: 0,
            }
          }
        }
        : {}
      ),
  }),
);

export default BodyTR