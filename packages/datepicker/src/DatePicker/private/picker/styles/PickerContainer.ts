import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const PickerContainer = styled.div(
  ({
    theme: {
      color,
      zIndex,
      shadows,
      newTokens: { borderRadius },
    },
  }) => ({
    width: 'fit-content',
    position: 'absolute',
    top: '120%',
    zIndex: zIndex.dialog,
    alignItems: 'center',
    borderRadius: borderRadius.large,
    padding: `${rem(16)} ${rem(12)}`,
    backgroundColor: color.gohan[100],
    boxShadow: shadows.lg,
    overflow: 'hidden',
  })
);

export default PickerContainer;
