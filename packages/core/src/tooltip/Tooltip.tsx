import React, {useEffect, useState} from 'react';
import { Text } from '@heathmont/moon-core';
import Content from './styles/Content';
import Wrapper from './styles/Wrapper';

const Tooltip:React.FC<{
  children: React.ReactElement,
  text?: string,
  icon?: React.ReactElement,
  content?: React.ReactElement,
  position?: 'top' | 'bottom' | 'left' | 'right',
  show?: boolean,
  fixed?: boolean,
}> = ({
  content,
  text,
  icon,
  show,
  position,
  children,
  fixed = true
}) => {
  const [wrapperRef, setWrapperRef] = useState<any>(null);
  const [relativeRect, setRelativeRect] = useState<{ x: number, y: number, width: number, height: number } | undefined>(undefined);
  const [shouldShow, setShouldShow] = useState<boolean>(!!show);

  useEffect(() => {
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
    >
      { content ?? <Text size={12}>{text}</Text>}
    </Content>
  </Wrapper>);
};

export default Tooltip;
