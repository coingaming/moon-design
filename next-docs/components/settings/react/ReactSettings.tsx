import { useState } from 'react';
import { useDocsTheme } from '../../themes/DocsThemeProvider';
import ReactElixirSwitcher from '../common/ReactElixirSwitcher';
import BrandThemeSelector from './BrandThemeSelector';
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
  const { toggleColorScheme, getColorMode, setBrand, themeKeys } =
    useDocsTheme();

  const [isRtl, setIsRtl] = useState(false);

  const toggleRtl = () => {
    const htmlTag = document && document?.getElementsByTagName('html')[0];
    setIsRtl(!isRtl);
    const dirAttr = htmlTag.getAttribute('dir');

    if (!dirAttr) {
      htmlTag.setAttribute('dir', 'rtl');
    } else {
      htmlTag.removeAttribute('dir');
    }
  };

  return (
    <BrandThemeSelector
      themeKeys={themeKeys}
      setBrand={setBrand}
      isRtlEnabled={isRtl}
      darkLight={
        <DarkLightModeSwitcher
          toggle={toggleColorScheme}
          isEnabled={getColorMode() === 'dark'}
          isRtlEnabled={isRtl}
        />
      }
      rtlSwitch={<RTLModeSwitch toggle={toggleRtl} isEnabled={isRtl} />}
      reactElixirSwitch={
        <ReactElixirSwitcher
          toggle={toggleReactAndElixir}
          isReactEnabled={isReactEnabled}
        />
      }
    />
  );
};

export default ReactSettings;
