import React from 'react';

import ThemeContext from '../themeContext/ThemeContext';
import { Theme } from '../sharedTokens/sharedTokens';

/**
 * Theme Context
 *
 * Allow consumers to access theme values outside of `styled` functions.
 */
const useTheme = (): Theme => React.useContext(ThemeContext);

export default useTheme;
