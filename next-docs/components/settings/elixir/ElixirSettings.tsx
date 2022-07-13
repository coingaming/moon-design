import { useContext, useState } from 'react';
import {
  LogoSportsbetShort,
  LogoBitcasinoShort,
  LogoMoonDesignShort,
  LogoBetaddaShort,
} from '@heathmont/assets/styled';
import useRtl from '../../../utils/useRtl';
import ReactElixirSwitcher from '../common/ReactElixirSwitcher';
import SettingsButton from '../common/SettingsButton';
import DarkLightModeSwitcher from '../react/DarkLightModeSwitch';
import RTLModeSwitch from '../react/RTLModeSwitch';
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
  const { toggleRtl, isRtlEnabled } = useRtl();
  const setElixirTheme = (theme: ElixirThemeType) => {
    dispatch({ type: 'setTheme', payload: theme });
  };
  return (
    <>
      <SettingsButton onClick={toggle} />
      {isOpened && (
        <>
          <div className="ltr:right-4 rtl:left-4 fixed bottom-16 z-50">
            {elixirThemeKeys.map((themeKey: ElixirThemeType) => (
              <BrandThemeButton
                key={themeKey}
                onClick={() => setElixirTheme(themeKey)}
              >
                {getLogo(themeKey)}
              </BrandThemeButton>
            ))}
          </div>
          <div className="ltr:right-4 rtl:left-4 fixed bottom-28 z-50">
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
          <div className="ltr:right-4 rtl:left-4 fixed bottom-40 z-50">
            <RTLModeSwitch toggle={toggleRtl} isEnabled={isRtlEnabled} />
          </div>
          <div className="ltr:right-4 rtl:left-4 fixed bottom-40 z-50">
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
