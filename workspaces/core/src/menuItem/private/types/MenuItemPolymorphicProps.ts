import type MenuItemProps from './MenuItemProps';

type MenuItemPolymorphicProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, MenuItemProps>;

export default MenuItemPolymorphicProps;
