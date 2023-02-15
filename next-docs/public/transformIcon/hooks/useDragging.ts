import React, { useState, useCallback, useEffect, ReactEventHandler } from 'react';

type UseDraggingProps = {
  divRef: React.RefObject<HTMLDivElement>;
  handleChanges: (arg0: File) => void;
};

const useDragging = ({ divRef, handleChanges }: UseDraggingProps): boolean => {
  const [dragging, setDragging] = useState(false);

  const handleDragIn = useCallback((ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.dataTransfer.items && ev.dataTransfer.items.length !== 0) {
      setDragging(true);
    }
  }, []);

  const handleDragOut = useCallback((ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    setDragging(false);
  }, []);

  const handleDrag = useCallback((ev) => {
    ev.preventDefault();
    ev.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      setDragging(false);

      const _files = ev.dataTransfer.files;
      if (_files && _files.length > 0) {
        const files = _files[0];
        handleChanges(files);
        ev.dataTransfer.clearData();
      }
    },
    [handleChanges]
  );

  useEffect(() => {
    const ele = divRef.current;
    ele?.addEventListener('dragenter', handleDragIn);
    ele?.addEventListener('dragleave', handleDragOut);
    ele?.addEventListener('dragover', handleDrag);
    ele?.addEventListener('drop', handleDrop);
    return () => {
      ele?.removeEventListener('dragenter', handleDragIn);
      ele?.removeEventListener('dragleave', handleDragOut);
      ele?.removeEventListener('dragover', handleDrag);
      ele?.removeEventListener('drop', handleDrop);
    };
  }, [handleDragIn, handleDragOut, handleDrag, handleDrop, divRef]);

  return dragging;
};

export default useDragging;
