import ElixirThemeSelector from './ElixirThemeSelector';

interface Props {
  toggleReactAndElixir: () => void;
  isElixirEnabled: boolean;
}

const ElixirSettings: React.FC<Props> = ({
  toggleReactAndElixir,
  isElixirEnabled,
}) => {
  return <ElixirThemeSelector />;
};

export default ElixirSettings;
