import { useContext } from 'react';
import TabsContext from './TabsContext';

const useTabsContext = (component: string) => {
  const context = useContext(TabsContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Tabs /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useTabsContext);
    throw err;
  }
  return context;
};

export default useTabsContext;
