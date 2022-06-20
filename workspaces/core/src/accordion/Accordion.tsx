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
  isRtl,
  size = 'md',
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
        isContentInside ? 'bg-gohan' : 'transparent',
        setPadding(isContentInside, size)
      )}
    >
      <div
        className={classNames(
          'bg-gohan w-full flex items-center relative gap-1',
          disableOpen ? 'cursor-not-allowed' : 'cursor-pointer',
          isContentInside ? 'bg-gohan' : 'transparent rounded-moon-s-sm',
          isContentInside ? '' : setPadding(true, size)
        )}
        onClick={handleState}
      >
        {title && (
          <h3
            className={classNames(
              'flex-1 font-medium text-bulma',
              setFont(size)
            )}
          >
            {title}
          </h3>
        )}
        {headerContent && <React.Fragment>{headerContent}</React.Fragment>}
        {withButton && (
          <button
            type="button"
            disabled={disableOpen}
            className={classNames(
              'align-middle text-[0.5rem] leading-none no-underline text-trunks border-transparent bg-gohan',
              disableOpen ? 'cursor-not-allowed' : 'cursor-pointer'
            )}
          >
            <ControlsChevronRight
              className={classNames(
                'text-trunks text-moon-24 transition-transform transition-200',
                setOpenIcon({ isOpen, isRtl })
              )}
            />
          </button>
        )}
      </div>
      <div
        className={classNames(
          'overflow-hidden w-full text-bulma',
          isOpen ? 'h-full' : 'h-0',
          isOpen && setMargin(size)
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
