import { useRtl } from "../components/rtl/RtlProvider";
import { useDocsTheme } from "../components/themes/DocsThemeProvider";
import useTheme from "../components/themes/useThemes";

const useSettings = () => {
  const { toggleColorScheme } = useDocsTheme();
  const { rtlEnabled, toggleRtl } = useRtl();
  const { toggleMode, getMode } = useTheme();
  const isDarkThemeEnabled = getMode() === 'dark';
  const switchModeHandler = () => {
    toggleColorScheme();
    toggleMode();
  };
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const isLocalhost = origin === 'http://localhost:3000';
  return {
    isDarkThemeEnabled,
    switchModeHandler,
    rtlEnabled,
    toggleRtl,
    isLocalhost
  }
}

export default useSettings