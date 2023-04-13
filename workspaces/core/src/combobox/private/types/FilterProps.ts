interface IComboboxFilterProps {
  [key: string]: any;
  value: string;
}

type ComboboxFilterProps = {
  query: string,
  data: IComboboxFilterProps[],
  callBack?: (query: string, value: string) => boolean,
}

export { type ComboboxFilterProps, type IComboboxFilterProps };
