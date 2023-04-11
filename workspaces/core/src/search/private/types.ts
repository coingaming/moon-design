import { ButtonProps, LinkProps } from "./components/ResultItem";

export type { ButtonProps, LinkProps } from "./components/ResultItem";

export type JsonStructure = Array<{
  items: Array<JsonStructureItem>;
  heading?: string;
  id: string;
}>;

export type JsonStructureItem = Omit<
  (ButtonProps & LinkProps) & { id: string },
  "index"
>;

