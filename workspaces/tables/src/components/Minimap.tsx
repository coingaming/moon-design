import React, {
  useEffect,
  useCallback,
  useState,
  MutableRefObject,
} from 'react';

type ClassesProps = {
  visible?: boolean;
  offset?: number;
};

const Wrapper: React.FC<ClassesProps> = ({
  children,
  visible,
  offset = 10,
}) => {
  return (
    <div
      className={`absolute bottom-${
        offset + 40
      } right-10 w-auto h-[56px] z-1 bg-gohan rounded-moon-i-md p-1 pointer-events-none ${
        visible ? 'opacity-10' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

const Viewport = ({ children }) => {
  return (
    <div className="absolute w-0 h-0 overflow-hidden after:content-none after:absolute after:border-2 after:rounded after:w-full after:h-full">
      {children}
    </div>
  );
};
const Grid: React.FC<ClassesProps> = ({ children }) => {
  return (
    <div className={`grid auto-cols-auto	 h-full gap-1 relative`}>
      {children}
    </div>
  );
};

const Column: React.FC<ClassesProps> = ({ children }) => {
  return <div className={`h-full w-2 bg-goku/80 rounded-sm`}>{children}</div>;
};

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
    <Wrapper visible={visible} offset={footerHeight}>
      <Grid>
        <Viewport children={''} />
        {[...new Array(numberOfColumns)].map((_, index) => (
          <Column key={index} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Minimap;
