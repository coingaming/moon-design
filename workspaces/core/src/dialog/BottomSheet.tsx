import React, { FunctionComponent } from "react";
import BottomSheetProps from "./private/bottomSheetProps";

const DialogBottomSheet: FunctionComponent<BottomSheetProps> = ({
  isOpen,
  height,
  header,
  content,
  footer,
  handleClick,
}) => (
    <div className='w-full h-full flex flex-col items-center justify-end absolute bottom-0 left-0'>
      {isOpen && (<div
        className="w-full h-full absolute left-0 top-0 bg-slate-800 opacity-60 z-20"
        onClick={() => handleClick ? handleClick() : null}
      />)}
      <div
        style={height ? { height } : {}}
        className={`w-full flex flex-col relative py-2 z-30 ease-in-out duration-300 bg-gohan rounded-tl-g rounded-t-2xl transition-all ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div
            className="w-12 h-[6px] bg-beerus mt-2 mb-4 rounded-full cursor-pointer"
            onClick={() => handleClick ? handleClick() : null}
          />
        </div>
        {!!header && (header)}
        <div className="grow flex flex-col items-stretch justify-center m-6">{content}</div>
        {!!footer && (footer)}
      </div>
    </div>
);

export default DialogBottomSheet;
