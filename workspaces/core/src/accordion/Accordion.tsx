import React, { useState } from 'react';
import classNames from '../private/utils/classnames';
import ControlsChevronDown from './private/icons/ControlsChevronDown';
import ControlsChevronUp from './private/icons/ControlsChevronUp';

// import Size from './private/Size';

type Props = {
  title: string;
  openByDefault?: boolean;
  children?: React.ReactNode;
  disableOpen?: boolean;
  headerContent?: React.ReactNode;
  size?: string;
  withButton?: boolean;
  isContentInside?: boolean;
};

const determineSpacing = (
  isContentInside?: boolean,
  size?: string,
  isMargin?: boolean
) => {
  if (isContentInside) {
    switch (size) {
      case 'large':
        return isMargin ? 'mt-3' : 'p-3';
      case 'medium':
        return isMargin ? 'mt-2' : 'p-2';
      case 'small':
        return isMargin ? 'mt-1' : 'p-1 pl-2';
      default:
        return isMargin ? 'mt-4' : 'p-4';
    }
  }
  return '';
};

const determineHeight = (isContentInside?: boolean, size?: string) => {
  if (isContentInside) {
    return 'h-6';
  } else {
    switch (size) {
      case 'large':
        return 'h-12';
      case 'medium':
        return 'h-10';
      case 'small':
        return 'h-8';
      default:
        return 'h-14';
    }
  }
};

const determineFontSize = (size?: string) => {
  switch (size) {
    case 'large':
      return `text-[0.875rem]`;
    case 'medium':
      return `text-[0.75rem]`;
    case 'small':
      return `text-[0.625rem]`;
    default:
      return `text-[1rem]`;
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
  size = 'xlarge',
}: Props) => {
  const [isOpen, setIsOpen] = useState(openByDefault);

  function handleState() {
    if (!disableOpen) {
      setIsOpen(!isOpen);
    }
  }

  // '> *:first-child': {
  //   flex: 1,
  // },

  return (
    <div //AccordionWrapper
      className={classNames(
        'w-full rounded-moon-s-md h-max flex flex-col items-center',
        isContentInside ? 'bg-gohan' : 'transparent',
        determineSpacing(isContentInside, size)
      )}
    >
      <div //AccordionHeader
        className={classNames(
          'bg-gohan w-full flex items-center relative ',
          disableOpen ? 'cursor-not-allowed' : 'cursor-pointer',
          isContentInside ? 'bg-gohan' : 'transparent rounded-moon-s-md',
          isContentInside ? '' : determineSpacing(true, size),
          determineHeight(isContentInside, size),
          size === 'small' && 'uppercase'
        )}
      >
        {title && (
          <h3 //Heading
            className={classNames(
              'text-moon-16 font-medium flex-1',
              determineFontSize(size)
            )}
            onClick={handleState}
          >
            {title}
          </h3>
        )}
        {headerContent && <React.Fragment>{headerContent}</React.Fragment>}
        {withButton && (
          <button //AccordionToggle
            type="button"
            onClick={handleState}
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
                  size === 'small' ? 'text-[1.5rem]' : 'text-[2rem]'
                )}
              />
            ) : (
              <ControlsChevronUp
                className={classNames(
                  'text-bulma',
                  size === 'small' ? 'text-[1.5rem]' : 'text-[2rem]'
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
          isOpen && determineSpacing(isContentInside, size, true)
        )}
      >
        <div className={classNames('block', determineSpacing(true, size))}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
