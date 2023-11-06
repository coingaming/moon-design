import { useState, useCallback } from 'react';
import { IconButton, Snackbar } from '@heathmont/moon-core-tw';
import { FilesCopy } from '@heathmont/moon-icons-tw';

const CodeCopy = ({ code }: { code: string }) => {
  const [snackbar, setSnackbar] = useState('');

  const openSnackbarHandler = useCallback(
    (type: string) => {
      if (snackbar) {
        setSnackbar('');
        setTimeout(() => {
          setSnackbar(type);
        }, 400);
      } else {
        setSnackbar(type);
      }
    },
    [snackbar]
  );

  const copyCode = () => {
    console.log('copyCode', code);
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(code ? code : '');
      openSnackbarHandler('bottom-center');
    }
  };
  return (
    <>
      <span className="absolute top-2 right-2 cursor-pointer z-1">
        <IconButton
          onClick={copyCode}
          variant="ghost"
          icon={<FilesCopy className="text-moon-24 text-bulma stroke-1" />}
        />
      </span>
      <Snackbar
        isOpen={snackbar === 'bottom-center'}
        onOpenChange={setSnackbar}
        position="bottom-center"
      >
        <Snackbar.Message>Copy code</Snackbar.Message>
      </Snackbar>
    </>
  );
};

export default CodeCopy;
