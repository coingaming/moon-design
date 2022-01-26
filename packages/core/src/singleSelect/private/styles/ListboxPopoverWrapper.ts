import React from 'react';
import { rem } from '@heathmont/moon-utils';
import { ListboxPopover, ListboxPopoverProps } from '@reach/listbox';
import styled from 'styled-components';

interface ListboxPopoverWrapperProps extends ListboxPopoverProps {
  zIndexOptions?: number;
}

const ListboxPopoverWrapper = styled(
  ListboxPopover
)<ListboxPopoverWrapperProps>(
  ({ theme: { colorNew, newTokens }, zIndexOptions }) => ({
    backgroundColor: colorNew.gohan,
    borderRadius: rem(12),
    padding: `${rem(8)} 0`,
    marginTop: rem(6),
    boxShadow: newTokens.boxShadow.large,
    zIndex: zIndexOptions || newTokens.zIndex.carouselControl,
  })
) as React.FC<ListboxPopoverWrapperProps>;

export default ListboxPopoverWrapper;
