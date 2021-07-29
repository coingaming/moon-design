import { RefObject, useEffect, useState } from "react";

const useScrollState = (tableRef: RefObject<HTMLDivElement | null>) => {
  const [scrollState, setScrollState] = useState({
    scrolledToLeft: true,
    scrolledToRight: true,
  });

  useEffect(() => {
    if (!tableRef?.current) return
    setScrollState(oldScrollState => ({...oldScrollState, scrolledToRight: tableRef.current!.scrollLeft + tableRef.current!.clientWidth === tableRef.current!.scrollWidth }))
  }, [tableRef])

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    if (!event.currentTarget) return;

    const scrolledToLeft = event.currentTarget.scrollLeft === 0
    const scrolledToRight = event.currentTarget.scrollLeft + event.currentTarget.clientWidth === event.currentTarget.scrollWidth

    if (scrolledToLeft !== scrollState.scrolledToLeft || scrolledToRight !== scrollState.scrolledToRight) {
      setScrollState({ scrolledToLeft, scrolledToRight })
    }
  };

  
  return {
    scrollState,
    handleScroll
  }
}

export default useScrollState