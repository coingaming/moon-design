import type NextPrevButtonProps from './NextPrevButtonProps';
import type PropsWithChildrenFunc from './PropsWithChildrenFunc';

type PolymorphicNextPrevButtonProps<C extends React.ElementType> =
  PropsWithChildrenFunc<NextPrevButtonProps<C>> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof NextPrevButtonProps<C>>;

export default PolymorphicNextPrevButtonProps;
