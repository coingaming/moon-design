import React, {
  createContext,
  useContext,
  Fragment,
  useRef,
  ReactNode,
} from 'react';
import { Popover as HeadlessPopover } from '@headlessui/react';
import { usePopper } from 'react-popper';

type Placement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';
type PopoverRootProps = {
  position?: Placement;
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

const PopoverRoot: React.FC<PopoverRootProps> = ({ children, position }) => {
  const referenceElement = useRef(null);
  const popperElement = useRef(null);

  const [anchorEl, setAnchorEl] = React.useState(referenceElement.current);
  const [popperElementRef, setPopperElementRef] = React.useState(
    popperElement.current
  );

  let { styles, attributes } = usePopper(anchorEl, popperElementRef, {
    placement: position,
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
      <div className="w-full">
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
//Popover
const Popover = Object.assign(PopoverRoot, { Trigger });

export default Popover;
