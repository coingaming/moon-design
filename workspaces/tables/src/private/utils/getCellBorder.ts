const getCellBorder = (isCellBorder?: boolean) =>
  isCellBorder
    ? 'after:content-[""] after:absolute after:w-px after:bg-beerus after:h-3/5 after:bottom-[20%] after:right-0 after:translate-x-[-50%]'
    : '';

export default getCellBorder;
