import styled from 'styled-components';
import setColor from '../private/utils/setColor';
import setSize from '../private/utils/setSize';
import type LoaderProps from '../private/types/LoaderProps';

const LoaderWrapper = styled.div<LoaderProps>(({ color, theme, size }) => ({
  position: 'relative',
  width: setSize(size)?.size,
  height: setSize(size)?.size,
  '& div': {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: `${setSize(size)?.border} solid ${setColor(theme, color)}`,
    borderRadius: '50%',
    animation: 'rotation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
    borderColor: `${setColor(
      theme,
      color
    )} transparent transparent transparent`,
    '&:nth-child(1)': {
      animationDelay: '-0.45s',
    },
    '&:nth-child(2)': {
      animationDelay: '-0.3s',
    },
    '&:nth-child(3)': {
      animationDelay: '-0.15s',
    },
    '@keyframes rotation': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
}));

export default LoaderWrapper;
