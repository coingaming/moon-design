import React, { createContext, useContext, useRef } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import AccordionItemState from './private/types/AccordionItemState';
import AccordionProps from './private/types/AccordionProps';
import AccordionRootProps from './private/types/AccordionRootProps';
import AccordionSizes from './private/types/AccordionSizes';
import ButtonProps from './private/types/ButtonProps';
import ItemProps from './private/types/ItemProps';
import setFont from './private/utils/setFont';
import setMargin from './private/utils/setMargin';
import setPadding from './private/utils/setPadding';

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

const AccordionContext = createContext<{ itemSize?: AccordionSizes }>({});
AccordionContext.displayName = 'AccordionContext';

const useAccordionContext = (component: string) => {
  const context = useContext(AccordionContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Accordion /> component.`
    );
    throw err;
  }
  return context;
};

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

const AccordionItemContext = createContext<AccordionItemState>({});
AccordionItemContext.displayName = 'AccordionItemContext';

const useAccordionItemContext = (component: string) => {
  const context = useContext(AccordionItemContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Accordion.Item /> component.`
    );
    throw err;
  }
  return context;
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

type HeaderProps = {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const { contentElement } = useAccordionItemContext('Accordion.Header');
  return (
    <RadixAccordion.Header
      className={mergeClassnames(
        'w-full rounded-moon-s-sm bg-gohan',
        contentElement?.current && 'moon-open:rounded-b-none',
        className
      )}
    >
      {children}
    </RadixAccordion.Header>
  );
};

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  const { size, disabled } = useAccordionItemContext('Accordion.Button');
  return (
    <RadixAccordion.Trigger
      disabled={disabled}
      className={mergeClassnames(
        setPadding(true, size),
        setFont(size),
        'w-full justify-between flex items-center relative gap-1 cursor-pointer flex-1 font-medium text-bulma text-start',
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-30 ',
        className
      )}
    >
      {children}
    </RadixAccordion.Trigger>
  );
};

type ContentProps = {
  className?: string;
  children?: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ children, className }) => {
  const { contentElement } = useAccordionItemContext('Accordion.Content');
  return (
    <RadixAccordion.Content
      className={mergeClassnames(
        'bg-gohan rounded-moon-s-sm rounded-t-none p-2 py-2 ps-3 pe-2 pt-0 text-moon-14 overflow-hidden w-full text-bulma',
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
        'overflow-hidden w-full text-bulma text-moon-14',
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
