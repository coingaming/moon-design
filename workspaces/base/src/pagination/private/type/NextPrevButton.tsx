interface NextPrevButtonProps<C extends React.ElementType> {
  as?: C;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

type PropsWithChildrenFunc<P = unknown> = P & {
  children?: React.ReactNode | undefined;
};

type PolymorphicNextPrevButtonProps<C extends React.ElementType> =
  PropsWithChildrenFunc<NextPrevButtonProps<C>> &
    Omit<React.ComponentPropsWithoutRef<C>, keyof NextPrevButtonProps<C>>;

export default PolymorphicNextPrevButtonProps;
