import type Placement from './Placement';

interface PopoverRootProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    'children'
  > {
  position?: Placement;
  className?: string;
  children?: React.ReactNode | ((data: { open?: boolean }) => React.ReactNode);
}

export default PopoverRootProps;
