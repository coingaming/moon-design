import { useState } from 'react';
import { Switch, IconButton } from '@heathmont/moon-core-tw';
import {
  MediaTuner,
  OtherMoon,
  OtherSun,
  TextLeftAlign,
  TextRightAlign,
} from '@heathmont/moon-icons-tw';
import { useRtl } from './rtl/RtlProvider';
import { useDocsTheme } from './themes/DocsThemeProvider';
import useThemeTW from './themes/useThemesTW';

const Settings = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);
  const { toggleColorScheme } = useDocsTheme();
  const { rtlEnabled, toggleRtl } = useRtl();
  const { toggleMode: toggleModeTW, getMode } = useThemeTW();
  const isDarkThemeEnabled = getMode() === 'dark';
  const switchModeHandler = () => {
    toggleColorScheme();
    toggleModeTW();
  };
  return (
    <>
      <IconButton
        onClick={toggle}
        icon={<MediaTuner />}
        className="fixed z-50 bottom-4 ltr:right-4 rtl:left-4 shadow-moon-md rounded-full"
        aria-label="Toggle site settings"
      />
      {isOpened && (
        <>
          <Switch
            checked={isDarkThemeEnabled}
            onChange={switchModeHandler}
            size="xs"
            onIcon={<OtherMoon />}
            offIcon={<OtherSun />}
            className="ltr:right-4 rtl:left-4 fixed bottom-[4.5rem] z-50"
            aria-label="Toggle light/dark themes"
          />
          <Switch
            checked={rtlEnabled}
            onChange={toggleRtl}
            size="xs"
            onIcon={<TextRightAlign />}
            offIcon={<TextLeftAlign />}
            className="ltr:right-4 rtl:left-4 fixed bottom-[6.5rem] z-50"
            aria-label="Toggle LTR/RTL"
          />
        </>
      )}
    </>
  );
};

export default Settings;
