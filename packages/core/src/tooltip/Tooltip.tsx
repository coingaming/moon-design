import React, {useEffect, useRef, useState} from 'react';
import Content from './styles/Content';
import Wrapper from './styles/Wrapper';

const Tooltip:React.FC<{
  content: React.ReactElement,
  children: React.ReactElement,
  position?: 'top' | 'bottom' | 'left' | 'right',
  show?: boolean,
  fixed?: boolean,
}> = ({ content, show, position, children, fixed }) => {
  const [wrapperRef, setWrapperRef] = useState<any>(null);
  const [relativeRect, setRelativeRect] = useState<{ x: number, y: number, width: number, height: number } | undefined>(undefined);
  const [shouldShow, setShouldShow] = useState<boolean>(!!show);

  useEffect(() => {
    console.log('useEffect > wrapperRef?.getBoundingClientRect()', wrapperRef?.getBoundingClientRect())
    if (wrapperRef && !relativeRect) setRelativeRect(wrapperRef.getBoundingClientRect());
  }, [wrapperRef]);

  return (<Wrapper
    ref={element => setWrapperRef(element)}
    onMouseEnter={() => {
      if (fixed && !show) {
        setRelativeRect(wrapperRef.getBoundingClientRect());
        setShouldShow(true);
      }
    }}
    onMouseLeave={() => {
      if (fixed && !show) {
        setShouldShow(false);
      }
    }}
  >
    {children}
    <Content
      position={position ?? 'top'}
      relativeRect={relativeRect}
      show={shouldShow}
      fixed={fixed}
    >{content}</Content>
  </Wrapper>);
};

export default Tooltip;
