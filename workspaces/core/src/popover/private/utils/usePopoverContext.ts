import { useContext } from 'react';
import PopoverContext from './PopoverContext';

const usePopoverContext = (component: string) => {
  const context = useContext(PopoverContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Popover /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, usePopoverContext);
    throw err;
  }
  return context;
};

export default usePopoverContext;
