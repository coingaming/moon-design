import { useContext } from 'react';
import AccordionItemContext from './AccordionItemContext';

const useAccordionItemContext = (component: string) => {
  const context = useContext(AccordionItemContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Accordion.Item /> component.`
    );
    throw err;
  }
  return context;
};
export default useAccordionItemContext;
