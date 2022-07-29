import React, { useEffect } from 'react';

const useOutsideClicker = (
  ref: React.RefObject<HTMLDivElement>,
  handleClick: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideClicker;
