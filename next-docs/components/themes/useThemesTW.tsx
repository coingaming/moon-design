import React, { useEffect } from 'react';
import isStorageAvailable from '../../utils/isStorageAvailable';

interface ColorModes {
  dark: string;
  light: string;
}

interface Themes {
  sportsbet: ColorModes;
  bitcasino: ColorModes;
  betadda: ColorModes;
  moonDesign: ColorModes;
  // luckyslots: ColorModes;
  // livecasino: ColorModes;
  // bombay: ColorModes;
  // hub88: ColorModes;
  // aposta10: ColorModes;
  // missionsTool: ColorModes;
  // slots: ColorModes;
  // moneyball: ColorModes;
  // comms: ColorModes;
  // shangrila: ColorModes;
  // empire: ColorModes;
  // tajCasino: ColorModes;
}

const themes: Themes = {
  sportsbet: {
    dark: 'sb-dark',
    light: 'sd-light',
  },
  betadda: {
    dark: 'betadda-dark',
    light: 'betadda-light',
  },
  bitcasino: {
    dark: 'bitcasino-dark',
    light: 'bitcasino-light',
  },
  moonDesign: {
    dark: 'moon-dark',
    light: 'moon-light',
  },
  //   slots: {
  //     dark: slotsDark,
  //     light: slotsLight,
  //   },
  //   luckyslots: {
  //     dark: luckyslots,
  //     light: luckyslots,
  //   },
  //   livecasino: {
  //     dark: livecasinoDark,
  //     light: livecasinoLight,
  //   },
  //   bombay: {
  //     dark: bombayClub,
  //     light: bombayClub,
  //   },
  //   hub88: {
  //     dark: hub88,
  //     light: hub88,
  //   },
  //   aposta10: {
  //     dark: aposta10Dark,
  //     light: aposta10Light,
  //   },
  //   missionsTool: {
  //     dark: missionsToolDark,
  //     light: missionsToolLight,
  //   },
  //   moneyball: {
  //     dark: moneyballDark,
  //     light: moneyballLight,
  //   },
  //   comms: {
  //     dark: commsDark,
  //     light: commsLight,
  //   },
  //   shangrila: {
  //     dark: shangrilaDark,
  //     light: shangrilaLight,
  //   },
  //   empire: {
  //     dark: empireDark,
  //     light: empireLight,
  //   },
  //   tajCasino: {
  //     dark: tajCasinoDark,
  //     light: tajCasinoLight,
  //   },
};

export type Brand = keyof Themes;
export type Mode = keyof ColorModes;

const useThemeTW = () => {
  const [themeState, setThemeState] = React.useState({
    brand: 'moonDesign' as Brand,
    colorMode: 'light' as Mode,
  });

  const setTheme = (className: string) => {
    // document.documentElement.className = className;
    const previewElements = document.getElementsByClassName('preview');

    const themeClasses = [];
    for (var key in themes) {
      const brandName = key as Brand;
      themeClasses.push(themes[brandName].dark);
      themeClasses.push(themes[brandName].light);
    }

    for (var i = 0; i < previewElements.length; i++) {
      themeClasses.map((cl) => {
        previewElements[i].classList.remove(cl);
      });
      previewElements[i].className += ` ${className}`;
    }
    localStorage.setItem('themeCN', className);
  };

  const getTheme = () => {
    if (!isStorageAvailable('localStorage')) {
      return '';
    }
    const theme = localStorage.getItem('themeCN');
    theme && setTheme(theme);
    return theme;
  };

  useEffect(() => {
    getTheme();
  }, []);

  /**
   * Toggle between themes 'dark' and 'light' states
   */
  const toggleMode = () => {
    const localStorageMode =
      isStorageAvailable('localStorage') && localStorage.getItem('themeMode');
    const currentMode = localStorageMode || themeState.colorMode;
    const newColorMode = currentMode === 'dark' ? 'light' : 'dark';
    const className = themes && themes[themeState.brand][newColorMode];
    setTheme(className);
    setThemeState({
      brand: themeState.brand,
      colorMode: newColorMode,
    });
    localStorage.setItem('themeMode', newColorMode);
  };

  const getMode = () => {
    if (!isStorageAvailable('localStorage')) {
      return '';
    }
    return localStorage.getItem('themeMode') || 'light';
  };

  const setBrand = (brand: Brand) => {
    const className = themes && themes[brand][themeState.colorMode];
    setTheme(className);
    setThemeState({
      brand: brand,
      colorMode: themeState.colorMode,
    });
  };

  return {
    setBrand,
    toggleMode,
    getTheme,
    getMode,
  };
};

export default useThemeTW;
