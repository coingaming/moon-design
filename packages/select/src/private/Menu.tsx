import React from 'react';
import { components, MenuProps } from 'react-select';
import type { SelectProps } from '../styles/CustomStyles';

// any - https://github.com/JedWatson/react-select/issues/4804
const Menu = ({ children, ...rest }: MenuProps<any>) => {
  const selectProps = rest.selectProps as SelectProps;
  const customProps = selectProps['data-customProps'];
  return (
    <components.Menu {...rest}>
      {customProps?.headerSlot || null}
      {children}
      {customProps?.footerSlot || null}
    </components.Menu>
  );
};

export default Menu;
