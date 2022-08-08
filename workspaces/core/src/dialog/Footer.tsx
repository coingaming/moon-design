import React from "react";
import FooterProps from "./private/footerProps";

const DialogFooter: React.FC<FooterProps> = ({
  leftButtons,
  rightButtons,
  isDivider,
  isVertical
}) => (
  <div className={`w-full flex justify-between ${
    isVertical ? 'flex-col items-stretch' : 'items-center'
  } ${
    isDivider ? 'border-beerus border-t pb-4 pt-6' : ''
  }`}>
    {!!leftButtons?.length && (<div className={`flex justify-center mx-6 ${
      isVertical ? 'flex-col items-stretch' : 'items-center'
    }`}>
      {leftButtons.map((button) => (<div className={`${
        isVertical ? 'flex flex-col mb-2' : 'mr-2'
      }`}>{button}</div>))}
    </div>)}
    {!!rightButtons?.length && (<div className={`flex ${
      !leftButtons ? 'w-full flex items-center justify-end' : 'justify-center'
    } ${
      isVertical ? 'flex-col items-stretch mx-6' : 'items-center mr-6'
    }`}>
      {rightButtons.map((button) => (<div className={`${
        isVertical ? 'flex flex-col mt-2' : 'ml-2'
      }`}>{button}</div>))}
    </div>)}
  </div>
);

export default DialogFooter;
