import { useContext } from 'react';
import ReactElixirSwitcher from '../common/ReactElixirSwitcher';
import DarkLightModeSwitcher from '../react/DarkLightModeSwitch';
import { store } from './ElixirThemeProvider';
import ElixirThemeSelector from './ElixirThemeSelector';
import { elixirThemeKeys, ElixirThemeType } from './store';

interface Props {
  toggleReactAndElixir: () => void;
  isElixirEnabled: boolean;
}

const ElixirSettings: React.FC<Props> = ({
  toggleReactAndElixir,
  isElixirEnabled,
}) => {
  const {
    state: { isDarkMode, isElixir },
    dispatch,
  } = useContext(store);

  return (
    <ElixirThemeSelector
      themeKeys={elixirThemeKeys}
      setElixirTheme={(theme: ElixirThemeType) => {
        dispatch({ type: 'setTheme', payload: theme });
      }}
      darkLight={
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
      }
      reactElixirSwitch={
        <ReactElixirSwitcher
          toggle={toggleReactAndElixir}
          isReactEnabled={!isElixirEnabled}
        />
      }
    />
  );
};

export default ElixirSettings;
