import Case from "./Case";
import Size from "./Size";

type TagsInputState = {
  value?: unknown;
  size?: Size;
  disabled?: boolean;
  isError?: boolean;
  onClear?: (index: number) => void;
  tagsCase?: Case;
  popper?:  {
    styles?: { [key: string]: React.CSSProperties };
    attributes?: { [key: string]: { [key: string]: string } | undefined };
    setAnchor: React.Dispatch<React.SetStateAction<Element | null | undefined>>;
    setPopper: React.Dispatch<
      React.SetStateAction<HTMLElement | null | undefined>
    >;
  };
};

export default TagsInputState;
