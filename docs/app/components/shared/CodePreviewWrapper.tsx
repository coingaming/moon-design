'use client';

import { useState, useEffect, useRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-base-tw';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';
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
        'relative text-bulma p-4 pb-0 md:pr-12 overflow-hidden border border-t-0 border-beerus rounded-b-moon-s-sm'
      )}
    >
      <div
        className={mergeClassnames(
          'max-h-32 transition-[max-height] duration-150 ease-in-out overflow-hidden overflow-x-scroll pb-10 pt-10 md:pt-0',
          expand && 'max-h-96 overflow-scroll'
        )}
      >
        {children}
      </div>
      <CodeCopy code={code} />
      {height > 72 && (
        <div
          className={mergeClassnames(
            'absolute bottom-0 inset-x-0 h-32 flex items-end z-0 bg-[linear-gradient(180deg,_rgba(249,_250,_251,_0.00)_0%,_#F9FAFB_100%)]',
            expand && 'h-10'
          )}
        >
          <button
            onClick={clickHandler}
            className={mergeClassnames(
              'px-4 h-10 py-2 gap-2 text-moon-14 rounded-b-moon-s-sm relative z-0 flex justify-center items-center font-medium',
              'no-underline overflow-hidden whitespace-nowrap select-none transition duration-200 hover:bg-heles text-bulma hover:text-bulma w-full',
              expand ? 'bg-transperent' : 'bg-[rgba(249,_250,_251,_0.6)]'
            )}
          >
            <span className="flex items-center justify-center gap-2">
              {expand ? 'Collapsed code' : 'Expand code '}
              <ControlsChevronDownSmall
                className={mergeClassnames(
                  'text-moon-24',
                  expand && 'rotate-180'
                )}
              />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CodePreviewWrapper;
