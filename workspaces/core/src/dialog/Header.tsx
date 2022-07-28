import React, {FunctionComponent} from "react";
import HeaderProps from "./private/headerProps";

const DialogHeader: FunctionComponent<HeaderProps> = ({
  leftIcons,
  title,
  rightIcons,
  isDivider
}) => (
  <div className={`w-full flex justify-between items-center ${isDivider ? 'border-beerus border-b pb-4' : ''}`}>
    {!!leftIcons?.length && (<div className="flex items-center justify-center ml-6">
      {leftIcons.map((icon) => (icon))}
    </div>)}
    {!!title && (<div className='grow flex items-center'>
      {
        typeof title === 'string' ? (<p className={`grow font-semibold text-moon-18 mx-6 leading-8 ${
          !!leftIcons && !!leftIcons?.length && !!rightIcons && !!rightIcons.length ? 'text-center' : ''
        } ${
          isDivider ? '' : 'my-4'
        }`}>
          {title}
        </p>) : (title)
      }
    </div>)}
    {!!rightIcons?.length && (<div className={`flex items-center mr-6 ${!title && !leftIcons ? 'w-full flex items-center justify-end' : 'justify-center'}`}>
      {rightIcons.map((icon) => (icon))}
    </div>)}
  </div>
);

export default DialogHeader;
