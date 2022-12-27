import { createContext } from 'react';
import type TooltipState from '../types/TooltipState';

const TooltipContext = createContext<TooltipState>({});
TooltipContext.displayName = 'TooltipContext';

export default TooltipContext;
