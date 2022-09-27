import React, { useState } from 'react';
import { ControlsChevronRight } from '@heathmont/moon-icons-tw';
import classNames from '../private/utils/classnames';
import setFont from './private/utils/setFont';
import setMargin from './private/utils/setMargin';
import setOpenIcon from './private/utils/setOpenIcon';
import setPadding from './private/utils/setPadding';
import type AccordionProps from './private/types/AccordionProps';

const Accordion = ({
  title,
  openByDefault,
  children,
  disableOpen,
  headerContent,
  withButton = true,
  isContentInside = true,
  size = 'md',
  bgColor = 'bg-gohan',
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(openByDefault);
  function handleState() {
    if (!disableOpen) {
      setIsOpen(!isOpen);
    }
  }
  return (
    <div
      className={classNames(
        'w-full rounded-moon-s-sm h-max flex flex-col items-center',
        isContentInside ? bgColor : 'transparent',
        setPadding(isContentInside, size)
      )}
    >
      <button
        type="button"
        className={classNames(
          bgColor,
          'flex items-center relative w-full gap-1',
          disableOpen ? 'cursor-not-allowed' : 'cursor-pointer',
          isContentInside ? bgColor : 'transparent rounded-moon-s-sm',
          !isContentInside && setPadding(true, size)
        )}
        onClick={handleState}
        aria-expanded={isOpen || false}
      >
        {title && (
          <h3
            className={classNames(
              'flex-1 font-medium text-bulma text-start',
              setFont(size)
            )}
          >
            {title}
          </h3>
        )}
        {headerContent && <React.Fragment>{headerContent}</React.Fragment>}
        {withButton && (
          <ControlsChevronRight
            className={classNames(
              'text-trunks text-moon-24 transition-transform transition-200',
              setOpenIcon(isOpen)
            )}
          />
        )}
      </button>
      <div
        className={classNames(
          'overflow-hidden w-full text-bulma transition-all',
          isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0',
          isOpen && setMargin(size)
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
