import React, {useEffect, useState} from 'react';
import {rem} from "@heathmont/moon-utils";
import styled from "styled-components";
import Text from '../text/Text';
import Content from './styles/Content';
import Wrapper from './styles/Wrapper';

const ContentWrapper = styled.div({
  display: 'flex',
  alignItems: 'center'
});
const IconWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: rem(4),
  marginRight: rem(12)
});

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
  const [relativeRect, setRelativeRect] = useState<{
    x: number,
    y: number,
    width: number,
    height: number
  } | undefined>(undefined);
  const [shouldShow, setShouldShow] = useState<boolean>(!!show);

  useEffect(() => {
    if (wrapperRef && !relativeRect) setRelativeRect(wrapperRef.getBoundingClientRect());
  }, [wrapperRef]);

  useEffect(() => {
    // If tooltip isn't persistently shown, hide it on window resize and scroll events
    if (!show) {
      const hideTooltip = () => setShouldShow(false);

      window.addEventListener("scroll", hideTooltip);
      window.addEventListener("resize", hideTooltip);

      return () => {
        window.removeEventListener("scroll", hideTooltip);
        window.removeEventListener("resize", hideTooltip);
      }
    }
  }, []);

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
      fixed={fixed && !show}
    >
      { content ?? (<ContentWrapper>
        { icon ? <IconWrapper>{icon}</IconWrapper> : ''}
        <Text size={12}>{text}</Text>
      </ContentWrapper>)}
    </Content>
  </Wrapper>);
};

export default Tooltip;
