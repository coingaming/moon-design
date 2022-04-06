import React from 'react';
import { TextLeftAlign, TextRightAlign } from '@heathmont/moon-icons';

interface IRTLModeSwitch {
  isEnabled: boolean;
  toggle: () => void;
}

const RTLModeSwitch: React.FC<IRTLModeSwitch> = ({ isEnabled, toggle }) => (
  <button
    onClick={toggle}
    type="button"
    aria-pressed="false"
    className="bg-white inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none shadow-md"
  >
    <span className="sr-only">Change rtl or ltr</span>
    <span
      className={'bg-grey-500 pointer-events-none relative inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200'}
    >
      <span
        className={`${
          isEnabled
            ? 'opacity-100 ease-out duration-100'
            : 'opacity-100 ease-in duration-200'
        }  absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
        aria-hidden="true"
      >
        {!isEnabled && <TextLeftAlign />}
      </span>
      <span
        className={`${
          isEnabled
            ? 'opacity-100 ease-in duration-200'
            : 'opacity-0 ease-out duration-100'
        } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
        aria-hidden="true"
      >
        {isEnabled && <TextRightAlign />}
      </span>
    </span>
  </button>
);

export default RTLModeSwitch;
