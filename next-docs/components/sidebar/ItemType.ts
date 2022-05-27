type ItemType = {
  name: string;
  href: string;
  children?: ItemType[];
};

export default ItemType;
