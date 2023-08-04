import type { MutableRefObject } from 'react';

type MinimapProps = {
  numberOfColumns: number;
  tableRef: MutableRefObject<HTMLElement | null>;
  footerRef: MutableRefObject<HTMLElement | null>;
};

export default MinimapProps;
