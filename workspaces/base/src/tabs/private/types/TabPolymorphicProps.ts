import type TabProps from './TabProps';

type TabPolymorphicProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, TabProps>;

export default TabPolymorphicProps;
