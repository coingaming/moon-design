import { Switch, IconButton, Popover, MenuItem } from '@heathmont/moon-core-tw';
import {
  MediaTuner,
  OtherMoon,
  OtherSun,
  TextLeftAlign,
  TextRightAlign,
} from '@heathmont/moon-icons-tw';
import useSettings from '../utils/useSettings';
import BrandSwitcher from './brandSwitcher/BrandSwitcher';

const Settings = () => {
  const {
    isLocalhost,
    isDarkThemeEnabled,
    switchModeHandler,
    rtlEnabled,
    toggleRtl,
  } = useSettings();
  return (
    <Popover
      className="fixed z-50 bottom-20 ltr:right-4 rtl:left-4"
      position={rtlEnabled ? 'top-end' : 'top-start'}
    >
      <Popover.Trigger>
        <IconButton
          icon={<MediaTuner />}
          className="shadow-moon-md rounded-full"
          aria-label="Toggle site settings"
        />
      </Popover.Trigger>
      <Popover.Panel className="flex flex-col gap-1 p-3 bg-gohan">
        {isLocalhost && <BrandSwitcher />}
        <MenuItem as="div" className="cursor-default">
          {isDarkThemeEnabled ? 'Dark mode' : 'Light mode'}
          <Switch
            checked={isDarkThemeEnabled}
            onChange={switchModeHandler}
            size="xs"
            onIcon={<OtherMoon />}
            offIcon={<OtherSun />}
            aria-label="Toggle light/dark themes"
          />
        </MenuItem>
        <MenuItem as="div" className="cursor-default">
          {rtlEnabled ? 'RTL mode' : 'LTR mode'}
          <Switch
            checked={rtlEnabled}
            onChange={toggleRtl}
            size="xs"
            onIcon={<TextRightAlign />}
            offIcon={<TextLeftAlign />}
            aria-label="Toggle LTR/RTL"
          />
        </MenuItem>
      </Popover.Panel>
    </Popover>
  );
};

export default Settings;
