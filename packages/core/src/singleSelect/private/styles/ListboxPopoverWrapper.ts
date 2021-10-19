import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { ListboxPopover, ListboxPopoverProps } from '@reach/listbox';
import React from 'react';

interface ListboxPopoverWrapperProps extends ListboxPopoverProps {
  zIndexOptions?: number;
}

const ListboxPopoverWrapper = styled(
  ListboxPopover
)<ListboxPopoverWrapperProps>(
  ({ theme: { color, shadows, zIndex }, zIndexOptions }) => ({
    backgroundColor: color.gohan[100],
    borderRadius: rem(12),
    padding: `${rem(8)} 0`,
    marginTop: rem(6),
    boxShadow: shadows.lg,
    zIndex: zIndexOptions || zIndex.selectOptions,
  })
) as React.FC<ListboxPopoverWrapperProps>;

export default ListboxPopoverWrapper;
