import React from "react";
import {rem} from "@heathmont/moon-utils";
import styled from "styled-components";

const TooltipContent = styled.div<{ position: 'top' | 'bottom' | 'left' | 'right', show?: boolean }>(
  ({ position, show, theme }) => ({
    position: 'absolute',
    top: position === 'top' ? 0 : position === 'bottom' ? '100%' : '50%',
    left: position === 'left' ? 0 : position === 'right' ? '100%' : '50%',
    transform: `translate(${
      position === 'top' || position === 'bottom' ? '-50%' :
        position === 'left' ? 'calc(-100% - 5px)' : '5px'
    }, ${
      position === 'left' || position === 'right' ? '-50%' :
        position === 'top' ? 'calc(-100% - 5px)' : '5px'
    })`,
    display: show ? 'flex !important' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    padding: `${rem(2)} ${rem(6)}`,
    borderRadius: `${rem(4)}`,
    backgroundColor: theme.colorNew.piccolo,
    color: theme.colorNew.goten,
    '& *': {
      color: theme.colorNew.goten,
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: position === 'top' ? '100%' : position === 'bottom' ? 0 : '50%',
      left: position === 'left' ? '100%' : position === 'right' ? 0 : '50%',
      transform: `translate(${
        position === 'top' || position === 'bottom' ? '-50%' :
          position === 'left' ? '-1px' : '-5px'
      }, ${
        position === 'left' || position === 'right' ? '-50%' :
          position === 'top' ? 'calc(100% - 6px)' : '-5px'
      })`,
      width: 0,
      height: 0,
      borderLeft: position === 'left' ? `5px solid ${theme.colorNew.piccolo}` :
        position === 'right' ? 'initial' : '5px solid transparent',
      borderRight: position === 'right' ? `5px solid ${theme.colorNew.piccolo}` :
        position === 'left' ? 'initial' : '5px solid transparent',
      borderTop: position === 'top' ? `5px solid ${theme.colorNew.piccolo}` :
        position === 'bottom' ? 'initial' : '5px solid transparent',
      borderBottom: position === 'bottom' ? `5px solid ${theme.colorNew.piccolo}` :
        position === 'top' ? 'initial' : '5px solid transparent',
    }
  })
);

const Content:React.FC<{
  children: React.ReactElement,
  relativeRect?: any,
  position?: 'top' | 'bottom' | 'left' | 'right',
  show?: boolean,
  fixed?: boolean
}> = ({ show, fixed, position, children, relativeRect }) => {
  //const rootElemRef = React.useRef(document.getElementsByTagName('body')[0]);
  //console.log('relativeRect', relativeRect);
  //console.log('rootElemRef', rootElemRef)
  return (<TooltipContent
    position={position}
    show={show}
  >{children}</TooltipContent>)
};

export default Content;
