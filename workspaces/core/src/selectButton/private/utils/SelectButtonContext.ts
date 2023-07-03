import { createContext } from 'react';
import type SelectButtonState from '../types/SelectButtonState';

const SelectButtonContext = createContext<SelectButtonState>({});
SelectButtonContext.displayName = 'InputBtnContext';

export default SelectButtonContext;
