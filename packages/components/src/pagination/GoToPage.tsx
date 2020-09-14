import React, { useState, FormEvent, ChangeEvent } from 'react';
import { rem } from '@heathmont/moon-utils';
import { IconChevronRight } from '@heathmont/moon-assets';
import styled from 'styled-components';

import TextInput from '../textInput/TextInput';
import Button from '../button/Button';

type GoToPageProps = {
  onChange: (page: number) => void;
  label?: string | JSX.Element;
};

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
  },
}));

const GoToPage: React.FC<GoToPageProps> = ({ label, onChange }) => {
  const [page, setPage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const currentPage = Number(page);
    if (Number.isNaN(currentPage)) return;
    onChange(currentPage);
    setPage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {label} <TextInput value={page} pattern="\d+" onChange={handleChange} />
      <Button type="submit">
        <IconChevronRight color="trunks.100" />
      </Button>
    </Form>
  );
};

export default GoToPage;
