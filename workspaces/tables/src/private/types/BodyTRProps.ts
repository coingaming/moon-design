import ClipProps from "./ClipProps";

type BodyTRProps = {
  reactTableProps?: any;
  onClick?: any;
  onHoverToggle?: (hover?: boolean) => void;
  depth?: number;
  withOffset?: boolean;
  isExpanded?: boolean;
  hasChildren?: boolean;
  hasParent?: boolean;
  isLastNestedRow?: boolean;
  isSelected?: boolean | string;
  backgroundColor?: string;
  fontColor?: string;
  children?: React.ReactNode;
  selectable?: boolean;
  isHovered?: boolean;
  role?: string;
  textClip?: ClipProps;
};

export default BodyTRProps;
