type TooltipState = {
  withArrow?: boolean;
  registerChild?: (child: string) => () => void;
};

export default TooltipState;
