type ContentProps = {
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default ContentProps;
