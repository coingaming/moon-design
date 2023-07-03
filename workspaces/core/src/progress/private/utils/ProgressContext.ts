import { createContext } from 'react';
import type ProgressState from '../types/ProgressState';

const PropgressContext = createContext<ProgressState>({});
PropgressContext.displayName = 'PropgressContext';

export default PropgressContext;
