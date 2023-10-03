import React from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { usePopper } from 'react-popper';
import type CallableChildren from './private/types/CallableChildren';
import type GroupProps from './private/types/GroupProps';
import type PanelProps from './private/types/PanelProps';
import type PopoverRootProps from './private/types/PopoverRootProps';
import PopoverContext from './private/utils/PopoverContext';
import usePopoverContext from './private/utils/usePopoverContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const PopoverRoot = ({
  children,
  position = 'bottom',
  className,
}: PopoverRootProps) => {
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
  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];
  const callableChildren =
    typeof children === 'function' && (children as CallableChildren);
  return (
    <PopoverContext.Provider value={states}>
      <HeadlessPopover className={mergeClassnames('relative', className)}>
        {({ open }) => (
          <>
            {typeof children === 'function'
              ? callableChildren && callableChildren({ open })
              : childrens.map((ch) => ch)}
          </>
        )}
      </HeadlessPopover>
    </PopoverContext.Provider>
  );
};

const Trigger = ({ children, ...rest }: { children?: React.ReactNode }) => {
  const { popper } = usePopoverContext('Popover.Trigger');
  return (
    <HeadlessPopover.Button
      as={'div'}
      ref={popper?.setAnchor}
      role="button"
      {...rest}
    >
      {children}
    </HeadlessPopover.Button>
  );
};

const Panel = ({ children, className }: PanelProps) => {
  const { popper } = usePopoverContext('Popover.Trigger');
  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];
  const callableChildren =
    typeof children === 'function' && (children as CallableChildren);
  return (
    <HeadlessPopover.Panel
      ref={popper?.setPopper}
      style={popper?.styles?.popper}
      {...popper?.attributes?.popper}
      className={mergeClassnames(
        'w-72 z-[999999] rounded-moon-s-md box-border bg-goku shadow-moon-lg overflow-y-auto',
        'focus:outline-none',
        className && className
      )}
    >
      {({ open, close }) => (
        <>
          {typeof children === 'function'
            ? callableChildren && callableChildren({ open, close })
            : childrens.map((ch) => ch)}
        </>
      )}
    </HeadlessPopover.Panel>
  );
};

const Group = ({ children, className }: GroupProps) => (
  <HeadlessPopover.Group className={className}>
    {children}
  </HeadlessPopover.Group>
);

const Popover = Object.assign(PopoverRoot, { Trigger, Panel, Group });

export default Popover;
