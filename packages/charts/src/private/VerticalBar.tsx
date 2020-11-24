import { rem } from '@heathmont/moon-utils';
import React from 'react';
import styled from 'styled-components';

import { Cell, Count, Table } from './Table';

const Container = styled.div`
  flex: 1;
  height: 100%;
  overflow: auto;
`;

const Bar = styled.div`
  position: relative;
  height: ${rem(20)};
  display: block;
  width: 100%;
`;

const Line = styled.div(
  ({ theme }) => `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 0 ${rem(4)} ${rem(4)} 0;
    will-change: width;
    transaction: width ${theme.transitionDuration.slow}s ease;
  `
);

type Props = {
  color: string;
  data: {
    title: string;
    code: string;
    value: number;
    opacity: number;
    percent: number;
  }[];
};

export const VerticalBar: React.FC<Props> = ({ data, color }) => {
  return (
    <Container>
      <Table>
        <tbody>
          {data.map(({ title, value, opacity, percent }, index: number) => {
            return (
              <tr key={`${title}-${value}`}>
                <Cell>
                  <Count>{index + 1}</Count>
                </Cell>
                <Cell>{title}</Cell>
                <Cell wide>
                  <Bar>
                    <Line
                      style={{
                        width: `${percent}%`,
                        opacity,
                        background: color,
                      }}
                    />
                  </Bar>
                </Cell>
                <Cell>{value}</Cell>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
