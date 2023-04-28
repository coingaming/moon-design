import mergeClassnames from "../../../mergeClassnames/mergeClassnames";

const getSizeStyles = (size?: string, innerLabel?: boolean) => {
  const isLabel = innerLabel !== undefined && innerLabel;

  return mergeClassnames(
    size === 'sm' && 'py-1.5 px-2 rounded',
    (size === 'sm' || isLabel) && 'py-2 px-3 rounded-md gap-x-3',
    size === 'lg' && 'py-3 px-3',
    (size === 'xl' || isLabel) && 'py-3 px-4 rounded-xl gap-x-4',
  )
};

const getTextSizes = (size?: string) => {
  return size === undefined || size === 'md'
    ? 'text-base'
      : size === 'sm'
        ? 'text-sm'
          : size === 'lg'
            ? 'text-lg'
            : 'text-xl';
}

export { getSizeStyles, getTextSizes };
