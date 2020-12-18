import { Text } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import React from 'react';
import styled from 'styled-components';

export const TooltipWrapper = styled.div(({ theme }) => ({
  display: 'inline-block',
  color: theme.color.goten[100],
  background: theme.color.gohan[100],
  fontSize: rem(12),
  lineHeight: rem(16),
  padding: rem(12),
  borderRadius: rem(4),
  position: 'relative',
  boxShadow: theme.boxShadow,
  pointerEvents: 'none',
}));

export const Item = styled.div(({ theme }) => ({
  position: 'relative',
  padding: `${rem(2)} 0 ${rem(2)} ${rem(theme.space.default)}`,
  color: theme.color.trunks[100],
}));

const Date = styled.div(({ theme }) => ({
  padding: `${rem(2)} 0`,
  color: theme.color.trunks[100],
}));

export const ColorPreview = styled.div({
  width: rem(8),
  height: rem(8),
  borderRadius: '50%',
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translateY(-50%)',
});

type Props = {
  payload?: {
    name: string;
    dataKey: string;
    color: string;
    value: any;
    payload: {
      date?: string;
      label?: string;
      fill?: string;
      dataKey?: string;
    };
  }[];
  active?: boolean;
  formatFn: (props: { value: any; key: string }) => any;
};

export const Tooltip: React.FC<Props> = ({ payload, active, formatFn }) => {
  if (!active || !payload) return null;

  const date = payload[0] && payload[0].payload.date;

  return (
    <TooltipWrapper>
      {date && <Date>{formatFn({ value: date, key: 'date' })}</Date>}
      {payload.map(item => {
        const color = item.payload.fill || item.color;
        const label = item.payload.label || item.name;
        const key = item.payload.dataKey || item.dataKey;
        const value = formatFn({
          value: item.value,
          key,
        });

        return (
          <Item key={key}>
            <ColorPreview style={{ background: color }} />
            <Text size={12} as="span">
              {label}
            </Text>{' '}
            • {value}
          </Item>
        );
      })}
    </TooltipWrapper>
  );
};
