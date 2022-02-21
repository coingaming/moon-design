import React from 'react';
import {
  LogoSportsbetShort,
  LogoBitcasinoShort,
  LogoMoonDesignShort,
  LogoBetaddaShort,
} from '@heathmont/moon-assets';
import { DocsBrands } from '../../themes/DocsThemeProvider';

const Logos = {
  sportsbet: <LogoSportsbetShort fontSize="1rem" />,
  bitcasino: <LogoBitcasinoShort fontSize="1rem" />,
  moonDesign: <LogoMoonDesignShort fontSize="1rem" />,
  betadda: <LogoBetaddaShort fontSize="1rem" />,
};

type LogosKeys = keyof typeof Logos;

interface BrandThemeSelectorProps {
  setBrand: (v: DocsBrands) => void;
  themeKeys: string[];
  darkLight: JSX.Element;
  rtlSwitch: JSX.Element;
  isRtlEnabled: boolean;
  reactElixirSwitch: JSX.Element;
}

const ElixirThemeSelector = ({
  setBrand,
  themeKeys,
  darkLight,
  rtlSwitch,
  isRtlEnabled,
  reactElixirSwitch,
}: BrandThemeSelectorProps) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const toggle = () => setIsOpened(!isOpened);
  const filteredThemeKeys = themeKeys.filter((themeKey: string) =>
    ['sportsbet', 'bitcasino', 'moonDesign', 'betadda'].includes(themeKey)
  );
  return (
    <>
      <button
        onClick={toggle}
        type="button"
        aria-pressed="false"
        className={`${
          isRtlEnabled ? `left-4` : `right-4`
        } text-black bg-white hover:bg-gray-200 fixed bottom-4 inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none z-40 shadow-md`}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8846 14.5385L10.8846 25.5M10.8846 6.5V9.42308M21.1154 22.5769V25.5M21.1154 6.5V17.4615M8.5 14.5385H13.2692C14.3738 14.5385 15.2692 13.6431 15.2692 12.5385V11.4231C15.2692 10.3185 14.3738 9.4231 13.2692 9.4231H8.5C7.39543 9.4231 6.5 10.3185 6.5 11.4231V12.5385C6.5 13.643 7.39543 14.5385 8.5 14.5385ZM18.7308 22.5769H23.5C24.6046 22.5769 25.5 21.6815 25.5 20.5769V19.4615C25.5 18.357 24.6046 17.4615 23.5 17.4615H18.7308C17.6262 17.4615 16.7308 18.357 16.7308 19.4615V20.5769C16.7308 21.6815 17.6262 22.5769 18.7308 22.5769Z"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>

        {/* <LogoDrop fontSize="2rem" /> */}
      </button>
      {isOpened && (
        <>
          <div
            className={`${
              isRtlEnabled ? `left-4` : `right-4`
            } fixed bottom-16 z-40`}
          >
            {filteredThemeKeys.map((themeKey: string) => {
              const Logo = Logos[themeKey as LogosKeys] || Logos.moonDesign;
              return (
                <button
                  key={themeKey}
                  type="button"
                  onClick={() => setBrand(themeKey as DocsBrands)}
                  className={`${
                    isRtlEnabled ? `mr-4` : `ml-4`
                  } p-2 rounded-full text-black bg-white hover:bg-gray-200 inline-flex items-center justify-center shadow-md`}
                >
                  {Logo}
                </button>
              );
            })}
          </div>
          <div
            className={`${
              isRtlEnabled ? `left-4` : `right-4`
            } fixed bottom-28 z-40`}
          >
            {darkLight}
          </div>
          <div
            className={`${
              isRtlEnabled ? `left-4` : `right-4`
            } fixed bottom-40 z-40`}
          >
            {rtlSwitch}
          </div>
          <div
            className={`${
              isRtlEnabled ? `left-4` : `right-4`
            } fixed bottom-52 z-40`}
          >
            {reactElixirSwitch}
          </div>
        </>

      )}
    </>
  );
};

const TestElixirThemeSelector = () => <h1>Test Elixir</h1>

export default TestElixirThemeSelector;
