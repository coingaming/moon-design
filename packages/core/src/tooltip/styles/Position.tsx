import {rem} from "@heathmont/moon-utils";
import styled from "styled-components";

function resolvePositionTop (
  position: 'top' | 'bottom' | 'left' | 'right',
  fixedCoords?: { x: number, y: number } | null,
): string {
  let value = '50%';

  if (fixedCoords) {
    value = `${fixedCoords.y}px`;
  }
  else {
    if (position === 'top') value = '0';
    else if (position === 'bottom') value = '100%';
  }

  return value;
}

function resolvePositionLeft (
  position: 'top' | 'bottom' | 'left' | 'right',
  fixedCoords?: { x: number, y: number } | null,
): string {
  let value = '50%';

  if (fixedCoords) {
    value = `${fixedCoords.x}px`;
  }
  else {
    if (position === 'left') value = '0';
    else if (position === 'right') value = '100%';
  }

  return value;
}

const Position = styled.div<{
  position: 'top' | 'bottom' | 'left' | 'right',
  show?: boolean,
  fixedCoords?: { x: number, y: number } | null,
}>(
  ({ position, show, fixedCoords, theme }) => ({
    position: fixedCoords ? 'fixed' : 'absolute',
    top: resolvePositionTop(position, fixedCoords),
    left: resolvePositionLeft(position, fixedCoords),
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

export default Position;
