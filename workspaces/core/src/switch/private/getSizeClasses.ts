import SwitchProps, {Size} from "./switchProps";

const getSizeClasses = ({
  button,
  size,
  isRTL
}: {
  button?: boolean,
  size?: SwitchProps['size'],
  isRTL?: boolean,
}) => {
  let classes = '';

  if (!button) {
    switch (size) {
      case Size.XSMALL:
        classes += 'w-[32px] h-[16px] after:w-[12px] after:h-[12px] ';
        classes += isRTL ? 'after:translate-x-3 peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-3';
        break;
      case Size.SMALL:
        classes += 'w-[44px] h-[24px] after:w-[16px] after:h-[16px] ';
        classes += isRTL ? 'after:translate-x-5 peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-5';
        break;
      case Size.MEDIUM:
        classes += 'w-[60px] h-[32px] after:w-[24px] after:h-[24px] ';
        classes += isRTL ? 'after:translate-x-7 peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-7';
        break;
      default:
        classes += 'w-[60px] h-[32px] after:w-[24px] after:h-[24px] ';
        classes += isRTL ? 'after:translate-x-7 peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-7';
        break;
    }

    classes += ' after:rounded-full ';
  }
  else {
    if (size === Size.LARGE) {
      classes += 'w-[122px] h-[48px] top-[191px] left-[577px] after:w-[57px] after:h-[40px] after:z-0 peer-checked:after:z-0 after:top-1 after:left-1 after:px-2 after:py-1 after:rounded-[8px] rounded-[12px] p-1 gap-1 ';
    }
    else if (size === Size.MEDIUMBUTTONS) {
      classes += 'w-[106px] h-[40px] top-[195px] left-[161px] after:w-[49px] after:h-[32px] after:z-0 peer-checked:after:z-0 after:top-1 after:left-1 after:px-1 after:py-1 after:rounded-[8px] rounded-[12px] p-1 gap-1 ';
    }

    classes += isRTL ? 'after:translate-x-full peer-checked:after:translate-x-0' : 'peer-checked:after:translate-x-full';
  }

  return classes;
}

export default getSizeClasses;
