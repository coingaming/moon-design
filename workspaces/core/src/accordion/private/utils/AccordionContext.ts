import { createContext } from 'react';
import type AccordionSizes from '../types/AccordionSizes';

const AccordionContext = createContext<{ itemSize?: AccordionSizes }>({});
AccordionContext.displayName = 'AccordionContext';

export default AccordionContext;
