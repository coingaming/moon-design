import { createContext } from "react";
import type DropdownState from "../types/DropdownState";

const DropdownContext = createContext<DropdownState>({});
DropdownContext.displayName = 'DropdownContext';

export default DropdownContext