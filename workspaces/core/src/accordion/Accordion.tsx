import React, { useRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import AccordionContext from './private/utils/AccordionContext';
import AccordionItemContext from './private/utils/AccordionItemContext';
import setFont from './private/utils/setFont';
import setMargin from './private/utils/setMargin';
import setPadding from './private/utils/setPadding';
import useAccordionContext from './private/utils/useAccordionContext';
import useAccordionItemContext from './private/utils/useAccordionItemContext';
import type AccordionProps from './private/types/AccordionProps';
import type AccordionRootProps from './private/types/AccordionRootProps';
import type ContentProps from './private/types/ContentProps';
import type HeaderProps from './private/types/HeaderProps';
import type ItemProps from './private/types/ItemProps';

const AccordionSingle = ({
  children,
  className,
  defaultValue,
}: AccordionRootProps) => (
  <RadixAccordion.Root
    type="single"
    collapsible
    className={className}
    defaultValue={defaultValue}
  >
    {children}
  </RadixAccordion.Root>
);

const AccordionMultiple = ({
  children,
  className,
  defaultValue = '',
}: AccordionRootProps) => (
  <RadixAccordion.Root
    type="multiple"
    className={className}
    defaultValue={[defaultValue]}
  >
    {children}
  </RadixAccordion.Root>
);

const AccordionRoot = ({
  children,
  itemSize = 'md',
  className,
  singleOpen = false,
  defaultValue,
}: AccordionProps) => {
  const RadixAccordionRoot = singleOpen ? AccordionSingle : AccordionMultiple;

  return (
    <RadixAccordionRoot
      className={mergeClassnames('flex w-full gap-2 flex-col', className)}
      defaultValue={defaultValue}
    >
      <AccordionContext.Provider value={{ itemSize }}>
        {children}
      </AccordionContext.Provider>
    </RadixAccordionRoot>
  );
};

const Item: React.FC<ItemProps> = ({
  children,
  value,
  className,
  disabled,
}) => {
  const { itemSize } = useAccordionContext('Accordion.Item');
  const contentElement = useRef<HTMLDivElement>(null);
  return (
    <RadixAccordion.Item
      value={value}
      className={mergeClassnames('w-full', className)}
      key={value}
      disabled={disabled}
    >
      <AccordionItemContext.Provider
        value={{ size: itemSize, contentElement, disabled }}
      >
        {children}
      </AccordionItemContext.Provider>
    </RadixAccordion.Item>
  );
};

const Header: React.FC<HeaderProps> = ({ children, className }) => (
  <RadixAccordion.Header
    className={mergeClassnames(
      'w-full rounded-moon-s-sm bg-gohan moon-open:rounded-b-none',
      className
    )}
  >
    {children}
  </RadixAccordion.Header>
);

const Button: React.FC<HeaderProps> = ({ children, className }) => {
  const { size, disabled } = useAccordionItemContext('Accordion.Button');
  return (
    <RadixAccordion.Trigger
      disabled={disabled}
      className={mergeClassnames(
        setPadding(true, size),
        setFont(size),
        'w-full justify-between flex items-center relative gap-1 cursor-pointer flex-1 font-medium',
        'text-bulma text-start data-[disabled]:cursor-not-allowed data-[disabled]:opacity-30 ',
        className
      )}
    >
      {children}
    </RadixAccordion.Trigger>
  );
};

const Content: React.FC<ContentProps> = ({ children, className }) => {
  const { contentElement } = useAccordionItemContext('Accordion.Content');
  return (
    <RadixAccordion.Content
      className={mergeClassnames(
        'moon-open:flex bg-gohan rounded-moon-s-sm rounded-t-none p-2 py-2 ps-3 pe-2 pt-0',
        'text-moon-14 w-full text-bulma',
        className
      )}
      ref={contentElement}
    >
      {children}
    </RadixAccordion.Content>
  );
};

const ContentOutside: React.FC<ContentProps> = ({ children, className }) => {
  const { size } = useAccordionItemContext('Accordion.ContentOutside');
  return (
    <RadixAccordion.Content
      className={mergeClassnames(
        setMargin(size),
        'moon-open:flex w-full text-bulma text-moon-14',
        className
      )}
    >
      {children}
    </RadixAccordion.Content>
  );
};

const Accordion = Object.assign(AccordionRoot, {
  Item,
  Header,
  Button,
  Content,
  ContentOutside,
});

export default Accordion;
