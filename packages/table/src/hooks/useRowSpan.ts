export type RowSpanHeader = {
  id: string
  value?: any
}

const useInstance = (instance: any) => {
  const { allColumns } = instance;

  let rowSpanHeaders: RowSpanHeader[] = [];

  allColumns.forEach((column: any) => {
    const { id, withRowSpan } = column;

    if (withRowSpan !== undefined) {
      rowSpanHeaders = [
        ...rowSpanHeaders,
        { id, value: null }
      ];
    }
  });

  Object.assign(instance, { rowSpanHeaders });
}

const useRowSpan = (hooks: any) => {
  hooks.useInstance.push(useInstance)
}

export default useRowSpan