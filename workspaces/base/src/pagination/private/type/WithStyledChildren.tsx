type WithStyledChildren<T = {}> = T & {
  children?: React.ReactNode;
  className?: string;
};

export default WithStyledChildren;
