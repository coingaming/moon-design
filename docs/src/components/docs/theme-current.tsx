import * as React from 'react';
import { useTheme } from '@heathmont/moon-themes';
import styled from 'styled-components';

const ColorScheme = styled.span({
  textTransform: 'capitalize',
});

export const ThemeCurrent = () => {
  const theme = useTheme();

  return (
    <span>
      {theme.brand} <ColorScheme>({theme.colorScheme})</ColorScheme>
    </span>
  );
};
