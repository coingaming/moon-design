import { useContext } from 'react';
import PaginationContext from '../types/PaginationContext';

const usePaginationContext = (component: string) => {
  const context = useContext(PaginationContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Pagination /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, usePaginationContext);
    throw err;
  }
  return context;
};

export default usePaginationContext;
