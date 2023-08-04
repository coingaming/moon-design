import { Chip, Tooltip } from '@heathmont/moon-core-tw';

type IconProps = {
  name: string;
  onClick: (v: string) => void;
  selectedIcons: string[];
  children?: React.ReactNode;
};

const Icon = ({ children, name, onClick, selectedIcons }: IconProps) => {
  const isShown = selectedIcons.includes(name);
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <Chip
          variant="ghost"
          aria-label={name}
          isActive={isShown}
          onClick={() => onClick(name)}
          iconOnly={children}
        />
      </Tooltip.Trigger>
      <Tooltip.Content>
        {name}
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  );
};

export default Icon;
