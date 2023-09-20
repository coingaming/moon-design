import React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import type AccordionRootProps from './types/AccordionRootProps';

const AccordionSingle = ({
  children,
  className,
  defaultValue,
}: AccordionRootProps) => (
  <RadixAccordion.Root
    type="single"
    collapsible
    className={className}
    defaultValue={defaultValue}
  >
    {children}
  </RadixAccordion.Root>
);

export default AccordionSingle;
