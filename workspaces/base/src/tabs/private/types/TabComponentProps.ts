import type TabPolymorphicProps from './TabPolymorphicProps';

type TabComponentProps = <C extends React.ElementType = 'a'>(
  props: TabPolymorphicProps<C>
) => React.ReactElement | null;

export default TabComponentProps;
