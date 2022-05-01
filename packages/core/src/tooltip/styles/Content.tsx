import React, {useEffect, useState} from "react";
import * as ReactDOM from 'react-dom';
import Position from "./Position";

const Content:React.FC<{
  children: React.ReactElement,
  position: 'top' | 'bottom' | 'left' | 'right',
  relativeRect?: { x: number, y: number, width: number, height: number },
  show?: boolean,
  fixed?: boolean
}> = ({ show, fixed, position, children, relativeRect }) => {
  const [existingRect, setExistingRect] = useState<{ x: number, y: number, width: number, height: number } | undefined>(undefined);
  const [portalRoot, setPortalRoot] = useState<HTMLBodyElement | null>(null);

  const component = (<Position
    position={position}
    show={show}
    fixedCoords={fixed && existingRect ? {
      x: existingRect?.x + (position === 'left' ? 0 : position === 'right' ? existingRect?.width + 5 : existingRect?.width / 2),
      y: existingRect?.y + (position === 'top' ? 0 : position === 'bottom' ? existingRect?.height : existingRect?.height / 2)
    } : null}
  >{children}</Position>);

  useEffect(() => {
    const rootElement = document.getElementsByTagName('body')[0];

    if (fixed && rootElement && !portalRoot) {
      setPortalRoot(rootElement);
    }
    if (fixed && relativeRect) {
      setExistingRect(relativeRect);
    }
  }, [relativeRect])

  if (fixed && existingRect && portalRoot) {
    return ReactDOM.createPortal(component, portalRoot);
  }

  return component;
};

export default Content;
