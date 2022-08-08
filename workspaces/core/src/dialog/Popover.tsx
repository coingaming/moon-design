import React, {useRef} from "react";
import PopoverProps from "./private/popoverProps";
import useOutsideClicker from "./private/useOutsideClicker";

const DialogPopover: React.FC<PopoverProps> = ({
  width,
  height,
  isOpen,
  header,
  content,
  footer,
  handleClick,
  placement = 'top'
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClicker(wrapperRef, handleClick);

  return (<div className='z-10'>
    {isOpen && (
      <div
        ref={wrapperRef}
        className={`w-full flex items-center justify-center absolute shadow-moon-lg rounded-2xl overflow-hidden z-100 ${
          placement === 'top' || placement === 'bottom'
            ? 'left-1/2 -translate-x-[50%]'
            : 'top-1/2 -translate-y-[50%]'
        } ${
          placement === 'top' ? '-top-2 -translate-y-full' : ''
        } ${
          placement === 'right' ? '-right-2 translate-x-full' : ''
        } ${
          placement === 'bottom' ? '-bottom-2 translate-y-full' : ''
        } ${
          placement === 'left' ? '-left-2 -translate-x-full' : ''
        }`}
        style={Object.assign(
          width ? {width} : {},
          height ? {height} : {}
        )}
      >
        <div
          className={`w-full flex flex-col relative z-20 ease-in-out duration-300 bg-gohan ${
            header ? 'pt-4' : ''
          } ${
            footer ? 'pb-4' : ''
          }`}
        >
          {!!header && (header)}
          <div className="grow flex flex-col items-stretch justify-center m-6">{content}</div>
          {!!footer && (footer)}
        </div>
      </div>
    )}
  </div>);
};

export default DialogPopover;
