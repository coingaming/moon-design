import { useContext, useState } from 'react';
import {
  LogoSportsbetShort,
  LogoBitcasinoShort,
  LogoMoonDesignShort,
  LogoBetaddaShort,
} from '@heathmont/moon-assets';
import { MediaTuner } from '@heathmont/moon-icons';
import ReactElixirSwitcher from '../common/ReactElixirSwitcher';
import DarkLightModeSwitcher from '../react/DarkLightModeSwitch';
import { BrandThemeButton } from './BrandThemeButton';
import { store } from './ElixirThemeProvider';
import { elixirThemeKeys, ElixirThemeType } from './store';

interface Props {
  toggleReactAndElixir: () => void;
  isElixirEnabled: boolean;
}

const Logos = {
  sportsbet: <LogoSportsbetShort fontSize="1rem" />,
  bitcasino: <LogoBitcasinoShort fontSize="1rem" />,
  moonDesign: <LogoMoonDesignShort fontSize="1rem" />,
  betadda: <LogoBetaddaShort fontSize="1rem" />,
};

const getLogo = (themeKey: string | ElixirThemeType): JSX.Element =>
  Logos[themeKey as LogosKeys] || Logos.moonDesign;

type LogosKeys = keyof typeof Logos;

const ElixirSettings: React.FC<Props> = ({
  toggleReactAndElixir,
  isElixirEnabled,
}) => {
  const {
    state: { isDarkMode, isElixir },
    dispatch,
  } = useContext(store);
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);

  const setElixirTheme = (theme: ElixirThemeType) => {
    dispatch({ type: 'setTheme', payload: theme });
  };
  return (
    <>
      <button
        onClick={toggle}
        type="button"
        aria-pressed="false"
        className="right-4 text-black bg-white hover:bg-gray-200 fixed bottom-4 inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none z-50 shadow-md"
      >
        <MediaTuner fontSize="2rem" />
      </button>
      {isOpened && (
        <>
          <div className="right-4 fixed bottom-16 z-50">
            {elixirThemeKeys.map((themeKey: ElixirThemeType) => (
              <BrandThemeButton
                key={themeKey}
                onClick={() => setElixirTheme(themeKey)}
                isRtlEnabled={false}
              >
                {getLogo(themeKey)}
              </BrandThemeButton>
            ))}
          </div>
          <div className={'right-4 fixed bottom-28 z-50'}>
            <DarkLightModeSwitcher
              toggle={() =>
                dispatch({
                  type: 'setIsDarkMode',
                  payload: !isDarkMode,
                })
              }
              isRtlEnabled={false}
              isEnabled={isDarkMode}
            />
          </div>

          <div className={'right-4 fixed bottom-40 z-50'}>
            <ReactElixirSwitcher
              toggle={toggleReactAndElixir}
              isReactEnabled={!isElixirEnabled}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ElixirSettings;
