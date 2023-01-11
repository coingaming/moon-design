import { createContext } from 'react';
import type TabsState from '../types/TabsState';

const TabsContext = createContext<TabsState>({});
TabsContext.displayName = 'TabsContext';

export default TabsContext;
