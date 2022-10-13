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
  disabled,
  headerContent,
  withButton = true,
  isContentInside = true,
  size = 'md',
  bgColor = 'bg-gohan',
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(openByDefault);
  function handleState() {
    if (!disabled) {
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
          disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer',
          isContentInside ? bgColor : 'transparent rounded-moon-s-sm',
          !isContentInside && setPadding(true, size)
        )}
        onClick={handleState}
        aria-expanded={isOpen || false}
        {...(disabled && { disabled })}
      >
        {title && (
          <span
            role="heading"
            aria-level={3}
            className={classNames(
              'flex-1 font-medium text-bulma text-start',
              setFont(size)
            )}
          >
            {title}
          </span>
        )}
        {headerContent && <React.Fragment>{headerContent}</React.Fragment>}
        {withButton && (
          <span
            aria-hidden="true"
            className="flex items-center justify-center w-6 h-6"
          >
            <ControlsChevronRight
              className={classNames(
                'text-trunks text-moon-16 transition-transform transition-200',
                setOpenIcon(isOpen)
              )}
            />
          </span>
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
