import type ChildrenFunc from './ChildrenFunc';

interface NextPrevButtonProps<C extends React.ElementType> {
  as?: C;
  className?: string;
  children?: React.ReactNode | ChildrenFunc;
}

export default NextPrevButtonProps;
