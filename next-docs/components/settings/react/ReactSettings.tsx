import { useState } from 'react';
import {
  LogoSportsbetShort,
  LogoBitcasinoShort,
  LogoMoonDesignShort,
  LogoBetaddaShort,
} from '@heathmont/moon-assets';
import useFeatureFlags from '../../../utils/useFeatureFlags';
import { useDocsTheme, DocsBrands } from '../../themes/DocsThemeProvider';
import useThemeTW from '../../themes/useThemesTW';
import ReactElixirSwitcher from '../common/ReactElixirSwitcher';
import SettingsButton from '../common/SettingsButton';
import DarkLightModeSwitcher from './DarkLightModeSwitch';
import RTLModeSwitch from './RTLModeSwitch';

type LogosKeys = keyof typeof Logos;

interface Props {
  toggleReactAndElixir: () => void;
  isReactEnabled: boolean;
}

const Logos = {
  sportsbet: <LogoSportsbetShort fontSize="1rem" />,
  bitcasino: <LogoBitcasinoShort fontSize="1rem" />,
  moonDesign: <LogoMoonDesignShort fontSize="1rem" />,
  betadda: <LogoBetaddaShort fontSize="1rem" />,
};

const ReactSettings: React.FC<Props> = ({
  toggleReactAndElixir,
  isReactEnabled,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);

  const { toggleColorScheme, setBrand, themeKeys } = useDocsTheme();

  const [isRtlEnabled, setIsRtl] = useState(false);

  const { isFeatureElixirEnabled } = useFeatureFlags();

  const toggleRtl = () => {
    const htmlTag = document && document?.getElementsByTagName('html')[0];
    setIsRtl(!isRtlEnabled);
    const dirAttr = htmlTag.getAttribute('dir');

    if (!dirAttr) {
      htmlTag.setAttribute('dir', 'rtl');
    } else {
      htmlTag.removeAttribute('dir');
    }
  };

  const filteredThemeKeys = themeKeys.filter((themeKey: string) =>
    ['sportsbet', 'bitcasino', 'moonDesign', 'betadda'].includes(themeKey)
  );

  const {
    setBrand: setBrandTW,
    toggleMode: toggleModeTW,
    getMode,
  } = useThemeTW();

  const switchBrandHandler = (themeKey: LogosKeys) => {
    setBrand(themeKey as DocsBrands);
    setBrandTW(themeKey);
  };

  const switchModeHandler = () => {
    toggleColorScheme();
    toggleModeTW();
  };
  return (
    <>
      <SettingsButton onClick={toggle} isRtlEnabled={isRtlEnabled} />
      {isOpened && (
        <>
          <div
            className={`${
              isRtlEnabled ? `left-4` : `right-4`
            } fixed bottom-16 z-50`}
          >
            {filteredThemeKeys.map((themeKey: string) => {
              const Logo = Logos[themeKey as LogosKeys] || Logos.moonDesign;
              return (
                <button
                  key={themeKey}
                  type="button"
                  onClick={() => switchBrandHandler(themeKey as LogosKeys)}
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
            } fixed bottom-28 z-50`}
          >
            <DarkLightModeSwitcher
              toggle={switchModeHandler}
              isEnabled={getMode() === 'dark'}
              isRtlEnabled={isRtlEnabled}
            />
          </div>
          <div
            className={`${
              isRtlEnabled ? `left-4` : `right-4`
            } fixed bottom-40 z-50`}
          >
            <RTLModeSwitch toggle={toggleRtl} isEnabled={isRtlEnabled} />
          </div>
          <div
            className={`${
              isRtlEnabled ? `left-4` : `right-4`
            } fixed bottom-52 z-50`}
          >
            {isFeatureElixirEnabled ? (
              <ReactElixirSwitcher
                toggle={toggleReactAndElixir}
                isReactEnabled={isReactEnabled}
              />
            ) : null}
          </div>
        </>
      )}
    </>
  );
};

export default ReactSettings;
