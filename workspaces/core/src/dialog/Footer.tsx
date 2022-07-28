import React, {FunctionComponent} from "react";
import FooterProps from "./private/footerProps";

const DialogFooter: FunctionComponent<FooterProps> = ({
  leftButtons,
  rightButtons,
  isDivider
}) => (
  <div className={`w-full flex justify-between items-center ${isDivider ? 'border-beerus border-t pb-4 pt-6' : ''}`}>
    {!!leftButtons?.length && (<div className="flex items-center justify-center mx-6">
      {leftButtons.map((button) => (<div className="mr-2">{button}</div>))}
    </div>)}
    {!!rightButtons?.length && (<div className={`flex items-center mr-6 ${!leftButtons ? 'w-full flex items-center justify-end' : 'justify-center'}`}>
      {rightButtons.map((button) => (<div className="ml-2">{button}</div>))}
    </div>)}
  </div>
);

export default DialogFooter;
