type MenuItemState = {
  selected?: boolean;
  active?: boolean;
  registerChild?: (child: string) => () => void;
};

export default MenuItemState;
