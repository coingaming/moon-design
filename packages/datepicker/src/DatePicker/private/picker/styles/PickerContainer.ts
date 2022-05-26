import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const PickerContainer = styled.div(
  ({
    theme: {
      newTokens: { borderRadius, zIndex, boxShadow },
      colorNew,
    },
  }) => ({
    width: 'fit-content',
    position: 'absolute',
    top: '120%',
    zIndex: zIndex.dialog,
    alignItems: 'center',
    borderRadius: borderRadius.surface.medium,
    padding: `${rem(16)} ${rem(12)}`,
    backgroundColor: colorNew.gohan,
    boxShadow: boxShadow.large,
    overflow: 'hidden',
  })
);

export default PickerContainer;
