import { createContext } from "react";
import type ComboboxState from "../types/ComboboxState";

const ComboboxContext = createContext<ComboboxState>({});
ComboboxContext.displayName = 'ComboboxContext';

export default ComboboxContext
