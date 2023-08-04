import { useContext } from 'react';
import FormContext from './FormContext';

const useFormContext = (component: string) => {
  const context = useContext(FormContext);
  if (context === null) {
    const err = new Error(`<${component}> is missing root <Form /> component.`);
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useMenuItemContext);
    throw err;
  }
  return context;
};

export default useFormContext;
