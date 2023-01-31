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
  bombay: ColorModes;
  empire: ColorModes;
  lab: ColorModes;
  livecasino: ColorModes;
  partners: ColorModes;
  tradeart: ColorModes;
}

export const themes: Themes = {
  sportsbet: {
    dark: 'theme-sb-dark',
    light: 'theme-sb-light',
  },
  betadda: {
    dark: 'theme-betadda-dark',
    light: 'theme-betadda-light',
  },
  bitcasino: {
    dark: 'theme-bitcasino-dark',
    light: 'theme-bitcasino-light',
  },
  moonDesign: {
    dark: 'theme-moon-dark',
    light: 'theme-moon-light',
  },
  bombay: {
    dark: 'theme-bombay-club',
    light: 'theme-bombay-club',
  },
  empire: {
    dark: 'theme-empire-dark',
    light: 'theme-empire-light',
  },
  lab: {
    dark: 'theme-lab-light',
    light: 'theme-lab-light',
  },
  livecasino: {
    dark: 'theme-livecasino-dark',
    light: 'theme-livecasino-light',
  },
  partners: {
    dark: 'theme-partners-light',
    light: 'theme-partners-light',
  },
  tradeart: {
    dark: 'theme-tradeart-dark',
    light: 'theme-tradeart-light',
  },
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
    const previewElements = document.getElementsByTagName('body');
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
    localStorage.setItem('theme', className);
  };

  const getTheme = () => {
    if (!isStorageAvailable('localStorage')) {
      return '';
    }
    return localStorage.getItem('theme');
  };

  const getBrand = () => {
    if (!isStorageAvailable('localStorage')) {
      return '';
    }
    return localStorage.getItem('brand');
  };

  useEffect(() => {
    const theme = getTheme();
    const brand = getBrand();
    setTheme(theme || 'theme-moon-light');
    setBrand((brand || 'moonDesign') as Brand);
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
    const currentMode = (getMode() || themeState.colorMode) as Mode;
    const className = themes && themes[brand][currentMode];
    setTheme(className);
    setThemeState({
      brand: brand,
      colorMode: themeState.colorMode,
    });
    localStorage.setItem('brand', brand);
  };

  return {
    setBrand,
    getBrand,
    toggleMode,
    getTheme,
    getMode,
  };
};

export default useThemeTW;
