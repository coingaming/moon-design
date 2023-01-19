import React from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { usePopper } from 'react-popper';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import PopoverContext from './private/utils/PopoverContext';
import usePopoverContext from './private/utils/usePopoverContext';
import type CallableChildren from './private/types/CallableChildren';
import type PanelProps from './private/types/PanelProps';
import type PopoverRootProps from './private/types/PopoverRootProps';

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

const Trigger: React.FC = ({ children }) => {
  const { popper } = usePopoverContext('Popover.Trigger');
  return (
    <HeadlessPopover.Button as={'div'} ref={popper?.setAnchor}>
      <div>{children}</div>
    </HeadlessPopover.Button>
  );
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
        'w-72 z-[999999] rounded-moon-s-md box-border bg-gohan shadow-moon-lg overflow-y-auto',
        'focus:outline-none',
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

const Group: React.FC<PanelProps> = ({ children, className }) => (
  <HeadlessPopover.Group className={className}>
    {children}
  </HeadlessPopover.Group>
);

const Popover = Object.assign(PopoverRoot, { Trigger, Panel, Group });

export default Popover;
