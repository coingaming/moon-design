type AlertState = {
  withClose?: boolean;
  registerChild?: (child: string) => () => void;
};

export default AlertState;
