import React from 'react';
import {
  LogoSportsbetShort,
  LogoBitcasinoShort,
  LogoDrop,
  LogoMoonDesignShort,
  LogoHub88Short,
} from '@heathmont/moon-assets';

type InnerProps = {
  setBrand: any,
  themeKeys: string[],
}
const Logo = {
  sportsbet: <LogoSportsbetShort fontSize="1rem" />,
  bitcasino: <LogoBitcasinoShort fontSize="1rem" />,
  moonDesign: <LogoMoonDesignShort fontSize="1rem" />,
  hub88: <LogoHub88Short fontSize="1rem" />,
}
const ThemeSwitcher = ({ setBrand, themeKeys }: InnerProps) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const toggle = () => setIsOpened(!isOpened);
  const filteredThemeKeys = themeKeys.filter((themeKey: string) =>
    ['sportsbet', 'bitcasino', 'moonDesign', 'hub88'].includes(themeKey));
  return (
    <>
      <button
        onClick={toggle}
        type="button"
        aria-pressed="false"
        className="fixed bottom-4 text-bulma bg-gohan hover:bg-gohan-80 right-4 inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
      >
        <LogoDrop fontSize="2rem" />
      </button>
      {isOpened && (
        <div className="fixed bottom-16 right-4">
          {filteredThemeKeys.map((themeKey: string) => (
            <button
              key={themeKey}
              type="button"
              onClick={() => setBrand(themeKey)}
              className="p-2 rounded-full ml-4 text-bulma bg-gohan hover:bg-gohan-80 inline-flex items-center justify-center"
            >
              {/* @ts-ignore */}
              {Logo[themeKey]}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default ThemeSwitcher;
