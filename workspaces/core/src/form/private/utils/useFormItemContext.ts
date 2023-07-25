import { useContext } from 'react';
import ItemContext from './ItemContext';

const useFormItemContext = (component: string) => {
  const context = useContext(ItemContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing root <Form.Item /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useMenuItemContext);
    throw err;
  }
  return context;
};

export default useFormItemContext;
