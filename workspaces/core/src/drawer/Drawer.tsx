import React, { useState } from 'react';
import { ControlsClose } from '@heathmont/moon-icons-tw';
import Button from '../button/Button';
import { DrawerProps } from './private/drawerProps';

const Drawer: React.FC<DrawerProps> = ({
  title,
  width = 30,
  height = 100,
  content,
  primaryButton,
  secondaryButton,
  tertiaryButton,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const onOutsideClick = () => {setIsOpen(false)}

  return (
    <div className="w-full h-full" onClick={onOutsideClick}>
      <div
        className="flex flex-row justify-center items-center bg-red "
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <Button
          className="w-[312px] h-[48px] top-1/2 left-4/5 rounded-[8px] py-3 px-4 bg-[#4E46B4] absolute"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Toogle drawer
        </Button>
      </div>
      <div
        // TW not working for these classes, don't know why?
        style={{
          width: `${width}vw`,
          height: `${height}vh`,
        }}
        className={`w-[${width}vw] h-[${height}vh] flex flex-col items-stretch justify-between bg-white z-[99] fixed ease-in-out duration-300 top-0 left-[100%] ${
          isOpen ? 'translate-x-[-100%]' : 'translate-x-full'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <div className="w-full flex flex-row justify-between items-center border-b">
          <p className="text-left text-moon-18 mx-6 my-4 font-semibold leading-6">
            {title}
          </p>
          <Button
            className="mr-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ControlsClose fontSize='1.2rem'/>
          </Button>
        </div>
        {!!content && (<div className="grow m-6">{content}</div>)}
        {(!!tertiaryButton && !!secondaryButton || !!primaryButton) && (
          <div className="flex flex-row justify-between items-center p-3 border-t">
            {!!tertiaryButton && (<div className='mr-2'>
              {tertiaryButton}
            </div>)}
            {(!!secondaryButton || !!primaryButton) && (<div className='flex justify-center items-center gap-2'>
              {!!secondaryButton && (secondaryButton)}
              {!!primaryButton && (primaryButton)}
            </div>)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
