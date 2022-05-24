import React, { useState } from 'react';
import classNames from '../private/utils/classnames';
import ControlsChevronDown from './private/icons/ControlsChevronDown';
import ControlsChevronUp from './private/icons/ControlsChevronUp';
import type AccordionProps from './private/types/AccordionProps';
import type AccordionSizes from './private/types/AccordionSizes';

const determineSpacing = (isContentInside?: boolean, size?: AccordionSizes) => {
  if (isContentInside) {
    switch (size) {
      case 'xl':
        return 'p-4';
      case 'lg':
        return 'p-3';
      case 'sm':
        return 'p-1 pl-2';
      default:
        return 'p-2';
    }
  }
  return '';
};

const determineMargin = (size?: AccordionSizes) => {
  switch (size) {
    case 'xl':
      return 'mt-4';
    case 'lg':
      return 'mt-3';
    case 'sm':
      return 'mt-1';
    default:
      return 'mt-2';
  }
};

const determineHeight = (isContentInside?: boolean, size?: AccordionSizes) => {
  if (isContentInside) {
    return 'h-6';
  } else {
    switch (size) {
      case 'xl':
        return 'h-14';
      case 'lg':
        return 'h-12';
      case 'sm':
        return 'h-8';
      default:
        return 'h-10';
    }
  }
};

const determineFontSize = (size?: AccordionSizes) => {
  switch (size) {
    case 'sm':
      return `text-moon-10`;
    case 'lg':
      return `text-moon-14`;
    case 'xl':
      return `text-moon-16`;
    default:
      return `text-moon-12`;
  }
};

const Accordion = ({
  title,
  openByDefault,
  children,
  disableOpen,
  headerContent,
  withButton = true,
  isContentInside = true,
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
        determineSpacing(isContentInside, size)
      )}
    >
      <div
        className={classNames(
          'bg-gohan w-full flex items-center relative ',
          disableOpen ? 'cursor-not-allowed' : 'cursor-pointer',
          isContentInside ? 'bg-gohan' : 'transparent rounded-moon-s-sm',
          isContentInside ? '' : determineSpacing(true, size),
          determineHeight(isContentInside, size),
          size === 'sm' && 'uppercase'
        )}
        onClick={handleState}
      >
        {title && (
          <h3
            className={classNames(
              'font-medium flex-1',
              determineFontSize(size)
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
            {isOpen ? (
              <ControlsChevronDown
                className={classNames(
                  'text-bulma',
                  size === 'sm' ? 'text-[1.5rem]' : 'text-[2rem]'
                )}
              />
            ) : (
              <ControlsChevronUp
                className={classNames(
                  'text-bulma',
                  size === 'sm' ? 'text-[1.5rem]' : 'text-[2rem]'
                )}
              />
            )}
          </button>
        )}
      </div>

      <div
        className={classNames(
          'overflow-hidden rounded-moon-s-xs',
          isOpen ? 'h-full' : 'h-0',
          isOpen && determineMargin(size)
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
