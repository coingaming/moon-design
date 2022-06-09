import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = () => {
  const [targetReached, setTargetReached] = useState(false);
  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1536px)');
    media.addEventListener('change', updateTarget);
    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }
    return () => media.removeListener(updateTarget);
  }, []);
  return targetReached;
};

export default useMediaQuery;
