import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { ColorNames } from '@heathmont/moon-themes';

import { PopoverContainer } from './private/layout';

type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'auto'
  | 'auto-start'
  | 'auto-end';

type Props = {
  defaultState?: boolean;
  closeOnClickOutside?: boolean;
  placement?: Placement;
  content: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onVisibilityChange?: (open: boolean) => void;
  padding?: number;
  backgroundColor?: ColorNames;
};

const Popover: React.FC<Props> = ({
  defaultState = false,
  closeOnClickOutside = true,
  placement = 'top',
  content,
  children,
  className,
  isOpen = false,
  onVisibilityChange,
  padding,
  backgroundColor,
}) => {
  const [visible, setVisible] = useState(defaultState || isOpen);

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (typeof onVisibilityChange === 'function') {
      onVisibilityChange(visible);
    }
  }, [visible]);

  function handleChildClick(e: any) {
    e.preventDefault();

    setVisible(!visible);
  }

  return (
    <Tippy
      placement={placement}
      visible={visible}
      zIndex={999999}
      interactive
      onClickOutside={() => {
        if (closeOnClickOutside) {
          setVisible(false);
        }
      }}
      render={(attrs) => (
          <div className="box" tabIndex={-1} {...attrs}>
            <PopoverContainer
              className={className}
              padding={padding}
              backgroundColor={backgroundColor}
            >
              {content}
            </PopoverContainer>
          </div>
      )}
    >
      <div
        role="menu"
        tabIndex={-1}
        onClick={handleChildClick}
        onKeyDown={handleChildClick}
      >
        {children}
      </div>
    </Tippy>
  );
};

export default Popover;
