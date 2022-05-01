import {rem} from "@heathmont/moon-utils";
import rgba from "polished/lib/color/rgba";
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
    boxShadow: `0px 6px 6px -6px ${
      rgba(theme.colorNew.popo, 0.16)
    }, 0px 0px 1px ${
      rgba(theme.colorNew.popo, 0.4)
    }`,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    padding: `${rem(12)}`,
    borderRadius: `${rem(4)}`,
    backgroundColor: theme.colorNew.goten,
    color: theme.colorNew.popo,
    '& *': {
      color: theme.colorNew.popo,
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
      borderLeft: position === 'left' ? `5px solid ${theme.colorNew.goten}` :
        position === 'right' ? 'initial' : '5px solid transparent',
      borderRight: position === 'right' ? `5px solid ${theme.colorNew.goten}` :
        position === 'left' ? 'initial' : '5px solid transparent',
      borderTop: position === 'top' ? `5px solid ${theme.colorNew.goten}` :
        position === 'bottom' ? 'initial' : '5px solid transparent',
      borderBottom: position === 'bottom' ? `5px solid ${theme.colorNew.goten}` :
        position === 'top' ? 'initial' : '5px solid transparent',
    }
  })
);

export default Position;
