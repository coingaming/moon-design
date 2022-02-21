import React, { useState } from 'react';
import { Heading } from '@heathmont/moon-components';
import { ControlsChevronUp, ControlsChevronDown } from '@heathmont/moon-icons';
import AccordionContent from './styles/AccordionContent';
import AccordionHeader from './styles/AccordionHeader';
import AccordionToggle from './styles/AccordionToggle';
import AccordionWrapper from './styles/AccordionWrapper';
import ChildrenWrapper from './styles/ChildrenWrapper';

export type Size = 'small' | 'medium' | 'large' | 'xlarge';

type Props = {
  title: string;
  openByDefault?: boolean;
  children?: React.ReactNode;
  disableOpen?: boolean;
  headerContent?: React.ReactNode;
  size?: Size;
  withButton?: boolean;
  isContentInside?: boolean;
};

const Accordion = ({
  title,
  openByDefault,
  children,
  disableOpen,
  headerContent,
  withButton = true,
  isContentInside = true,
  size = 'xlarge',
}: Props) => {
  const [isOpen, setIsOpen] = useState(openByDefault);

  function handleState() {
    if (!disableOpen) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <AccordionWrapper isContentInside={isContentInside} size={size}>
      <AccordionHeader isContentInside={isContentInside} size={size}>
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
      <AccordionContent
        isOpen={isOpen}
        isContentInside={isContentInside}
        size={size}
      >
        <ChildrenWrapper isContentInside={isContentInside} size={size}>
          {children}
        </ChildrenWrapper>
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;
