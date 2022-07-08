import React, { useState } from 'react';

import Button from '../button/Button';
import { DrawerProps } from './private/drawerProps';

const Drawer: React.FC<DrawerProps> = ({
  title,
  content,
  buttonOneLabel,
  buttonTwoLabel,
  buttonThreeLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

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
        className={`w-[356px] h-[100vh] bg-white z-[99] fixed ease-in-out duration-300 top-0 left-[100%] ${
          isOpen ? 'translate-x-[-100%]' : 'translate-x-full'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <div className="h-[10%] w-full flex flex-row justify-between items-center mt-4 border border-x-0 border-t-0">
          <p className="left-[252px] text-[18px] text-left mb-4 font-semibold leading-6 ml-6">
            {title}
          </p>
          <Button
            className="w-[13.5px] h-[13.5px] mr-8 mb-4"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            X
          </Button>
        </div>
        <div className="h-[75%] ">{content}</div>
        {content && (
          <div className="h-[10%] flex flex-row justify-between items-center mt-4 border border-x-0 border-b-0">
            <div>
              <Button
                className=" text-[14px] text-[#999CA0] top-1 left-3 text-left mb-3 font-semibold leading-6 ml-6"
                onClick={() => {
                  console.log('Button one clicked');
                }}
              >
                {buttonOneLabel || 'Label'}
              </Button>
            </div>
            <div>
              <Button
                className="w-[61px] h-[32px] top-1 left-3 rounded-[8px] mr-3 mb-3 border border-[#4E46B4] text-center"
                onClick={() => {
                  console.log('Button two clicked');
                }}
              >
                {buttonTwoLabel || 'Label'}
              </Button>
              <Button
                className="w-[61px] h-[32px] top-1 left-3 rounded-[8px] bg-[#4E46B4] text-white mr-3 mb-3 text-center"
                onClick={() => {
                  console.log('Button three clicked');
                }}
              >
                {buttonThreeLabel || 'Label'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
