'use client';

import { useState, useEffect, useRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-base-tw';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';
import CodeCopy from './CodeCopy';

const CodePreviewWrapper = ({
  children,
  code,
}: {
  children?: React.ReactNode;
  code: string;
}) => {
  const [expand, setExpand] = useState(false);
  const [height, setHeight] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const clickHandler = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    if (wrapperRef) {
      setHeight(wrapperRef?.current?.querySelector('#code')?.clientHeight || 0);
    }
  }, []);
  return (
    <div
      ref={wrapperRef}
      className={mergeClassnames(
        'relative text-bulma p-4 pb-10 overflow-hidden '
      )}
    >
      <div
        className={mergeClassnames(
          'max-h-32 transition-[max-height] duration-150 ease-in-out overflow-x-scroll',
          expand && 'max-h-96 overflow-scroll'
        )}
      >
        {children}
      </div>
      <CodeCopy code={code} />
      {height > 72 && (
        <div
          className={mergeClassnames(
            'absolute bottom-0 inset-x-0 h-32 flex items-end z-0',
            !expand &&
              'bg-[linear-gradient(180deg,_rgba(245,_245,_245,_0.00)_0%,_#F5F5F5_100%)]'
          )}
        >
          <button
            onClick={clickHandler}
            className={mergeClassnames(
              'px-4 h-10 py-2 gap-2 text-moon-14 rounded-b-moon-i-sm relative z-0 flex justify-center items-center font-medium',
              'no-underline overflow-hidden whitespace-nowrap select-none transition duration-200 hover:bg-heles text-trunks bg-transparent hover:text-bulma w-full'
            )}
          >
            {expand ? (
              <span className="flex items-center justify-center gap-2">
                Collapsed code{' '}
                <ControlsChevronDown className="text-moon-24 rotate-180" />
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                Expand code <ControlsChevronDown className="text-moon-24" />
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default CodePreviewWrapper;
