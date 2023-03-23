type AccordionRootProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  defaultValue?: string;
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
};

export default AccordionRootProps;
