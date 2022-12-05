import React, { createContext, useContext } from 'react';

const BottomsheetContext = createContext<{
  size?: 'sm' | 'md' | 'lg' | string;
  registerChild?: (child: string) => () => void;
  bottomsheetChildren?: any[];
  draghandleRef?: React.RefObject<HTMLDivElement>;
  dispatch: any;
}>({ dispatch: () => {} });

BottomsheetContext.displayName = 'BottomsheetContext';

export const useBottomsheetContext = (component: string) => {
  const context = useContext(BottomsheetContext);
  if (context === null) {
    throw new Error(
      `<${component}> is missing a parent <Bottomsheet /> component`
    );
  }
  return context;
};

export default BottomsheetContext;
