import type MenuItemPolymorphicProps from './MenuItemPolymorphicProps';

type MenuItemComponentProps = <C extends React.ElementType = 'button'>(
  props: MenuItemPolymorphicProps<C>
) => React.ReactElement | null;

export default MenuItemComponentProps;
