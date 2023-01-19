import React, { createContext, useContext } from 'react';
import type Size from './types/Size';

const BottomSheetContext = createContext<{
  size?: Size;
  registerChild?: (child: string) => () => void;
  bottomSheetChildren?: any[];
  draghandleRef?: React.RefObject<HTMLDivElement>;
  dispatch: any;
}>({ dispatch: () => {} });

BottomSheetContext.displayName = 'BottomSheetContext';

export const useBottomSheetContext = (component: string) => {
  const context = useContext(BottomSheetContext);
  if (context === null) {
    throw new Error(
      `<${component}> is missing a parent <BottomSheet /> component`
    );
  }
  return context;
};

export default BottomSheetContext;
