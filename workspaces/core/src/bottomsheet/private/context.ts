import React, { createContext, useContext } from 'react';

const BottomSheetContext = createContext<{
  size?: 'sm' | 'md' | 'lg' | string;
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
