import React, { useState } from 'react';
import { Heading } from '@heathmont/moon-core';
import { ControlsChevronDown, ControlsChevronUp } from '@heathmont/moon-icons';
import {
  AccordionWrapper,
  AccordionHeader,
  AccordionContent,
  ChildrenWrapper,
  AccordionToggle,
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
        {title && <Heading onClick={handleState}>{title}</Heading>}
        {headerContent && <React.Fragment>{headerContent}</React.Fragment>}
        {withArrow && (
          <AccordionToggle
            type="button"
            onClick={handleState}
            disabled={disableOpen}
          >
            {isOpen ? (
              <ControlsChevronUp fontSize="2rem" color="bulma.100" />
            ) : (
              <ControlsChevronDown fontSize="2rem" color="bulma.100" />
            )}
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
