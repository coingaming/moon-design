import React, {useRef, useState} from 'react';
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

  return (<Wrapper
    ref={element => setWrapperRef(element)}
  >
    {children}
    <Content
      position={position ?? 'top'}
      relativeRect={wrapperRef?.getBoundingClientRect()}
      show={fixed || show}
      fixed={fixed}
    >{content}</Content>
  </Wrapper>);
};

export default Tooltip;
