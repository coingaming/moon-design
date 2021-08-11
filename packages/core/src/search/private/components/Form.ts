import styled from 'styled-components';

/**
 * Search Form
 * The functional container for the search component.
 * We aren't using Design System form because we use focus-within logic here
 */
export const SearchForm = styled.form({
  display: 'flex',
  position: 'relative',
  overflow: 'visible',
  width: '100%',
});
