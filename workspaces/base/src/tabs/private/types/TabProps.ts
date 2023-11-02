import type Props from './Props';
import type Size from './Size';

type TabProps = Props & {
  isDisabled?: boolean;
  selected?: boolean;
  size?: Size;
};

export default TabProps;
