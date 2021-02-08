import React from 'react';
import { LogoSportsbetShort, LogoBitcasinoShort } from '@heathmont/moon-assets';

const ThemeSwitcher = ({ setBrand, themeKeys }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const toggle = () => setIsOpened(!isOpened);
  const filteredThemeKeys = themeKeys.filter((themeKey) =>
    ['sportsbet', 'bitcasino', 'moonDesign'].includes(themeKey)
  );
  return (
    <>
      <button
        onClick={toggle}
        type="button"
        aria-pressed="false"
        className="fixed bottom-4 right-4 text-bulma bg-gohan inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
      >
        Theme Switch
      </button>
      {isOpened && (
        <div className="fixed bottom-16 right-4">
          {filteredThemeKeys.map((themeKey) => (
            <button
              type="button"
              onClick={() => setBrand(themeKey)}
              className="p-2 rounded-full ml-4 text-bulma bg-gohan hover:bg-gohan-80 inline-flex items-center justify-center"
            >
              {themeKey === 'sportsbet' && (
                <LogoSportsbetShort fontSize="1rem" />
              )}
              {themeKey === 'bitcasino' && (
                <LogoBitcasinoShort fontSize="1rem" />
              )}
              {themeKey === 'moonDesign' && <div>Moon.io</div>}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default ThemeSwitcher;
