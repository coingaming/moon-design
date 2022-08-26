import { useContext, useState } from 'react';
import useRtl from '../../../utils/useRtl';
import ReactElixirSwitcher from '../common/ReactElixirSwitcher';
import SettingsButton from '../common/SettingsButton';
import DarkLightModeSwitcher from '../react/DarkLightModeSwitch';
import RTLModeSwitch from '../react/RTLModeSwitch';
import { store } from './ElixirThemeProvider';

interface Props {
  toggleReactAndElixir: () => void;
  isElixirEnabled: boolean;
}

const ElixirSettings: React.FC<Props> = ({
  toggleReactAndElixir,
  isElixirEnabled,
}) => {
  const {
    state: { isDarkMode },
    dispatch,
  } = useContext(store);
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);
  const { toggleRtl, isRtlEnabled } = useRtl();
  return (
    <>
      <SettingsButton onClick={toggle} />
      {isOpened && (
        <>
          <div className="ltr:right-4 rtl:left-4 fixed bottom-16 z-50">
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
          <div className="ltr:right-4 rtl:left-4 fixed bottom-[6.75rem] z-50">
            <RTLModeSwitch toggle={toggleRtl} isEnabled={isRtlEnabled} />
          </div>
          <div className="ltr:right-4 rtl:left-4 fixed bottom-[9.5rem] z-50">
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
