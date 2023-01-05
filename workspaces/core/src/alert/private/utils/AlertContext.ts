import { createContext } from 'react';
import type AlertState from '../types/AlertState';

const AlertContext = createContext<AlertState>({});
AlertContext.displayName = 'AlertContext';

export default AlertContext;
