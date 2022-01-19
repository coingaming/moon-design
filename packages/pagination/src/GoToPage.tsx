import React, { useState, FormEvent, ChangeEvent } from 'react';
import { IconChevronRight } from '@heathmont/moon-assets';
import { TextInput } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

type GoToPageProps = {
  onChange: (page: number) => void;
  minPage?: number;
  maxPage?: number;
};

const CircleButton = styled.button(
  ({ theme }) => `
  width: ${rem(32)};
  height: ${rem(32)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${rem(12)};
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: ${theme.colorNew.goku};
  color: ${theme.colorNew.trunks};
  transition-property: color, background-color;
  transition-duration: ${theme.transitionDuration.default}s;
  &:hover, &:focus {
    background-color: ${theme.color.piccolo[100]};
    color: ${theme.colorNew.goten};
  }
`
);

const Form = styled.form(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: rem(12),
  height: rem(32),
  fontWeight: theme.fontWeight.semibold,
  '& > input': {
    padding: rem(4),
    borderRadius: rem(4),
    width: rem(32),
    height: rem(32),
    margin: `0 ${rem(8)}`,
  },
  '& > button': {
    height: rem(32),
    width: rem(32),
    padding: rem(4),
    backgroundColor: theme.color.goku[80],
    color: theme.colorNew.trunks,
    '&:hover, &:focus': {
      backgroundColor: theme.color.piccolo[100],
      color: '#fff',
    },
  },
}));

const GoToPage: React.FC<GoToPageProps> = ({
  onChange,
  maxPage,
  minPage = 1,
  children,
}) => {
  const [value, setValue] = useState('');

  const getPageNumber = (pageNumber: number) => {
    if (minPage && pageNumber < minPage) return minPage;
    if (maxPage && pageNumber > maxPage) return maxPage;
    return pageNumber;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const currentPage = Number(value);
    if (Number.isNaN(currentPage)) return;
    onChange(getPageNumber(currentPage));
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {children}
      <TextInput value={value} pattern="\d+" onChange={handleChange} />
      <CircleButton type="submit">
        <IconChevronRight />
      </CircleButton>
    </Form>
  );
};

export default GoToPage;
