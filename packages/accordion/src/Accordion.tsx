import React, { useState } from 'react';
import { Heading } from '@heathmont/moon-components';

import {
  AccordionWrapper,
  AccordionHeader,
  AccordionContent,
  ChildrenWrapper,
} from './private/layout';

type Props = {
  title: string;
  openByDefault: boolean;
  children: React.ReactNode;
};

const Accordion = ({ title, openByDefault = false, children }: Props) => {
  const [isOpen, setIsOpen] = useState(openByDefault);

  return (
    <AccordionWrapper>
      <AccordionHeader>
        {title && (
          <Heading size={16} onClick={() => setIsOpen(!isOpen)}>
            {title}
          </Heading>
        )}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;
