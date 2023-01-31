import { useRtl } from "../components/rtl/RtlProvider";
import { useDocsTheme } from "../components/themes/DocsThemeProvider";
import useThemeTW from "../components/themes/useThemesTW";

const useSettings = () => {
  const { toggleColorScheme } = useDocsTheme();
  const { rtlEnabled, toggleRtl } = useRtl();
  const { toggleMode: toggleModeTW, getMode } = useThemeTW();
  const isDarkThemeEnabled = getMode() === 'dark';
  const switchModeHandler = () => {
    toggleColorScheme();
    toggleModeTW();
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