import { createContext } from 'react';
import type MenuItemState from '../types/MenuItemState';

const MenuItemContext = createContext<MenuItemState>({});
MenuItemContext.displayName = 'MenuItemContext';

export default MenuItemContext;
