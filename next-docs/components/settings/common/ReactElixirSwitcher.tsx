import React from 'react';

interface Props {
  isReactEnabled: boolean;
  toggle: () => void;
}

const ReactElixirSwitcher: React.FC<Props> = ({ isReactEnabled, toggle }) => {
  const isElixirEnabled = !isReactEnabled;
  return (
    <button
      onClick={toggle}
      type="button"
      aria-pressed="false"
      className="bg-white inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none shadow-md"
    >
      <span className="sr-only">Change React or Elixir</span>
      <span
        className={'bg-grey-500 pointer-events-none relative inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200'}
      >
        <span
          className={`${
            isReactEnabled
              ? 'opacity-100 ease-out duration-100'
              : 'opacity-100 ease-in duration-200'
          }  absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          {isElixirEnabled && <p>React</p>}
        </span>
        <span
          className={`${
            isElixirEnabled
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100'
          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          {isReactEnabled && <p>Elixir</p>}
        </span>
      </span>
    </button>
  );
};

export default ReactElixirSwitcher;
