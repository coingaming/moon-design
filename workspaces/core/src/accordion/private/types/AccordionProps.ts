import type AccordionRootProps from './AccordionRootProps';
import type AccordionSizes from './AccordionSizes';

type AccordionProps = AccordionRootProps & {
  itemSize?: AccordionSizes;
  singleOpen?: boolean;
  value?: string[];
  onValueChange?(value: string[]): void;
};

export default AccordionProps;
