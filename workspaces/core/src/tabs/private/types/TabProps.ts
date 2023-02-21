import { ElementType } from 'react';

type TabProps = {
  disabled?: boolean;
  as?: ElementType<any>;
  className?: string | (({ selected }: { selected: boolean }) => string);
  children?: React.ReactNode;
};

export default TabProps;
