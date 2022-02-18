import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const TextInputGroup = styled.div<{
  isStartError: boolean;
  isEndError: boolean;
  isOneMonth: boolean;
  isRtl?: boolean;
}>(
  ({
    theme: {
      colorNew,
      newTokens: { borderRadius, border },
    },
    isStartError,
    isEndError,
    isOneMonth,
    isRtl,
  }) => [
    {
      gridArea: 'inputs',
      display: 'flex',
      flexDirection: 'row',
      maxWidth: isOneMonth ? rem(304) : rem(392),
      backgroundColor: colorNew.gohan,
      boxShadow: `0 0 0 ${border.width.default} ${colorNew.beerus} inset`,
      borderRadius: borderRadius.large,
      position: 'relative',
      zIndex: 0,
      '.left': {
        '& input': {
          borderEndEndRadius: 0,
          borderStartEndRadius: 0,
        },
        '& .ghost': {
          right: isRtl ? 'auto' : 0,
          left: isRtl ? 0 : 'auto',
        },
        '& input:focus ~ .ghost, & input:hover ~ .ghost': {
          opacity: 0,
        },
      },
      '.right': {
        '& input': {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
        },
        '& .ghost': {
          left: isRtl ? 'auto' : 0,
          right: isRtl ? 0 : 'auto',
        },
        '& input:focus ~ .ghost, & input:hover ~ .ghost': {
          opacity: 0,
        },
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: rem(1),
        left: '50%',
        transform: 'translateX(-50%)',
        background: colorNew.beerus,
        zIndex: 3,
      },
      '&:hover, &:focus-within': {
        '&::after': {
          display: 'none',
        },
      },
    },
    isStartError && {
      '.left': {
        '& input': {
          borderRadius: borderRadius.large,
        },
        '& input ~ .ghost': {
          opacity: 0,
        },
      },
      '&::after': {
        display: 'none',
      },
    },
    isEndError && {
      '.right': {
        '& input': {
          borderRadius: borderRadius.large,
        },
        '& input ~ .ghost': {
          opacity: 0,
        },
      },
      '&::after': {
        display: 'none',
      },
    },
  ]
);

export default TextInputGroup;
