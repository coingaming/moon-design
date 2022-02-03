import React from 'react';
import { Theme } from '../sharedTokens/sharedTokens';
import ThemeContext from '../themeContext/ThemeContext';

/**
 * Theme Context
 *
 * Allow consumers to access theme values outside of `styled` functions.
 */
const useTheme = (): Theme => React.useContext(ThemeContext);

export default useTheme;
