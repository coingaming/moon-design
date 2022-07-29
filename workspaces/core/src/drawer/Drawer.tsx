import React from 'react';
import { ControlsClose } from '@heathmont/moon-icons-tw';
import Button from '../button/Button';
import { DrawerProps } from './private/drawerProps';

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  title,
  viewportWidth = 30,
  viewportHeight = 100,
  content,
  primaryButton,
  secondaryButton,
  tertiaryButton,
  handleToggle,
}) => {
  return (
    <div>
      {isOpen && (
        <div
          className="flex fixed bg-backdrop top-0 left-0 h-[100vh] w-full justify-end items-stretch z-10 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();

            if (handleToggle) handleToggle(false);
          }}
        />
      )}
      <div
        style={{
          width: `${viewportWidth}vw`,
          height: `${viewportHeight}vh`,
        }}
        className={`flex flex-col items-stretch justify-between bg-white fixed ease-in-out duration-300 top-0 left-[100%] shadow-xl z-20 ${
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
            className="mr-6 relative"
            onClick={() => (handleToggle ? handleToggle(!isOpen) : null)}
          >
            <ControlsClose fontSize="1.2rem" />
          </Button>
        </div>
        {!!content && <div className="grow m-6">{content}</div>}
        {((!!tertiaryButton && !!secondaryButton) || !!primaryButton) && (
          <div className="flex flex-row justify-between items-center p-3 border-t">
            {!!tertiaryButton && <div className="mr-2">{tertiaryButton}</div>}
            {(!!secondaryButton || !!primaryButton) && (
              <div className="flex justify-center items-center gap-2">
                {!!secondaryButton && secondaryButton}
                {!!primaryButton && primaryButton}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
