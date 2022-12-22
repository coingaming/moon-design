import React, { createContext, useContext, ReactNode } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { usePopper } from 'react-popper';
import mergeClassnames from '../utils/mergeClassnames';

type Placement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end'
  | 'top'
  | 'bottom'
  | 'right'
  | 'left';
type PopoverRootProps = {
  position?: Placement;
};

type CallableChildren = (data: {
  open?: boolean;
  close?: (
    focusableElement?:
      | HTMLElement
      | React.MutableRefObject<HTMLElement | null>
      | undefined
  ) => void;
}) => ReactNode;

type PopoverState = {
  popper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<
      React.SetStateAction<HTMLElement | null | undefined>
    >;
  };
};

const PopoverContext = createContext<PopoverState>({});
PopoverContext.displayName = 'PopoverContext';

const usePopoverContext = (component: string) => {
  const context = useContext(PopoverContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Popover /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, usePopoverContext);
    throw err;
  }
  return context;
};

const PopoverRoot: React.FC<PopoverRootProps> = ({
  children,
  position = 'bottom',
}) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>();
  const [popperEl, setPopperEl] = React.useState<HTMLElement | null>();

  let { styles, attributes } = usePopper(anchorEl, popperEl, {
    placement: position,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const states = {
    popper: {
      styles: styles,
      attributes: attributes,
      setAnchor: setAnchorEl,
      setPopper: setPopperEl,
    },
  };

  const childrens = React.Children.toArray(children);
  const callableChildren =
    typeof children === 'function' && (children as CallableChildren);
  return (
    <PopoverContext.Provider value={states}>
      <div>
        <HeadlessPopover>
          {({ open }) => (
            <div className="relative">
              {typeof children === 'function'
                ? callableChildren && callableChildren({ open })
                : childrens.map((ch) => ch)}
            </div>
          )}
        </HeadlessPopover>
      </div>
    </PopoverContext.Provider>
  );
};

//Popover.Trigger
const Trigger: React.FC = ({ children }) => {
  const { popper } = usePopoverContext('Popover.Trigger');
  return (
    <HeadlessPopover.Button as={'div'} ref={popper?.setAnchor}>
      <div>{children}</div>
    </HeadlessPopover.Button>
  );
};

//Popover.Panel
type PanelProps = {
  className?: string;
};
const Panel: React.FC<PanelProps> = ({ children, className }) => {
  const { popper } = usePopoverContext('Popover.Trigger');
  const childrens = React.Children.toArray(children);
  const callableChildren =
    typeof children === 'function' && (children as CallableChildren);
  return (
    <HeadlessPopover.Panel
      ref={popper?.setPopper}
      style={popper?.styles?.popper}
      {...popper?.attributes?.popper}
      className={mergeClassnames(
        'w-72 z-[999999] p-1 rounded-moon-i-md box-border bg-gohan shadow-moon-lg overflow-y-auto focus:outline-none',
        className && className
      )}
    >
      {({ open, close }) => (
        <div className="relative">
          {typeof children === 'function'
            ? callableChildren && callableChildren({ open, close })
            : childrens.map((ch) => ch)}
        </div>
      )}
    </HeadlessPopover.Panel>
  );
};

type GroupProps = {
  className?: string;
};
const Group: React.FC<GroupProps> = ({ children, className }) => (
  <HeadlessPopover.Group className={className}>
    {children}
  </HeadlessPopover.Group>
);

//Popover
const Popover = Object.assign(PopoverRoot, { Trigger, Panel, Group });

export default Popover;
