type SC<P = Record<string, unknown>> = (
  props: P & { children?: React.ReactNode }
) => Promise<JSX.Element | null>;
