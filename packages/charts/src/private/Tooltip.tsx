import { Text } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div(
  ({ theme }) => `
  display: inline-block;
  color: ${theme.color.goten[100]};
  background: ${theme.color.gohan[100]}
  font-size: ${rem(12)};
  line-height: ${rem(16)};
  padding: ${rem(12)};
  border-radius: ${rem(4)};
  position: relative;
  box-shadow: ${theme.boxShadow};
`
);

export const Tooltip = ({ payload, active }: any) => {
  if (!active || !payload) return null;
  return (
    <Wrapper>
      {payload.map((line: any) => (
        <Text size={14} key={line.dataKey} style={{ color: line.color }}>
          {line.name}: {line.value}
        </Text>
      ))}
    </Wrapper>
  );
};
