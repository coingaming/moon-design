import { useContext } from 'react';
import AccordionContext from './AccordionContext';

const useAccordionContext = (component: string) => {
  const context = useContext(AccordionContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Accordion /> component.`
    );
    throw err;
  }
  return context;
};

export default useAccordionContext;
