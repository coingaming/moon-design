import { ElementType } from 'react';

type TabProps = {
  disabled?: boolean;
  as?: ElementType<any>;
  className?: string | (({ selected }: { selected: boolean }) => string);
};

export default TabProps;
