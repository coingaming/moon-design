import { createContext } from 'react';
import type ItemState from '../types/ItemState';

const ItemContext = createContext<ItemState>({});
ItemContext.displayName = 'ItemContext';

export default ItemContext;
