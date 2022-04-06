import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

type PickerContainerProps = {
  isSidebar?: boolean;
  isInputsPanel?: boolean;
  isFooter?: boolean;
  isOneMonth?: boolean;
  isExpanded?: boolean;
};

const getGridTemplate = ({
  isSidebar,
  isInputsPanel,
  isFooter,
  isOneMonth,
  isExpanded,
}: PickerContainerProps) => {
  if (!isExpanded && isSidebar) {
    return {
      gridTemplateAreas: '"sidebar"',
      gridTemplateColumns: '1fr',
    };
  }
  //only one Month visible
  if (isOneMonth) {
    if (isSidebar) {
      if (isInputsPanel) {
        return {
          gridTemplateAreas: `
          "sidebar  inputs"
          "sidebar firstMonth"
          ${isFooter ? '"footer footer"' : ''}
        `,
          gridTemplateColumns: '1fr 3fr',
        };
      }
      return {
        gridTemplateAreas: `
        "sidebar  firstMonth"
        "sidebar firstMonth"
        ${isFooter ? '"footer footer"' : ''}
      `,
        gridTemplateColumns: '1fr 3fr',
      };
    }

    if (isInputsPanel) {
      return {
        gridTemplateAreas: `
        "inputs "
        "firstMonth"
        ${isFooter ? '"footer"' : ''}
      `,
        gridTemplateColumns: '1fr',
      };
    }

    return {
      gridTemplateAreas: `
      "firstMonth"
      ${isFooter ? '"footer"' : ''}
    `,
      gridTemplateColumns: '1fr',
    };
  }

  if (isSidebar) {
    if (isInputsPanel) {
      return {
        gridTemplateAreas: `
        "sidebar  inputs     inputs"
        "sidebar firstMonth secondMonth"
        ${isFooter ? '"footer footer footer"' : ''}
      `,
        gridTemplateColumns: '1fr 3fr 3fr',
      };
    }
    return {
      gridTemplateAreas: `
      "sidebar  firstMonth secondMonth"
      "sidebar firstMonth secondMonth"
      ${isFooter ? '"footer footer footer"' : ''}
    `,
      gridTemplateColumns: '1fr 3fr 3fr',
    };
  }

  if (isInputsPanel) {
    return {
      gridTemplateAreas: `
      "inputs     inputs"
      "firstMonth secondMonth"
      ${isFooter ? '"footer footer"' : ''}
    `,
      gridTemplateColumns: '1fr 1fr',
    };
  }

  return {
    gridTemplateAreas: `
    "firstMonth secondMonth"
    ${isFooter ? '"footer footer"' : ''}
  `,
    gridTemplateColumns: '1fr 1fr',
  };
};

const PickerContainer = styled.div<PickerContainerProps>(
  ({
    theme: {
      newTokens: { borderRadius, zIndex, boxShadow },
      colorNew,
    },
    isSidebar,
    isInputsPanel,
    isFooter,
    isOneMonth,
    isExpanded,
  }) => [
    {
      width: 'fit-content',
      position: 'absolute',
      zIndex: zIndex.dialog,
      display: 'grid',
      alignItems: 'start',
      padding: rem(16),
      gap: rem(24),
      borderRadius: borderRadius.large,
      backgroundColor: colorNew.gohan,
      boxShadow: boxShadow.large,
      overflow: 'hidden',
    },
    getGridTemplate({
      isSidebar,
      isInputsPanel,
      isFooter,
      isOneMonth,
      isExpanded,
    }),
  ]
);

export default PickerContainer;
