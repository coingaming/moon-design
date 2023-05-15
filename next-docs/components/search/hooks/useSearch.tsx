import { useState, useEffect, useCallback } from 'react';

const useSearch = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.metaKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const closeSearch = useCallback(() => setOpen(false), [setOpen]);
  return {
    open,
    setOpen,
    closeSearch,
  };
};

export default useSearch;
