/** @jsx jsx */ import * as React from 'react';
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import styled, { CSSObject } from '@emotion/styled';
import { IconSearch } from '@heathmont/sportsbet-icons';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import {
  colors,
  base,
  typography,
  breakpoints,
  border,
} from '@heathmont/sportsbet-tokens';

jsx;

const searchBox: CSSObject = {
  minWidth: rem(258),
  border: 0,
  padding: spacing('small'),
  flex: 1,
  backgroundColor: colors.neutral[70],
  fontFamily: typography.fontFamily,
  fontSize: base.fontSize,
  fontWeight: typography.fontWeight.semibold,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  color: colors.neutral[20],
  '&::placeholder': {
    color: colors.neutral[20],
  },
};

const SearchContainer = styled.form({
  width: `calc(100% - ${spacing('large')})`,
  marginLeft: spacing(),
  marginRight: spacing(),
  display: 'inline-flex',
  flex: '1 1 auto',
  alignItems: 'center',
  borderRadius: border.radius.largest,
  overflow: 'hidden',
  backgroundColor: colors.neutral[70],
  color: colors.neutral[20],
  [mq(breakpoints.small)]: {
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
});

const iconSearch: CSSObject = {
  marginTop: spacing('small'),
  marginBottom: spacing('small'),
  marginLeft: spacing('small'),
  marginRight: 0,
  [mq(breakpoints.small)]: {
    marginLeft: spacing(),
    marginRight: spacing(),
  },
};

type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  /* @TODO Revisit post-EPL */
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Search: React.FC<SearchProps> = ({
  placeholder,
  onSubmit,
  ...rest
}) => {
  return (
    <SearchContainer onSubmit={onSubmit}>
      <IconSearch css={iconSearch} />
      <input
        css={searchBox}
        type="search"
        name="search"
        placeholder={placeholder}
        {...rest}
      />
      <input type="submit" hidden />
    </SearchContainer>
  );
};
