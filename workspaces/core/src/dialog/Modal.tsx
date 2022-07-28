import React, { FunctionComponent } from "react";
import DialogProps from "./private/dialogProps";

const Dialog: FunctionComponent<DialogProps> = ({
  width,
  height,
  isOpen,
  header,
  content,
  footer,
  handleClick,
}) => (
  <div>
    {isOpen && (
      <div className="flex items-center justify-center fixed top-0 left-0 w-[100vw] h-[100vh]">
        <div
          className="w-full h-full absolute left-0 top-0 bg-slate-800 opacity-60 z-10"
          onClick={() => handleClick ? handleClick() : null}
        />
        <div
          style={Object.assign(
            width ? { width } : {},
            height ? { height } : {}
          )}
          className={`flex flex-col relative z-20 ease-in-out duration-300 bg-gohan rounded-2xl ${
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
  </div>
);

export default Dialog;
