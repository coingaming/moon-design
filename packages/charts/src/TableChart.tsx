import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import { Panel } from './private/Panel';
import { Header } from './private/Header';

const List = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  list-style: none;
  counter-reset: item-counter;
`;

const Item = styled.li(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  counter-increment: item-counter;
  padding-left: ${rem(24)};
  position: relative;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  color: ${theme.color.bulma[100]}
  margin-bottom: ${rem(8)};
  gap: ${rem(theme.space.default)};
  &:before {
    content: counter(item-counter);
    position: absolute;
    font-size: ${rem(12)};
    line-height: ${rem(20)};
    color: ${theme.color.trunks[100]}
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`
);

const Container = styled.div<{ isActive: boolean }>(
  ({ theme, isActive }) => `
  display: flex;
  height: 100%;
  overflow: auto;
  ${
    isActive
      ? `
    ${Item} {
      * {
        color: ${theme.color.goten[100]};
      }
      &:before {
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
          <List>
            {data.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Item key={index}>
                <div>{item.title}</div>
                <div>{item.value}</div>
              </Item>
            ))}
          </List>
        </Container>
      </>
    </Panel>
  );
};

export default TableChart;
