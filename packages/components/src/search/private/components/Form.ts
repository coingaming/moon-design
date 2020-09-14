import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import { SearchInputActive } from './Input';
import { Results, resultsActive } from './Results';
import { zIndex } from './settings';

/**
 * Search Form
 * The functional container for the search component.
 * We aren't using Design System form because we use focus-within logic here
 */
export const SearchForm = styled.form(({ theme }) => ({
  fontSize: rem(theme.space.default),
  position: 'relative',
  overflow: 'visible',
  width: '100%',
  [`&:focus-within, ${SearchInputActive}`]: {
    zIndex: zIndex.searchInputActive,
    [`~ ${Results}:not(:empty)`]: resultsActive(theme),
  },
}));
