'use client';

import { useState, useEffect, useRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-base-tw';
import ToggleCodeBtn from './ToggleCodeBtn';
import CodeCopy from '../CodeCopy';

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
        <ToggleCodeBtn expand={expand} clickHandler={clickHandler} />
      )}
    </div>
  );
};

export default CodePreviewWrapper;
