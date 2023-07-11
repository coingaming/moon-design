type PagesProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  selected?: boolean;
  page?: number;
};

type PolymorphicPagesProps<C extends React.ElementType> =
  React.PropsWithChildren<PagesProps<C>> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof PagesProps<C>>;

export default PolymorphicPagesProps;
