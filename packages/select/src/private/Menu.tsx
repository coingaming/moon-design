// @ts-nocheck
import React from 'react';
import { components, MenuProps } from 'react-select';

const Menu = ({ children, ...rest }: MenuProps) => (
  <components.Menu {...rest}>
    {rest.selectProps['data-customProps']?.menuHeader || null}
    {children}
    {rest.selectProps['data-customProps']?.menuFooter || null}
  </components.Menu>
);

export default Menu;
