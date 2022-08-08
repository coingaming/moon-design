import SwitchProps from './switchProps';

const getSizeClasses = ({
  button,
  size,
  isRTL,
}: {
  button?: boolean;
  size?: SwitchProps['size'];
  isRTL?: boolean;
}) => {
  let classes = '';

  if (!button) {
    switch (size) {
      case '2xs':
        classes += 'w-8 h-4 after:w-3 after:h-[12px] ';
        classes += isRTL
          ? 'after:translate-x-3 peer-checked:after:translate-x-0'
          : 'peer-checked:after:translate-x-3';
        break;
      case 'xs':
        classes += 'w-11 h-6 after:w-4 after:h-4 ';
        classes += isRTL
          ? 'after:translate-x-5 peer-checked:after:translate-x-0'
          : 'peer-checked:after:translate-x-5';
        break;
      default:
        classes += 'w-[3.75rem] h-8 after:w-6 after:h-6 ';
        classes += isRTL
          ? 'after:translate-x-7 peer-checked:after:translate-x-0'
          : 'peer-checked:after:translate-x-7';
        break;
    }

    classes += ' after:rounded-full ';
  } else {
    if (size === 'lg') {
      classes +=
        'w-[122px] h-[48px] after:w-[57px] after:h-[40px] after:z-0 peer-checked:after:z-0 after:top-1 after:left-1 after:px-2 after:py-1 after:rounded-[8px] rounded-[12px] p-1 gap-1 ';
    } else if (size === 'md') {
      classes +=
        'w-[106px] h-[40px] after:w-[49px] after:h-[32px] after:z-0 peer-checked:after:z-0 after:top-1 after:left-1 after:px-1 after:py-1 after:rounded-[8px] rounded-[12px] p-1 gap-1 ';
    }

    classes += isRTL
      ? 'after:translate-x-full peer-checked:after:translate-x-0'
      : 'peer-checked:after:translate-x-full';
  }

  return classes;
};

export default getSizeClasses;
