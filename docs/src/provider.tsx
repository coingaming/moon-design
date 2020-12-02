import React from 'react';
import {
  ThemeProvider,
  sportsbetDark,
  sportsbetLight,
  bitcasinoLight,
  bitcasinoDark,
  slotsLight,
  slotsDark,
  luckyslots,
  livecasinoDark,
  livecasinoLight,
  bombayClub,
  aposta10Dark,
  aposta10Light,
  hub88,
  missionsToolDark,
  missionsToolLight,
  moonDesignDark,
  moonDesignLight,
  Theme,
  moneyballDark,
  moneyballLight,
  commsDark,
  commsLight,
} from '@heathmont/moon-themes';

const themes: DocsThemes = {
  sportsbet: {
    dark: sportsbetDark,
    light: sportsbetLight,
  },
  bitcasino: {
    dark: bitcasinoDark,
    light: bitcasinoLight,
  },
  slots: {
    dark: slotsDark,
    light: slotsLight,
  },
  luckyslots: {
    dark: luckyslots,
    light: luckyslots,
  },
  livecasino: {
    dark: livecasinoDark,
    light: livecasinoLight,
  },
  bombay: {
    dark: bombayClub,
    light: bombayClub,
  },
  hub88: {
    dark: hub88,
    light: hub88,
  },
  aposta10: {
    dark: aposta10Dark,
    light: aposta10Light,
  },
  missionsTool: {
    dark: missionsToolDark,
    light: missionsToolLight,
  },
  moonDesign: {
    dark: moonDesignDark,
    light: moonDesignLight,
  },
  moneyball: {
    dark: moneyballDark,
    light: moneyballLight,
  },
  comms: {
    dark: commsDark,
    light: commsLight,
  },
};

type DocsColorModes = {
  dark: Theme;
  light: Theme;
};

type DocsThemes = {
  sportsbet: DocsColorModes;
  bitcasino: DocsColorModes;
  slots: DocsColorModes;
  luckyslots: DocsColorModes;
  livecasino: DocsColorModes;
  bombay: DocsColorModes;
  hub88: DocsColorModes;
  aposta10: DocsColorModes;
  missionsTool: DocsColorModes;
  moonDesign: DocsColorModes;
  moneyball: DocsColorModes;
  comms: DocsColorModes;
};

type DocsBrands = keyof DocsThemes;

export const DocsThemeContext = React.createContext({
  setBrand: (themeKey: DocsBrands) => {
    themeKey;
  },
  themeKeys: [''],
  toggleColorScheme: () => {},
});

export const useDocsTheme = () => React.useContext(DocsThemeContext);

export const DocsThemeProvider: React.FC<{ children: React.ReactChild }> = ({
  children,
}) => {
  const [themeState, setThemeState] = React.useState({
    brand: 'moonDesign',
    colorMode: 'dark',
  });

  /**
   * Toggle between themes 'dark' and 'light' states
   */
  const toggleColorScheme = () => {
    setThemeState({
      brand: themeState.brand,
      colorMode: themeState.colorMode === 'dark' ? 'light' : 'dark',
    });
  };

  const setBrand = (themeKey: DocsBrands) => {
    setThemeState({ brand: themeKey, colorMode: themeState.colorMode });
  };

  const themeKeys = Object.keys(themes);

  return (
    <DocsThemeContext.Provider
      value={{ setBrand, themeKeys, toggleColorScheme }}
    >
      <ThemeProvider
        theme={themes[themeState.brand][themeState.colorMode]}
        hasTransition
      >
        {children}
      </ThemeProvider>
    </DocsThemeContext.Provider>
  );
};
