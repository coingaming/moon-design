import React from 'react';
import type AccordionProps from './private/type/AccordionProps';
import type ContentProps from './private/type/ContentProps';
import type SummaryProps from './private/type/SummaryProps';
import getSize from './private/utils/getSize';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const AccordionRoot = ({
  className,
  children,
  size,
  disabled,
  ...rest
}: AccordionProps) => (
  <details
    {...rest}
    className={mergeClassnames(
      'w-full [&[open]_summary]:rounded-b-none text-bulma',
      '[&[open]_svg]:rotate-180 [&[open]_svg]:text-bulma [&_svg]:transition [&_svg]:text-trunks',
      getSize(size),
      disabled && 'disabled cursor-not-allowed opacity-60',
      className
    )}
  >
    {children}
  </details>
);

const Summary = ({ className, children, ...rest }: SummaryProps) => (
  <summary
    className={mergeClassnames(
      'flex w-full justify-between items-center gap-1 rounded-moon-s-sm bg-goku list-none',
      'cursor-pointer font-medium [.disabled_&]:pointer-events-none',
      '[&_::-webkit-details-marker]:hidden',
      className
    )}
    {...rest}
  >
    {children}
  </summary>
);

const Content = ({ children, className, ...rest }: ContentProps) => (
  <div
    className={mergeClassnames(
      'content flex bg-goku p-2 rounded-moon-s-sm rounded-t-none w-full border-t text-moon-14',
      'border-beerus',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

const ContentOutside = ({ children, className, ...rest }: ContentProps) => (
  <div
    className={mergeClassnames(
      'content content-outside flex w-full text-moon-14',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

const Accordion = Object.assign(AccordionRoot, {
  Summary,
  Content,
  ContentOutside,
});

export default Accordion;
