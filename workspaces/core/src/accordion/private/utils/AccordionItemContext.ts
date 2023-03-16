import { createContext } from 'react';
import type AccordionItemState from '../types/AccordionItemState';

const AccordionItemContext = createContext<AccordionItemState>({});
AccordionItemContext.displayName = 'AccordionItemContext';

export default AccordionItemContext;
