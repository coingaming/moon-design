import { useContext } from "react";
import ComboboxContext from "./ComboboxContext";

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

export default useComboboxContext
