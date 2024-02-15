import type AccordionSizes from './AccordionSizes';

type AccordionProps = {
  className?: string;
  children?: React.ReactNode;
  size?: AccordionSizes;
  disabled?: boolean;
} & React.DetailedHTMLProps<
  React.DetailsHTMLAttributes<HTMLDetailsElement>,
  HTMLDetailsElement
>;

export default AccordionProps;
