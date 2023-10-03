import React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import type AccordionRootProps from './types/AccordionRootProps';

const AccordionMultiple = ({
  children,
  className,
  defaultValue = '',
  value,
  onValueChange,
}: AccordionRootProps) => (
  <RadixAccordion.Root
    type="multiple"
    className={className}
    defaultValue={[defaultValue]}
    value={value}
    onValueChange={onValueChange}
  >
    {children}
  </RadixAccordion.Root>
);

export default AccordionMultiple;
