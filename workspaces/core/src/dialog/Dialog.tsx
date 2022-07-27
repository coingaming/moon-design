import React, { FunctionComponent } from "react";
import ControlsClose from "./private/ControlsClose";
import DialogProps from "./private/dialogProps";

const Dialog: FunctionComponent<DialogProps> = ({
  isOpen,
  header,
  content,
  footer,
  handleClick,
}) => (
  <div>
    {isOpen && (
      <div className="flex flex-col">
        <div className="w-full h-full absolute left-0 top-0 bg-slate-800 opacity-60" onClick={(e) => {if (handleClick) handleClick(false)}}></div>
        <div className="w-full ease-in-out duration-300 bg-gohan absolute translate-x-[-50%] bottom-0 rounded-t-2xl sm:static sm:w-[360px] sm:rounded-2xl sm:translate-x-0">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-12 h-[6px] bg-beerus mt-2 rounded-full"></div>
          </div>
          {!!header && (
            <div className="w-full h-full border border-l-0 border-r-0 border-t-0">
              <div className="w-full flex justify-between items-center">
                <p className="font-semibold text-moon-18 ml-6 mt-8 mb-4 leading-8 ">
                  {header}
                </p>
                <div
                  className="mr-7 self-center cursor-pointer"
                  onClick={() => (handleClick ? handleClick(!isOpen) : '')}
                >
                  <ControlsClose />
                </div>
              </div>
            </div>
          )}
          <div className="w-full h-full flex flex-col">{content}</div>
          {!!footer && <div className="w-full h-full ">{footer}</div>}
        </div>
      </div>
    )}
  </div>
);

export default Dialog;