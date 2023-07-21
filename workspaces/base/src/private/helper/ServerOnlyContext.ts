// @ts-ignore
import { cache } from 'react';

export default <T>(defaultValue: T): [() => T, (v: T) => void] => {
  const getRef = cache(() => ({ current: defaultValue }));

  const getValue = (): T => getRef().current;

  const setValue = (value: T) => {
    getRef().current = value;
  };

  return [getValue, setValue];
};

// const [getCurrentPage, setCurrentPage] = serverContext(1);
// const [getTotalPages, setTotalPages] = serverContext(1);

// setCurrentPage(currentPage);
// setTotalPages(totalPages);

// const currentPage = getCurrentPage();
// const totalPages = getTotalPages();
