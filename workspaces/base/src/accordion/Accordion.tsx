import React from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import setMargin from './private/utils/setMargin';
import setPadding from './private/utils/setPadding';
import type AccordionSizes from './private/type/AccordionSizes';

type AccordionProps = {
  className?: string;
  children?: React.ReactNode;
  size?: AccordionSizes;
  disabled?: boolean;
} & React.DetailedHTMLProps<
  React.DetailsHTMLAttributes<HTMLDetailsElement>,
  HTMLDetailsElement
>;

const AccordionRoot = ({
  className,
  children,
  size,
  disabled,
  ...rest
}: AccordionProps) => {
  return (
    <details
      {...rest}
      className={mergeClassnames(
        'flex w-full gap-2 flex-col [&[open]_svg]:rotate-180 [&[open]_summary]:rounded-b-none',
        '[&_.content]:flex',
        '[&_summary::-webkit-details-marker]:hidden',
        className,
        size === 'xl'
          ? '[&_summary_h3]:text-moon-16'
          : '[&_summary_h3]:text-moon-14',
        setPadding(size),
        setMargin(size),
        disabled && 'disabled cursor-not-allowed'
      )}
    >
      {children}
    </details>
  );
};

type SummaryProps = {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Summary = ({ className, children, ...rest }: SummaryProps) => {
  return (
    <summary
      className={mergeClassnames(
        'w-full rounded-moon-s-sm bg-gohan list-none cursor-pointer',
        '[.disabled_&]:pointer-events-none',
        className
      )}
      {...rest}
    >
      <h3
        className={mergeClassnames(
          'py-2 ps-3 pe-2',
          'text-moon-14',
          'w-full justify-between flex items-center relative gap-1 cursor-pointer flex-1 font-medium',
          'text-bulma text-start',
          '[.disabled_&]:select-none [.disabled_&]:opacity-30'
        )}
      >
        {children}
      </h3>
    </summary>
  );
};

type ContentProps = {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Content = ({ children, className, ...rest }: ContentProps) => {
  return (
    <div
      className={mergeClassnames(
        'content bg-gohan rounded-moon-s-sm rounded-t-none p-2 py-2 ps-3 pe-2 pt-0',
        'text-moon-14 w-full text-bulma border-t border-beerus',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const ContentOutside = ({ children, className }: ContentProps) => {
  return (
    <div
      className={mergeClassnames(
        'content content-out w-full text-bulma text-moon-14',
        className
      )}
    >
      {children}
    </div>
  );
};
const Accordion = Object.assign(AccordionRoot, {
  Summary,
  Content,
  ContentOutside,
});

export default Accordion;
