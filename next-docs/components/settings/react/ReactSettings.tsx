import { useState } from 'react';
import useFeatureFlags from '../../../utils/useFeatureFlags';
import useRtl from '../../../utils/useRtl';
import { useDocsTheme } from '../../themes/DocsThemeProvider';
import useThemeTW from '../../themes/useThemesTW';
import ReactElixirSwitcher from '../common/ReactElixirSwitcher';
import SettingsButton from '../common/SettingsButton';
import DarkLightModeSwitcher from './DarkLightModeSwitch';
import RTLModeSwitch from './RTLModeSwitch';

interface Props {
  toggleReactAndElixir: () => void;
  isReactEnabled: boolean;
}

const ReactSettings: React.FC<Props> = ({
  toggleReactAndElixir,
  isReactEnabled,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);
  const { toggleColorScheme } = useDocsTheme();
  const { toggleRtl, isRtlEnabled } = useRtl();
  const { isFeatureElixirEnabled } = useFeatureFlags();
  const { toggleMode: toggleModeTW, getMode } = useThemeTW();
  const switchModeHandler = () => {
    toggleColorScheme();
    toggleModeTW();
  };
  return (
    <>
      <SettingsButton onClick={toggle} />
      {isOpened && (
        <>
          <div className="ltr:right-4 rtl:left-4 fixed bottom-16 z-50">
            <DarkLightModeSwitcher
              toggle={switchModeHandler}
              isEnabled={getMode() === 'dark'}
              isRtlEnabled={isRtlEnabled}
            />
          </div>
          <div className="ltr:right-4 rtl:left-4 fixed bottom-[6.75rem] z-50">
            <RTLModeSwitch toggle={toggleRtl} isEnabled={isRtlEnabled} />
          </div>
          <div className="ltr:right-4 rtl:left-4 fixed bottom-[9.5rem] z-50">
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
