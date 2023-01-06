import { useContext } from 'react';
import TooltipContext from './TooltipContext';

const useTooltipContext = (component: string) => {
  const context = useContext(TooltipContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Tooltip /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useTooltipContext);
    throw err;
  }
  return context;
};

export default useTooltipContext;
