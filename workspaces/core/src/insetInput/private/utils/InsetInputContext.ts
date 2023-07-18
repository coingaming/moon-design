import { createContext } from 'react';
import type InsetInputState from '../types/InsetInputState';

const InsetInputContext = createContext<InsetInputState>({});
InsetInputContext.displayName = 'InsetInputContext';

export default InsetInputContext;
