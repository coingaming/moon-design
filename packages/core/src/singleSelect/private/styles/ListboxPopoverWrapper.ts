import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { ListboxPopover, ListboxPopoverProps } from '@reach/listbox';
import React from 'react';

const ListboxPopoverWrapper = styled(ListboxPopover)<ListboxPopoverProps>(
  ({ theme: { color, shadows } }) => ({
    backgroundColor: color.gohan[100],
    borderRadius: rem(12),
    padding: `${rem(8)} 0`,
    marginTop: rem(6),
    boxShadow: shadows.lg,
  })
) as React.FC<ListboxPopoverProps>;

export default ListboxPopoverWrapper;
