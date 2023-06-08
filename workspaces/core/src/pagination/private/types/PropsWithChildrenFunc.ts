import type ChildrenFunc from './ChildrenFunc';

type PropsWithChildrenFunc<P = unknown> = P & {
  children?: React.ReactNode | ChildrenFunc | undefined;
};

export default PropsWithChildrenFunc;
