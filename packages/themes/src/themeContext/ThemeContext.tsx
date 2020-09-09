import React from 'react';
import { ThemeContext as StyledThemeContext } from 'styled-components';

/**
 * Theme Context
 *
 * Allow consumers to access theme values outside of `styled` functions.
 */
const ThemeContext: React.Context<any> = StyledThemeContext;

export default ThemeContext;
