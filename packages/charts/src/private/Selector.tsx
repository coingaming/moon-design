import React from 'react';
import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: rem(theme.space.default),
}));

const Button = styled.button<{ isActive?: boolean }>(({ theme, isActive }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  margin: `0 ${rem(8)}`,
  padding: `${rem(8)} ${rem(8)} ${rem(8)} ${rem(32)}`,
  cursor: 'pointer',
  background: isActive ? theme.color.goku[100] : 'none',
  borderRadius: rem(8),
  border: 'none',
  willChange: 'background',
  transition: `background ${theme.transitionDuration.default}s`,
  minWidth: rem(124),
  '&:hover': {
    background: theme.color.goku[100],
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
  options: {
    label: any;
    key: string;
    value: string | number;
    color: ColorProps;
  }[];
};

export const Selector: React.FC<Props> = ({
  options,
  activeOptions,
  onChange,
}) => {
  return (
    <Container>
      {options.map(option => {
        const isActive = activeOptions.includes(option.key);

        return (
          <Button
            isActive={isActive}
            onClick={() => onChange(option.key, !isActive)}
            key={option.key}
          >
            <ColorPreview color={option.color} />
            <Label>{option.label}</Label>
            <Value>{option.value}</Value>
          </Button>
        );
      })}
    </Container>
  );
};
