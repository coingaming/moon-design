import type { ButtonProps } from '../../Button';

const mediumPadding = ({
  icon,
  iconLeft,
  iconRight,
  iconOnly,
}: ButtonProps) => {
  if (icon === 'left' || iconLeft) {
    return 'pt-2 pb-2 pl-2 pr-4';
    // TODO padding inline
    // {
    //   paddingTop: `${rem(8)}`,
    //   paddingInlineEnd: `${rem(16)}`,
    //   paddingBottom: `${rem(8)}`,
    //   paddingInlineStart: `${rem(8)}`,
    // };
  }
  if (icon === 'right' || iconRight) {
    return 'pt-2 pb-2 pl-4 pr-2';
    // TODO padding inline
    // {
    //   paddingTop: `${rem(8)}`,
    //   paddingInlineEnd: `${rem(8)}`,
    //   paddingBottom: `${rem(8)}`,
    //   paddingInlineStart: `${rem(16)}`,
    // };
  }
  if (icon === 'only' || iconOnly) {
    return 'p-2';
  }
  return 'py-2 px-3';
};

export default mediumPadding;
