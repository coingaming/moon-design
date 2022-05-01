import React from 'react';
import Content from './styles/Content';
import Wrapper from './styles/Wrapper';

const Tooltip:React.FC<{
  content: React.ReactElement,
  children: React.ReactElement,
  position?: 'top' | 'bottom' | 'left' | 'right',
  show?: boolean,
  fixed?: boolean,
}> = ({ content, show, position, children, fixed }) => {
  //const contentRef = React.useRef(null);
  //console.log('contentRef', contentRef)
  return (<Wrapper>
    <div /*ref={contentRef}*/>{children}</div>
    <Content
      position={position ?? 'top'}
      //relativeRect={contentRef?.current?.getBoundingClientRect()}
      show={show}
      fixed={fixed}
    >{content}</Content>
  </Wrapper>);
};

export default Tooltip;
