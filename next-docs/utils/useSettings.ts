import { useRtl } from '../components/rtl/RtlProvider';
import { useDocsTheme } from '../components/themes/DocsThemeProvider';
import useTheme from '../components/themes/useThemes';

const useSettings = () => {
  const { toggleColorScheme } = useDocsTheme();
  const { rtlEnabled, toggleRtl } = useRtl();
  const { toggleMode, getMode } = useTheme();
  const isDarkThemeEnabled = getMode() === 'dark';
  const switchModeHandler = () => {
    toggleColorScheme();
    toggleMode();
  };
  const hostname =
    typeof window !== 'undefined' && window.location.hostname
      ? window.location.hostname
      : '';
  const isLocalhost = hostname === 'localhost';
  return {
    isDarkThemeEnabled,
    switchModeHandler,
    rtlEnabled,
    toggleRtl,
    isLocalhost,
  };
};

export default useSettings;
