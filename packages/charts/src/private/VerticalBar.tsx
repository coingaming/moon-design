import { rem } from '@heathmont/moon-utils';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import { Cell, Count, Table, TableItem, Value } from './Table';

const Container = styled.div({
  width: '100%',
  height: '100%',
});

const Bar = styled.div<{
  isNegative: boolean;
  axisPosition: 'left' | 'center' | 'right';
}>(({ isNegative, axisPosition }) => ({
  position: 'relative',
  height: rem(20),
  display: 'block',
  ...(axisPosition === 'left'
    ? {
        width: '100%',
      }
    : {}),
  ...(axisPosition === 'center'
    ? {
        width: '50%',
        transform: isNegative ? 'rotate(180deg)' : 'translateX(100%)',
      }
    : {}),
  ...(axisPosition === 'right'
    ? {
        width: '100%',
        transform: 'rotate(180deg)',
      }
    : {}),
}));

const Line = styled.div(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: 0,
  borderRadius: `0 ${rem(4)} ${rem(4)} 0`,
  willChange: 'width',
  transition: `width ${theme.transitionDuration.slow}s ease`,
}));

const Center = styled.div(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  height: '100%',
  width: rem(1),
  background: theme.color.beerus[100],
}));

type Props = {
  data: {
    label: string | React.ReactNode;
    value: number;
    opacity: number;
    percent: number;
    isNegative: boolean;
    color: string;
  }[];
  axisPosition: 'left' | 'center' | 'right';
};

export const VerticalBar: React.FC<Props> = ({ data, axisPosition }) => {
  const lineRef = useRef(null);

  return (
    <Container>
      <Table withAdditionalCell>
        {data.map(
          (
            { label, value, opacity, percent, isNegative, color },
            index: number
          ) => (
            // eslint-disable-next-line
          <React.Fragment key={`${index}-${value}`}>
              <Cell>
                <Count>{index + 1}</Count>
              </Cell>
              <Cell>
                <TableItem>{label}</TableItem>
              </Cell>
              <Cell wide>
                {axisPosition === 'center' && <Center />}
                <Bar isNegative={isNegative} axisPosition={axisPosition}>
                  <Transition nodeRef={lineRef} in appear timeout={0}>
                    {state => (
                      <Line
                        ref={lineRef}
                        style={{
                          width: `${state === 'entered' ? percent : 0}%`,
                          opacity,
                          background: color,
                        }}
                      />
                    )}
                  </Transition>
                </Bar>
              </Cell>
              <Cell>
                <Value>{value}</Value>
              </Cell>
            </React.Fragment>
          )
        )}
      </Table>
    </Container>
  );
};
