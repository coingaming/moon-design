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
    zIndex: zIndex.dialog,
    display: 'grid',
    gridTemplateAreas: `
    "sidebar  inputs     inputs"
    "sidebar firstMonth secondMonth"
    "footer  footer     footer"
  `,
    gridTemplateColumns: '1fr 3fr 3fr',
    alignItems: 'baseline',
    padding: rem(16),
    gap: rem(24),
    borderRadius: borderRadius.large,
    backgroundColor: colorNew.gohan,
    boxShadow: boxShadow.large,
    overflow: 'hidden',
  })
);

export default PickerContainer;
