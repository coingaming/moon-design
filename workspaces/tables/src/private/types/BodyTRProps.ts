type BodyTRProps = {
  reactTableProps?: any;
  onClick?: any;
  onHoverToggle?: (hover?: boolean) => void;
  depth?: number;
  withOffset?: boolean;
  isExpanded?: boolean;
  hasChildren?: boolean;
  hasParent?: boolean;
  isLastRow?: boolean;
  isLastNestedRow?: boolean;
  isSelected?: boolean | string;
  customBackground?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  children?: React.ReactNode;
  selectable?: boolean;
  isHovered?: boolean;
  role?: string;
};

export default BodyTRProps;
