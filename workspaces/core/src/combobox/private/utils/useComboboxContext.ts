import { createContext, useContext } from "react";
import type ComboboxState from "../types/ComboboxState";

const ComboboxContext = createContext<ComboboxState>({});
ComboboxContext.displayName = 'ComboboxContext';

const useComboboxContext = (component: string) => {
  const context = useContext(ComboboxContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Combobox /> component.`
    );
    throw err;
  }
  return context;
};

export { useComboboxContext, ComboboxContext }
