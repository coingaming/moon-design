type AccordionRootProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  defaultValue?: string;
  value?: string[];
  onValueChange?(value: string[]): void;
};

export default AccordionRootProps;
