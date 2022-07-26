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
      <div className="w-[360px] h-full bg-gohan ">
        {!!header && (
          <div className="w-full h-full border border-l-0 border-r-0 border-t-0">
            <div className="w-full flex justify-between">
              <p className="font-semibold text-moon-18 left-6 leading-8">
                {header}
              </p>
              <span>
                <ControlsClose />
              </span>
            </div>
          </div>
        )}
        <div className="w-full h-full flex flex-col">{content}</div>
        {!!footer && <div className="w-full h-full "></div>}
      </div>
    )}
  </div>
);

export default Dialog;