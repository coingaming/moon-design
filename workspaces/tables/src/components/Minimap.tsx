import React, {
  useEffect,
  useCallback,
  useState,
  MutableRefObject,
} from 'react';
import classNames from '../private/utils/classnames';

type Props = {
  numberOfColumns: number;
  tableRef: MutableRefObject<HTMLElement | null>;
  footerRef: MutableRefObject<HTMLElement | null>;
};

let timeoutId: ReturnType<typeof setTimeout>;
const TIMEOUT = 150;

const Minimap: React.FC<Props> = ({ tableRef, footerRef, numberOfColumns }) => {
  const [styles, setStyles] = useState({});
  const [visible, setVisible] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  const handleUpdateViewport = useCallback(() => {
    if (!tableRef.current) return {};

    const fullHeight = tableRef.current.scrollHeight;
    const fullWidth = tableRef.current.scrollWidth;

    const viewportHeight = tableRef.current.clientHeight;
    const viewportWidth = tableRef.current.clientWidth;

    const scrollTop = tableRef.current.scrollTop;
    const scrollLeft = tableRef.current.scrollLeft;

    setStyles({
      height: `${(viewportHeight / fullHeight) * 100}%`,
      width: `${(viewportWidth / fullWidth) * 100}%`,
      top: `${(scrollTop / fullHeight) * 100}%`,
      left: `${(scrollLeft / fullWidth) * 100}%`,
      borderColor: 'rgb(var(--piccolo))',
    });

    setVisible(true);

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setVisible(false);
    }, TIMEOUT);
  }, [tableRef]);
  useEffect(() => {
    if (!footerRef || !footerRef.current) return;
    setFooterHeight(footerRef.current.clientHeight);
  }, [footerRef, setFooterHeight]);
  useEffect(() => {
    if (!tableRef || !tableRef.current) return;
    const current = tableRef.current;

    handleUpdateViewport();
    current.addEventListener('scroll', handleUpdateViewport, { passive: true });
    return () => {
      current.removeEventListener('scroll', handleUpdateViewport);
      clearTimeout(timeoutId);
    };
  }, [tableRef, handleUpdateViewport]);

  return (
    <div
      className={classNames(
        'absolute bottom-4 shadow-md ltr:right-10 rtl:left-10 w-auto h-14 z-1 bg-gohan rounded-moon-s-sm p-1 pointer-events-none transition-opacity',
        visible ? 'opacity-1' : 'opacity-0'
      )}
    >
      <div className="grid grid-flow-col h-full gap-1 relative auto-cols-[minmax(0,_2fr)]">
        <div
          style={styles}
          className="absolute w-0 h-0 overflow-hidden rounded-moon-s-sm border-2"
        />
        {[...new Array(numberOfColumns)].map((_, index) => (
          <div
            className="h-full w-2 bg-goku/80 rounded-moon-s-sm"
            key={index}
            children={''}
          />
        ))}
      </div>
    </div>
  );
};

export default Minimap;
