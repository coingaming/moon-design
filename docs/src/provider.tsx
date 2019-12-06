import * as React from 'react';
import {
  ThemeProvider,
  sportsbetDark,
  sportsbetLight,
} from '@heathmont/sportsbet-themes';

const themes: any = {
  sportsbetDark,
  sportsbetLight,
};

export const DocsThemeContext = React.createContext({
  setTheme: (themeKey: string) => {
    themeKey;
  },
  themeKeys: [''],
  cycleTheme: () => {},
  toggleColorScheme: () => {},
});

export const useDocsTheme = () => React.useContext(DocsThemeContext);

export const DocsThemeProvider: React.FC<{ children: React.ReactChild }> = ({
  children,
}) => {
  const [themeState, setThemeState] = React.useState('sportsbetDark');

  /**
   * Toggle between themes 'dark' and 'light' states
   */
  const toggleColorScheme = () => {
    themeState.endsWith('Dark')
      ? setThemeState(themeState.replace('Dark', 'Light'))
      : setThemeState(themeState.replace('Light', 'Dark'));
  };

  /**
   * Rotate through all themes
   */
  const cycleTheme = () => {
    /* eslint-disable-next-line no-console */
    console.info('🎨 Theme: ', themeState, themes[themeState]);
    const themeKeys = [...Object.keys(themes || {})];
    const i = themeKeys.indexOf(themeState);
    const next = themeKeys[(i + 1) % themeKeys.length];
    setThemeState(next);
  };

  const setTheme = (themeKey: string) => setThemeState(themes[themeKey]);

  const themeKeys = Object.keys(themes);

  return (
    <DocsThemeContext.Provider
      value={{ cycleTheme, setTheme, themeKeys, toggleColorScheme }}
    >
      <ThemeProvider theme={themes[themeState]} hasTransition>
        {children}
      </ThemeProvider>
    </DocsThemeContext.Provider>
  );
};
