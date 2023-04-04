import { Tooltip, mergeClassnames } from '@heathmont/moon-core-tw';

export type IconProps = {
  name: string;
  onClick: (v: string) => void;
  selectedIcons: string[];
  children?: React.ReactNode;
};

const Icon: React.FC<IconProps> = ({
  children,
  name,
  onClick,
  selectedIcons,
}) => {
  const isShown = selectedIcons.includes(name);
  return (
    <div onClick={() => onClick(name)}>
      <Tooltip>
        <Tooltip.Trigger
          className={mergeClassnames(
            'relative flex flex-col items-center text-sm cursor-pointer rounded-md hover:bg-active-80 hover:text-active transition-colors',
            isShown ? 'text-active bg-active-80' : 'text-gray-400'
          )}
        >
          {children}
        </Tooltip.Trigger>
        <Tooltip.Content>
          {name}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
};

export default Icon;
