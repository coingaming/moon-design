import type PagesProps from './PagesProps';

type PolymorphicPagesProps<C extends React.ElementType> =
  React.PropsWithChildren<PagesProps<C>> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof PagesProps<C>>;

export default PolymorphicPagesProps;
