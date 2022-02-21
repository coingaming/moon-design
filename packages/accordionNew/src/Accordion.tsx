import React, { useState } from 'react';
import { Heading } from '@heathmont/moon-components';
import { ControlsChevronUp, ControlsChevronDown } from '@heathmont/moon-icons';
import AccordionContent from './styles/AccordionContent';
import AccordionHeader from './styles/AccordionHeader';
import AccordionToggle from './styles/AccordionToggle';
import AccordionWrapper from './styles/AccordionWrapper';
import ChildrenWrapper from './styles/ChildrenWrapper';

type Size = 'small' | 'medium' | 'large';

type Props = {
  title: string;
  openByDefault?: boolean;
  children?: React.ReactNode;
  withButton?: boolean;
  disableOpen?: boolean;
  headerContent?: React.ReactNode;
  size?: Size;
};

const Accordion = ({
  title,
  openByDefault,
  children,
  withButton = true,
  disableOpen,
  headerContent,
}: Props) => {
  const [isOpen, setIsOpen] = useState(openByDefault);

  function handleState() {
    if (!disableOpen) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <AccordionWrapper>
      <AccordionHeader>
        {title && (
          <Heading size={16} onClick={handleState}>
            {title}
          </Heading>
        )}
        {headerContent && <React.Fragment>{headerContent}</React.Fragment>}
        {withButton && (
          <AccordionToggle
            type="button"
            onClick={handleState}
            disabled={disableOpen}
          >
            {isOpen ? (
              <ControlsChevronDown fontSize="2rem" color="bulma.100" />
            ) : (
              <ControlsChevronUp fontSize="2rem" color="bulma.100" />
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
