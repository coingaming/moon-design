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
  shangrilaLight,
  shangrilaDark,
  empireLight,
  empireDark,
  tajCasinoLight,
  tajCasinoDark,
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
  shangrila: {
    dark: shangrilaDark,
    light: shangrilaLight,
  },
  empire: {
    dark: empireDark,
    light: empireLight,
  },
  tajCasino: {
    dark: tajCasinoDark,
    light: tajCasinoLight,
  },
};

interface DocsColorModes {
  dark: Theme;
  light: Theme;
};

interface DocsThemes {
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
  shangrila: DocsColorModes;
  empire: DocsColorModes;
  tajCasino: DocsColorModes;
};

type DocsBrands = keyof DocsThemes;

export const DocsThemeContext = React.createContext({
  setBrand: (themeKey: DocsBrands) => {
    themeKey;
  },
  themeKeys: [''],
  toggleColorScheme: () => {},
  getColorMode: () => null,
  getBrand: () => null,
});

export const useDocsTheme = () => React.useContext(DocsThemeContext);

export const DocsThemeProvider: React.FC<{ children: React.ReactChild }> = ({
  children,
}) => {
  // TODO Save mode in local storage
  // const [localStorageMode, setLocalStorageMode] = useLocalStorage(
  //   'mode',
  //   'dark',
  // );
  // const [localStorageBrand, setLocalStorageBrand] = useLocalStorage(
  //   'brand',
  //   'moonDesign',
  // );

  const [themeState, setThemeState] = React.useState({
    brand: 'moonDesign',
    colorMode: 'light',
  });

  /**
   * Toggle between themes 'dark' and 'light' states
   */
  const toggleColorScheme = () => {
    const newColorMode = themeState.colorMode === 'dark' ? 'light' : 'dark';
    setThemeState({
      brand: themeState.brand,
      colorMode: newColorMode,
    });
  };

  const setBrand = (themeKey: DocsBrands) => {
    setThemeState({ brand: themeKey, colorMode: themeState.colorMode });
  };

  const getColorMode: any = () => themeState.colorMode;
  const getBrand: any = () => themeState.brand;
  const themeKeys = Object.keys(themes);
  // @ts-ignore
  const theme = themes[themeState.brand][themeState.colorMode];

  return (
    <DocsThemeContext.Provider
      value={{
        setBrand, themeKeys, toggleColorScheme, getColorMode, getBrand,
      }}
    >
      <ThemeProvider
        theme={theme}
        hasTransition
      >
        {children}
      </ThemeProvider>
    </DocsThemeContext.Provider>
  );
};
