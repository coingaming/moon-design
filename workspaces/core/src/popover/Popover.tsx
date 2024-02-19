import React, { useEffect } from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { usePopper } from 'react-popper';
import type CallableChildren from './private/types/CallableChildren';
import type GroupProps from './private/types/GroupProps';
import type PanelProps from './private/types/PanelProps';
import type PopoverRootProps from './private/types/PopoverRootProps';
import PopoverContext from './private/utils/PopoverContext';
import usePopoverContext from './private/utils/usePopoverContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import useRegisterChild from '../private/utils/useRegisterChild';

const PopoverRoot = ({
  children,
  position = 'bottom',
  className,
  autoPositionDisable = false,
}: PopoverRootProps) => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>();
  const [popperEl, setPopperEl] = React.useState<HTMLElement | null>();
  const [arrowEl, setArrowEl] = React.useState<HTMLElement | null>(null);
  const { state, registerChild } = useRegisterChild();
  const isArrow = state.childrens?.find((name) => name === 'Arrow');
  const offset = isArrow ? 16 : 8;

  const defaultModifiers = [
    {
      name: 'offset',
      options: {
        offset: [0, offset],
      },
    },
    { name: 'arrow', options: { element: arrowEl } },
  ];

  const modifiers = autoPositionDisable
    ? [
        ...defaultModifiers,
        {
          name: 'flip',
          options: {
            fallbackPlacements: [],
          },
        },
      ]
    : defaultModifiers;

  let { styles, attributes } = usePopper(anchorEl, popperEl, {
    placement: position,
    modifiers: modifiers,
  });
  const states = {
    popper: {
      styles: styles,
      attributes: attributes,
      setAnchor: setAnchorEl,
      setPopper: setPopperEl,
      setArrow: setArrowEl,
    },
  };
  const childrens =
    typeof children !== 'function' ? React.Children.toArray(children) : [];
  const callableChildren =
    typeof children === 'function' && (children as CallableChildren);
  return (
    <PopoverContext.Provider value={{ ...states, ...state, registerChild }}>
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

const Trigger = ({
  children,
  role = 'button',
  ...rest
}: {
  children?: React.ReactNode;
  role?: string;
}) => {
  const { popper } = usePopoverContext('Popover.Trigger');
  return (
    <HeadlessPopover.Button
      as={'div'}
      ref={popper?.setAnchor}
      role={role}
      {...rest}
    >
      {children}
    </HeadlessPopover.Button>
  );
};

const Panel = ({ children, className, isStatic }: PanelProps) => {
  const { popper, childrens: registerChildrens } =
    usePopoverContext('Popover.Trigger');
  const isArrow = registerChildrens?.find((name) => name === 'Arrow');
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
        isArrow && 'shadow-none drop-shadow-[0_0_1px_rgba(0,0,0,0.4)]',
        'focus:outline-none',
        className && className
      )}
      static={isStatic}
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

const Arrow = ({ className }: { className?: string }) => {
  const { popper, registerChild } = usePopoverContext('Popover.Arrow');
  useEffect(() => {
    registerChild && registerChild('Arrow');
  }, []);
  const popperAtr = popper?.attributes?.popper;
  const placement = popperAtr ? popperAtr['data-popper-placement'] : 'bottom';
  return (
    <div
      className={mergeClassnames(
        "[&[data-placement='top']]:-bottom-[5px] [&[data-placement='top-start']]:-bottom-[5px] [&[data-placement='top-end']]:-bottom-[5px]",
        "[&[data-placement='bottom']]:-top-[5px] [&[data-placement='bottom-start']]:-top-[5px] [&[data-placement='bottom-end']]:-top-[5px]",
        "[&[data-placement='right']]:-left-[5px] [&[data-placement='right-start']]:-left-[5px] [&[data-placement='right-end']]:-left-[5px]",
        "[&[data-placement='left']]:-right-[5px] [&[data-placement='left-start']]:-right-[5px] [&[data-placement='left-end']]:-right-[5px]",
        className
      )}
      ref={popper?.setArrow}
      style={popper?.styles?.arrow}
      data-placement={placement}
    >
      <div className="block relative rotate-45 w-3 h-3 rounded-sm bg-goku" />
    </div>
  );
};

const Group = ({ children, className }: GroupProps) => (
  <HeadlessPopover.Group className={className}>
    {children}
  </HeadlessPopover.Group>
);

const Popover = Object.assign(PopoverRoot, { Trigger, Panel, Group, Arrow });

export default Popover;
