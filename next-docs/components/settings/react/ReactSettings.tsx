import { useState } from 'react';
import {
  LogoSportsbetShort,
  LogoBitcasinoShort,
  LogoMoonDesignShort,
  LogoBetaddaShort,
} from '@heathmont/moon-assets';
import { MediaTuner } from '@heathmont/moon-icons';
import useFeatureFlags from '../../../utils/useFeatureFlags';
import { useDocsTheme, DocsBrands } from '../../themes/DocsThemeProvider';

import ReactElixirSwitcher from '../common/ReactElixirSwitcher';
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

  const { toggleColorScheme, getColorMode, setBrand, themeKeys } =
    useDocsTheme();

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

  return (
    <>
      <button
        onClick={toggle}
        type="button"
        aria-pressed="false"
        className={`${
          isRtlEnabled ? `left-4` : `right-4`
        } text-black bg-white hover:bg-gray-200 fixed bottom-4 inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none z-50 shadow-md`}
      >
        <MediaTuner fontSize="2rem" />
      </button>
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
            } fixed bottom-28 z-50`}
          >
            <DarkLightModeSwitcher
              toggle={toggleColorScheme}
              isEnabled={getColorMode() === 'dark'}
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
