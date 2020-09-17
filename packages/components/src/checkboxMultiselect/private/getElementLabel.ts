export const getElementLabel = (node: string | JSX.Element): string => {
  if (typeof node === 'string') return node;
  if (!node.props.children) return '';
  if (typeof node.props.children === 'string') return node.props.children;
  return node.props.children.map(getElementLabel).join('');
};
