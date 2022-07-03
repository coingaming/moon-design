import { useState } from 'react';

const useRtl = () => {
  const [isRtlEnabled, setIsRtl] = useState(false);
  const toggleRtl = () => {
    const htmlTag = document && document?.querySelectorAll('html')[0];
    setIsRtl(!isRtlEnabled);
    if (isRtlEnabled) {
      htmlTag.setAttribute('dir', 'rtl');
    } else {
      htmlTag.setAttribute('dir', 'ltr');
    }
  };
  return { toggleRtl, isRtlEnabled };
};

export default useRtl;
