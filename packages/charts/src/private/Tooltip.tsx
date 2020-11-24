import { Text } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import React from 'react';
import styled from 'styled-components';

export const TooltipWrapper = styled.div(
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
  pointer-events: none;
`
);

export const Item = styled(Text)(
  ({ theme }) => `
  position: relative;
  padding-left: ${rem(theme.space.default)};
`
);

export const ColorPreview = styled.div`
  width: ${rem(8)};
  height: ${rem(8)};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

export const Tooltip = ({ payload, active }: any) => {
  if (!active || !payload) return null;

  return (
    <TooltipWrapper>
      {payload.map((item: any) => (
        <Item size={14} key={item.dataKey}>
          <>
            <ColorPreview
              style={{ background: item.payload.fill || item.color }}
            />
            {item.name} • {item.value}
          </>
        </Item>
      ))}
    </TooltipWrapper>
  );
};
