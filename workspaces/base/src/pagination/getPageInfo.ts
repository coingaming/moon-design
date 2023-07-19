type PageInfo = {
  nextPage?: number;
  previousPage?: number;
  isTrancable?: boolean;
  previousPages?: number[];
  nextPages?: number[];
  middlePages?: number[];
  isMiddleTruncable?: boolean;
};
type Args = { page: number; pageSize: number; isTruncable?: boolean };
type ArgsFunc = (page: number, pages: number[]) => number[];

const getPreviousPages: ArgsFunc = (page, pages) => {
  switch (page) {
    case 1:
    case 2:
      return pages.slice(0, 3);
    case 3:
      return pages.slice(0, 4);
    default:
      return pages.slice(0, 1);
  }
};

const getNextPages: ArgsFunc = (page, pages) => {
  const totalCount = pages.length;
  switch (page) {
    case totalCount:
    case totalCount - 1:
      return pages.slice(totalCount - 3, totalCount);
    case totalCount - 2:
      return pages.slice(totalCount - 4, totalCount);
    default:
      return pages.slice(totalCount - 1, totalCount);
  }
};

const getMiddlePages: ArgsFunc = (page, pages) => {
  if (page > 3 && page < pages.length - 2) {
    return pages.slice(pages[page - 3], pages[page]);
  }
  return [];
};

const getPageInfo = ({ page, pageSize, isTruncable }: Args): PageInfo => {
  const hasNextPage = page < pageSize;
  const nextPage = hasNextPage ? page + 1 : undefined;
  const hasPreviousPage = page > 1;
  const previousPage = hasPreviousPage ? page - 1 : undefined;

  const pages = Array(pageSize)
    .fill(0)
    .map((_, i) => i + 1);
  const previousPages = isTruncable ? getPreviousPages(page, pages) : pages;
  const nextPages = isTruncable ? getNextPages(page, pages) : [];
  const middlePages = isTruncable ? getMiddlePages(page, pages) : [];

  const isMiddleTruncable = !!middlePages?.length;

  return {
    nextPage,
    previousPage,
    previousPages,
    nextPages,
    middlePages,
    isMiddleTruncable,
  };
};

export default getPageInfo;
