const setPadding = (
  size?: string,
  iconLeft?: JSX.Element | boolean,
  iconRight?: JSX.Element | boolean,
  iconOnly?: JSX.Element | boolean
) => {
  if (size === 'sm') {
    if (iconLeft && !iconRight) {
      return 'py-1 ps-1 pe-2';
    }
    if (iconRight && !iconLeft) {
      return 'py-1 ps-2 pe-1';
    }
    if (!iconRight && !iconLeft && !iconOnly) {
      return 'py-1 px-2';
    }
    return 'p-1';
  }
  if (iconLeft && !iconRight) {
    return `py-2 ps-2 pe-3`;
  }
  if (iconRight && !iconLeft) {
    return `py-2 ps-3 pe-2`;
  }
  if (!iconRight && !iconLeft && !iconOnly) {
    return 'py-2 px-3';
  }
  return `p-2`;
};

export default setPadding;
