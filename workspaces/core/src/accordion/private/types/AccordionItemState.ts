import { MutableRefObject } from "react";
import type AccordionSizes from "./AccordionSizes";

type AccordionItemState = {
  size?: AccordionSizes;
  contentElement?: MutableRefObject<HTMLDivElement | null>;
  disabled?: boolean;
}

export default AccordionItemState;