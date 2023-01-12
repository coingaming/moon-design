import { createContext } from 'react';
import type PopoverState from '../types/PopoverState';

const PopoverContext = createContext<PopoverState>({});
PopoverContext.displayName = 'PopoverContext';

export default PopoverContext;
