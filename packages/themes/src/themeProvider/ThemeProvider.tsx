import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { Theme } from '../sharedTokens/sharedTokens';
import {
  themeTransitionClass,
  themeTransitionDuration,
  ThemeTransition,
} from '../themeTransition/ThemeTransition';

/**
 * Rather than encouraging consumers to use `styled-components`' theming API
 * directly, we extend it. This means we have more flexibility in the future to
 * change the underlying framework (e.g. another CSS-in-JS library), if
 * absolutely necessary.
 */

/**
 * Theme Provider
 *
 * See https://www.styled-components.com/docs/advanced#theming
 */
export type ThemeProviderProps = {
  theme: Theme;
  children?: React.ReactChild;
  hasTransition?: boolean;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme,
  hasTransition,
}) => {
  const initialTheme = React.useRef(true);

  const handleChange = (themeObject: Theme) => {
    if (hasTransition) {
      if (initialTheme.current) {
        initialTheme.current = false;
        return themeObject;
      }

      /* Add the theme class, then remove once transitioned. */
      document && document.documentElement.classList.add(themeTransitionClass);
      setTimeout(() => {
        document &&
          document.documentElement.classList.remove(themeTransitionClass);
      }, themeTransitionDuration + 10);

      return themeObject;
    }

    return themeObject;
  };

  return (
    <StyledThemeProvider theme={() => handleChange(theme)}>
      <React.Fragment>
        <ThemeTransition />
        {children}
      </React.Fragment>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
