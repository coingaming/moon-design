interface Props {
  toggleReactAndElixir: () => void;
  isElixirEnabled: boolean;
}

const ElixirSettings: React.FC<Props> = ({ toggleReactAndElixir, isElixirEnabled }) => {
  return <h1>ElixirSettings: {isElixirEnabled}</h1>;
};

export default ElixirSettings;
