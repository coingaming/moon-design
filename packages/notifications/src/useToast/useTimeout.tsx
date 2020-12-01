import { useEffect, useRef } from 'react';

/** keep typescript happy */
const noop = () => {};

function useTimeout(
  callback: () => void,
  delay: number | null | false | undefined,
  immediate?: boolean
) {
  const savedCallback = useRef(noop);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Execute callback if immediate is set.
  useEffect(() => {
    if (!immediate) {
      return;
    }
    if (delay === null || delay === false) {
      return;
    }
    savedCallback.current();
  }, [immediate]);

  // Set up the interval.
  useEffect(() => {
    if (delay === null || delay === false) {
      return undefined;
    }
    const tick = () => savedCallback.current();
    const id = setTimeout(tick, delay);
    return () => clearTimeout(id);
  }, [delay]);
}

export default useTimeout;
