import React from 'react';
import styled from 'styled-components';

import { Panel } from './private/Panel';
import { Header } from './private/Header';
import { Count, Table, Cell, TableItem } from './private/Table';

const Container = styled.div<{ isActive: boolean }>(
  ({ theme, isActive }) => `
  display: flex;
  height: 100%;
  overflow: auto;
  ${
    isActive
      ? `
      tr {
        * {
          color: ${theme.color.goten[100]};
        }
      }
    `
      : ''
  }
`
);

type Props = {
  title: string;
  data: {
    title: any;
    value: any;
  }[];
  onUpdate?: () => {};
  onShare?: () => {};
  onExpand?: () => {};
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  icon?: any;
  isActive?: boolean;
};

const TableChart: React.FC<Props> = ({
  title,
  data,
  onUpdate,
  onShare,
  onExpand,
  hasUpdates = false,
  filter,
  height = 446,
  icon,
  isActive = false,
}) => {
  return (
    <Panel
      isActive={isActive}
      hasUpdates={hasUpdates}
      onUpdate={onUpdate}
      onShare={onShare}
      onExpand={onExpand}
      height={height}
    >
      <>
        <Header isActive={isActive} icon={icon} title={title} filter={filter} />
        <Container isActive={isActive}>
          <Table>
            <tbody>
              {data.map((item, index) => (
                // eslint-disable-next-line
                <tr key={index}>
                  <Cell>
                    <Count>{index + 1}</Count>
                  </Cell>
                  <Cell wide>
                    <TableItem>{item.title}</TableItem>
                  </Cell>
                  <Cell align="right">{item.value}</Cell>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    </Panel>
  );
};

export default TableChart;
