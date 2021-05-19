import { RefObject, useEffect, useRef } from 'react';

const on = (obj: any, ...args: any[]) => obj.addEventListener(...args);

const off = (obj: any, ...args: any[]) => obj.removeEventListener(...args);

const defaultEvents = ['mousedown', 'touchstart'];

const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents,
) => {
  const savedCallback = useRef(onClickAway);
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  useEffect(() => {
    const handler = (event: any) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };
    events.forEach((eventName) => on(document, eventName, handler));

    return () => {
      events.forEach((eventName) => off(document, eventName, handler));
    };
  }, [events, ref]);
};

export default useClickAway;
