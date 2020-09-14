import { useState, useRef, useEffect } from 'react';

function useClickOutside() {
  const ref: any = useRef();
  const [state, setState] = useState({
    hasClickedOutside: false,
  });

  function handleEvent(e: any) {
    if (ref && ref.current) {
      if (ref.current.contains(e.target)) {
        setState({ hasClickedOutside: false });
      } else {
        setState({ hasClickedOutside: true });
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('touchstart', handleEvent);

    return () => {
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
    };
  }, []);

  return [ref, state.hasClickedOutside];
}

export default useClickOutside;
