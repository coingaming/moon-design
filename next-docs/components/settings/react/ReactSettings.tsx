import { useState } from 'react';
import useRtl from '../../../utils/useRtl';
import { useDocsTheme } from '../../themes/DocsThemeProvider';
import useThemeTW from '../../themes/useThemesTW';
import SettingsButton from '../common/SettingsButton';
import DarkLightModeSwitcher from './DarkLightModeSwitch';
import RTLModeSwitch from './RTLModeSwitch';

const ReactSettings = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);
  const { toggleColorScheme } = useDocsTheme();
  const { toggleRtl, isRtlEnabled } = useRtl();
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
        </>
      )}
    </>
  );
};

export default ReactSettings;
