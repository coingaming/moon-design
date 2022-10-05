import type AccordionSizes from './AccordionSizes';

type AccordionProps = {
  title: string | React.ReactNode;
  openByDefault?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  headerContent?: React.ReactNode;
  size?: AccordionSizes;
  withButton?: boolean;
  isContentInside?: boolean;
  bgColor?: string;
};

export default AccordionProps;
