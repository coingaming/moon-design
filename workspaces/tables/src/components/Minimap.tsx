import React, { useEffect, useCallback, useState } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import type MinimapProps from '../private/types/MinimapProps';

let timeoutId: ReturnType<typeof setTimeout>;
const TIMEOUT = 150;

const Minimap = ({ tableRef, footerRef, numberOfColumns }: MinimapProps) => {
  const [styles, setStyles] = useState({});
  const [visible, setVisible] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  const handleUpdateViewport = useCallback(() => {
    if (!tableRef.current) return {};

    const fullHeight = (tableRef.current.previousSibling as HTMLElement).scrollHeight;
    const fullWidth = (tableRef.current.previousSibling as HTMLElement).scrollWidth;

    const viewportHeight = (tableRef.current.previousSibling as HTMLElement).clientHeight;
    const viewportWidth = (tableRef.current.previousSibling as HTMLElement).clientWidth;

    const scrollTop = (tableRef.current.previousSibling as HTMLElement).scrollTop;
    const scrollLeft = (tableRef.current.previousSibling as HTMLElement).scrollLeft;

    setStyles({
      height: `${(viewportHeight / fullHeight) * 100}%`,
      width: `${(viewportWidth / fullWidth) * 100}%`,
      top: `${(scrollTop / fullHeight) * 100}%`,
      left: `${(scrollLeft / fullWidth) * 100}%`,
      borderColor: 'rgb(var(--piccolo))',
    });

    setVisible(false);

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setVisible(true);
    }, TIMEOUT);
  }, [tableRef]);
  useEffect(() => {
    if (!footerRef || !footerRef.current) return;
    setFooterHeight(footerRef.current.clientHeight);
  }, [footerRef, setFooterHeight]);
  useEffect(() => {
    if (!tableRef || !tableRef.current) return;
    const current = tableRef.current.previousSibling as HTMLElement;

    handleUpdateViewport();
    current.addEventListener('scroll', handleUpdateViewport, { passive: true });
    return () => {
      current.removeEventListener('scroll', handleUpdateViewport);
      clearTimeout(timeoutId);
    };
  }, [tableRef, handleUpdateViewport]);

  return (
    <div
      className={mergeClassnames(
        'absolute bottom-4 shadow-md end-10 w-auto h-14 z-1 bg-goku rounded-moon-s-sm p-1',
        'pointer-events-none transition-opacity',
        visible ? 'opacity-1' : 'opacity-0'
      )}
      ref={(tab: HTMLDivElement) => { tableRef.current = tab }}
    >
      <div className="grid grid-flow-col h-full gap-1 relative auto-cols-[minmax(0,_2fr)]">
        <div
          style={styles}
          className="absolute w-0 h-0 overflow-hidden rounded-moon-s-sm border-2"
        />
        {[...new Array(numberOfColumns)].map((_, index) => (
          <div
            className="h-full w-2 bg-gohan rounded-moon-s-sm"
            key={index}
            children={''}
          />
        ))}
      </div>
    </div>
  );
};

export default Minimap;
