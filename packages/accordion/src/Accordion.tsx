import React, { useState } from 'react';
import { Heading } from '@heathmont/moon-components';
import { IconChevronDown, IconChevronUp } from '@heathmont/moon-assets';

import {
  AccordionWrapper,
  AccordionHeader,
  AccordionContent,
  ChildrenWrapper,
  AccordionToggle,
  Divider,
} from './private/layout';

type Props = {
  title: string;
  openByDefault: boolean;
  children: React.ReactNode;
  withArrow: boolean;
  disableOpen: boolean;
  headerContent: React.ReactNode;
};

const Accordion = ({
  title,
  openByDefault = false,
  children,
  withArrow = true,
  disableOpen = false,
  headerContent,
  ...props
}: Props) => {
  const [isOpen, setIsOpen] = useState(openByDefault);

  function handleState() {
    if (!disableOpen) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <AccordionWrapper {...props}>
      <AccordionHeader disabled={disableOpen}>
        {title && (
          <Heading size={16} onClick={handleState}>
            {title}
          </Heading>
        )}
        {headerContent && (
          <React.Fragment>
            {headerContent}
            <Divider />
          </React.Fragment>
        )}
        {withArrow && (
          <AccordionToggle
            type="button"
            onClick={handleState}
            disabled={disableOpen}
          >
            {isOpen ? <IconChevronUp /> : <IconChevronDown />}
          </AccordionToggle>
        )}
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;
