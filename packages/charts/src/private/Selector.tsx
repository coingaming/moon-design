import React from 'react';
import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: rem(theme.space.default),
  overflowX: 'auto',
}));

const List = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  maxWidth: '100%',
});

const Button = styled.button<{ isActive?: boolean }>(({ theme, isActive }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  position: 'relative',
  margin: `0 ${rem(8)}`,
  padding: `${rem(8)} ${rem(16)} ${rem(8)} ${rem(32)}`,
  cursor: 'pointer',
  background: isActive ? theme.color.goku[100] : 'none',
  borderRadius: rem(8),
  border: 'none',
  willChange: 'background',
  transition: `background ${theme.transitionDuration.default}s`,
  minWidth: rem(124),
  '&:hover': {
    background: theme.color.goku[80],
  },
  '&:active': {
    background: theme.color.goku[40],
  },
}));

const ColorPreview = styled.div<{ color?: ColorProps }>(({ theme, color }) => ({
  width: rem(8),
  height: rem(8),
  background: color ? themed('color', color)(theme) : theme.color.piccolo[100],
  borderRadius: '50%',
  position: 'absolute',
  top: rem(14),
  left: rem(14),
}));

const Label = styled.div(({ theme }) => ({
  fontSize: rem(12),
  lineHeight: rem(24),
  color: theme.color.trunks[100],
}));

const Value = styled.div(({ theme }) => ({
  fontSize: rem(18),
  lineHeight: rem(24),
  color: theme.color.bulma[100],
}));

type Props = {
  onChange: (key: string, isActive: boolean) => void;
  activeOptions: string[];
  formatFn: (props: { value: string | number; key: string }) => any;
  options: {
    label: any;
    dataKey: string;
    value: string | number;
    color: ColorProps;
  }[];
};

export const Selector: React.FC<Props> = ({
  options,
  activeOptions,
  onChange,
  formatFn,
}) => (
  <Container>
    <List>
      {options.map((option) => {
        const isActive = activeOptions.includes(option.dataKey);
        const value = formatFn({ value: option.value, key: option.dataKey });

        return (
          <Button
            isActive={isActive}
            onClick={() => onChange(option.dataKey, !isActive)}
            key={option.dataKey}
          >
            <ColorPreview color={option.color} />
            <Label>{option.label}</Label>
            <Value>{value}</Value>
          </Button>
        );
      })}
    </List>
  </Container>
);
