import React, {
  createContext,
  useContext,
  Fragment,
  useRef,
  ReactNode,
  useEffect,
} from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { usePopper } from 'react-popper';
import classNames from '../private/utils/classnames';

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
  modifiers: [
    {
      name: 'flip';
      enabled: false;
    }
  ];
};

type CallableChildren = (data: { open?: boolean }) => ReactNode;

type PopoverState = {
  pooper?: {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    referenceElement: React.MutableRefObject<null>;
    popperElement: React.MutableRefObject<null>;
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
  const referenceElement = useRef(null);
  const popperElement = useRef(null);

  const [anchorEl, setAnchorEl] = React.useState(referenceElement.current);
  const [popperElementRef, setPopperElementRef] = React.useState(
    popperElement.current
  );

  useEffect(() => {
    setAnchorEl(referenceElement.current);
    setPopperElementRef(popperElement.current);
  });

  let { styles, attributes } = usePopper(anchorEl, popperElementRef, {
    placement: position,
    modifiers: [
      {
        name: 'flip',
        enabled: false,
      },
    ],
  });

  const states = {
    pooper: {
      styles: styles,
      attributes: attributes,
      referenceElement: referenceElement,
      popperElement: popperElement,
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
  const { pooper } = usePopoverContext('Popover.Trigger');
  return (
    <div ref={pooper?.referenceElement}>
      <HeadlessPopover.Button as={Fragment}>
        <div>{children}</div>
      </HeadlessPopover.Button>
    </div>
  );
};

//Popover.Panel
type PanelProps = {
  menuWidth?: string;
};
const Panel: React.FC<PanelProps> = ({ children, menuWidth }) => {
  const { pooper } = usePopoverContext('Popover.Trigger');
  return (
    <div
      ref={pooper?.popperElement}
      style={pooper?.styles?.popper}
      {...pooper?.attributes?.popper}
      className={classNames(
        menuWidth ? menuWidth : 'w-[18.75rem]',
        'inline-block m-2 z-[999999]'
      )}
    >
      <HeadlessPopover.Panel
        className={classNames(
          'w-full p-1 rounded-moon-i-md box-border bg-gohan shadow-moon-lg overflow-y-auto',
          'focus:outline-none'
        )}
      >
        {children}
      </HeadlessPopover.Panel>
    </div>
  );
};

//Popover
const Popover = Object.assign(PopoverRoot, { Trigger, Panel });

export default Popover;
